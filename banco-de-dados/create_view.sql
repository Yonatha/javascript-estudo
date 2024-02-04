select
	uf,
	sum(homicidios) as total_homicidios,
	sum(populacao) as total_populacao,
	1.0 * sum(homicidios)/ sum(populacao) as taxa_homicidios
from
	homicidios
group by
	uf
order by
	taxa_homicidios desc;

CREATE VIEW view_taxa_homicidios AS
SELECT
    uf,
    SUM(homicidios) AS total_homicidios,
    SUM(populacao) AS total_populacao,
    1.0 * SUM(homicidios) / SUM(populacao) AS taxa_homicidios
FROM
    homicidios
GROUP BY
    uf
ORDER BY
    taxa_homicidios DESC;

-- violência por UF
create view vw_violencia_por_uf as 
select
	uf,
	sum(homicidios) as total_homicidios,
	sum(populacao) as total_populacao,
	1.0 * sum(homicidios)/ sum(populacao) as taxa_homicidios
from
	homicidios
group by
	uf
order by
	taxa_homicidios desc;

-- Trigger
-- Atualizar estoque com base no produto inserido no carrinho
DELIMITER //
CREATE TRIGGER atualizar_estoque
AFTER INSERT ON carrinho_produtos
FOR EACH ROW
BEGIN
    UPDATE produto_estoques
    SET quantidade = quantidade - NEW.quantidade
    WHERE id = NEW.produto_id;
END //
DELIMITER;


/**
 * Trigger para atualizar o estoque de um produto após a inserção de um novo registro na tabela carrinho_produtos.
 *
 * Nome: atualizar_estoque
 * Evento: AFTER INSERT
 * Tabela: carrinho_produtos
 * Escopo: PARA CADA LINHA
 *
 * Descrição:
 * Esta trigger é acionada após a inserção de um novo registro na tabela 
 * carrinho_produtos. Ela atualiza a quantidade do
 * estoque do produto correspondente, subtraindo a quantidade inserida no 
 * carrinho.
 *
 * Observações:
 * - Certifique-se de que a tabela produto_estoques esteja corretamente 
 * configurada e contenha o campo 'quantidade' e
 *   'id' referente ao produto.
 * - A trigger pressupõe que o estoque do produto será atualizado com 
 * base na quantidade inserida em carrinho_produtos.
 *   Certifique-se de que a lógica esteja correta para o seu caso específico.
 */
DELIMITER //
CREATE TRIGGER atualizar_estoque
AFTER INSERT ON carrinho_produtos
FOR EACH ROW
BEGIN
    UPDATE produto_estoques
    SET quantidade = quantidade - NEW.quantidade
    WHERE id = NEW.produto_id;
END //


DELIMITER ;

/*
 * Nome: gerar_pontos
 * Descrição: Esta trigger é acionada após uma atualização na tabela "pagamentos". 
 * Quando a situação do pagamento for alterada para 3, ela realiza o cálculo dos 
 * pontos a serem atribuídos ao cliente e insere um registro na tabela "cliente_pontos".
 * Funcionalidade:
 * Calcula os pontos a serem atribuídos ao cliente com base no valor total do 
 * pagamento e nas configurações definidas.
 * Obtém o cliente_id do pedido relacionado ao pagamento.
 * Insere um novo registro na tabela "cliente_pontos" com as informações necessárias.
 * */

DELIMITER //
CREATE TRIGGER gerar_pontos
AFTER UPDATE ON pagamentos
FOR EACH ROW
BEGIN
    IF NEW.situacao = 3 AND OLD.situacao <> 3 then
    
        /* TODO: Obter o valor_total do pedido pois na tabela pagamentos 
         * não tem essa coluna
         */    
    
        -- Cálculo dos pontos
        SELECT ROUND(NEW.valor_total / configuracoes.valor_ponto)
        INTO @pontos
        FROM configuracoes
        WHERE 1;
            
        -- Inserção do registro em cliente_pontos
        INSERT INTO cliente_pontos (cliente_id, quantidades, pedido_id, dt_cadastro, dt_expiracao)
        SELECT pedidos.cliente_id, @pontos, NEW.pedido_id, NOW(), NOW() + INTERVAL configuracoes.validade_pontos DAY
        FROM pedidos
        WHERE pedidos.id = NEW.pedido_id;
    END IF;
END //
DELIMITER ;


/* Procedimento armazenado para adicionar produto ao carrinho do cliente.
 * Autor: Fulano <fulano@gmail.com>
 * @var_cliente_id Chave primaria do cliente contido na tabela clientes
 * @var_produto_id Chave primaria do produto na tabela produtos 
 * @var_qtd Quantidade desejada do produto que se deseja comprar
 * 
 * Exemplo: 
 * 			call adicionar_produto_ao_carrinho(4, 3, 1);
 * 
 **/
create procedure adicionar_produto_ao_carrinho(
	in var_cliente_id int,
	in var_produto_id int,
	in var_qtd int
)
begin
	/* TODO verificar se o var_cliente_id já possui um carrinho criado
	  se já existir, utilizar o mesmo carrinho
	*/
	-- variável para armazenar o id do carrinho que será criado
	declare var_carrinho_id int;
	
	-- Criando o carrinho
	insert into carrinhos (cliente_id) values(var_cliente_id);
	set var_carrinho_id = last_insert_id();
	
	-- Inserir o produto no carrinho 
	insert into carrinho_produtos 
	(carrinho_id, produto_id, quantidade) 
	values(var_carrinho_id, var_produto_id, var_qtd);
end