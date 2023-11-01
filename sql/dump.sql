/*
 * Autor: Samara Raquel 
 * */ 

use loja;

-- ============= ADICIONANDO OS DADOS NAS TABELAS===========

insert into clientes (cpf,nome,situacao, email)
values ("857.272.210-64","Fabio",1, "fabio123@gmail.com");

insert into clientes (cpf,nome,situacao, email)
values ("857.272.210-65","Samara",1, "samara123@gmail.com");

insert into clientes (cpf,nome,situacao, email)
values ("857.272.210-66","Alexandre",1, "alexandre123@gmail.com");

insert into clientes (cpf,nome,situacao, email)
values ("857.272.210-67","Lucas",1, "lucas123@gmail.com");

insert into fornecedores (nome,cnpj,situacao)
values ("Fornecedor A","50.057.775/0001-71",1);

insert into fornecedores (nome,cnpj,situacao)
values ("Fornecedor B","50.057.775/0001-72",1);

insert into fornecedores (nome,cnpj,situacao)
values ("Fornecedor C","50.057.775/0001-73",1);

insert into fornecedores (nome,cnpj,situacao)
values ("Fornecedor D","50.057.775/0001-74",1);


insert into produtos (nome, fornecedor_id, situacao, valor)
values ("Produto A", 1, 1, 59.90);

insert into produtos  (nome, fornecedor_id, situacao, valor)
values ("Produto B", 2, 1, 36.60);

insert into produtos  (nome, fornecedor_id, situacao, valor)
values ("Produto C", 3, 1, 105.99);

insert into produtos  (nome, fornecedor_id, situacao, valor)
values ("Produto D", 4, 1, 1.99);

insert into categorias  (nome)
values ("Eletrodomestico");

insert into categorias  (nome)
values ("Medicamentos");

insert into categorias  (nome)
values ("Infatil");

insert into categorias  (nome)
values ("Automotivos");

insert into produto_categorias (produto_id, categoria_id)
values (2, 1);

insert into produto_categorias (produto_id, categoria_id)
values (3, 2);

insert into produto_categorias (produto_id, categoria_id)
values (4, 3);

insert into produto_categorias (produto_id, categoria_id)
values (1, 4);

insert into cliente_enderecos (cliente_id, endereco, uf, complemento, principal)
values (1, "Rua da Lama", "PB", 45, 0);

insert into cliente_enderecos (cliente_id, endereco, uf, complemento, principal)
values (1, "Av. Esburacada", "SP", "APT 106", 1);

insert into cliente_enderecos (cliente_id, endereco, uf, complemento, principal)
values (2, "Rua Atoleiro", "PE", "951", 1);

insert into cliente_enderecos (cliente_id, endereco, uf, complemento, principal)
values (3, "Rua da Lama", "PB", "65", 1);

insert into cliente_enderecos (cliente_id, endereco, uf, complemento, principal)
values (4, "Rua Sem saida", "PB", "180", 1);


insert into pedidos (cliente_id, endereco_id, total)
values (1, 1, 299.50);

insert into pedidos (cliente_id, endereco_id, total)
values (2, 2, 152.30);

insert into pedidos (cliente_id, endereco_id, total)
values (3, 4, 47.49);


-- Criando um carrinho para o cliente 1
insert into carrinhos (cliente_id)
values (1);

insert into carrinhos (cliente_id)
values (2);

insert into carrinhos (cliente_id)
values (3);

insert into carrinhos (cliente_id)
values (4);

-- Insere produtos no carrinho do cliente 1 (Fábio)
insert into carrinho_produtos(produto_id, carrinho_id, quantidade)
values(2,1,5);

insert into carrinho_produtos(produto_id, carrinho_id, quantidade)
values(3,1,2);

insert into carrinho_produtos(produto_id, carrinho_id, quantidade)
values(2,2,1);

insert into carrinho_produtos(produto_id, carrinho_id, quantidade)
values(4,3,1);


insert into produto_estoques (quantidade, produto_id, quantidade_min)
values (10, 2, 2);

insert into produto_estoques (quantidade, produto_id, quantidade_min)
values (10, 3, 2);

insert into produto_estoques (quantidade, produto_id, quantidade_min)
values (5, 4, 2);

insert into produto_estoques (quantidade, produto_id, quantidade_min)
values (100, 1, 2);

insert into pedido_produtos (pedido_id, produto_id, quantidade)
values (1, 2, 2);

insert into pedido_produtos (pedido_id, produto_id, quantidade)
values (2, 3, 3);

insert into pedido_produtos (pedido_id, produto_id, quantidade)
values (3, 4, 5);

insert into configuracoes (valor_ponto, nome_loja, validade_pontos)
values (5, "Top Marketplace", 90);


insert into status_pedidos (nome)
values ("pedido realizado");

insert into status_pedidos (nome)
values ("pagamento confirmado");

insert into status_pedidos (nome)
values ("Pedido enviado");

insert into status_pedidos (nome)
values ("Pedido entregue");

insert into status_pedidos (nome)
values ("Pedido cancelado");

insert into pedido_status_atualizacoes (pedido_id, status_pedido_id)
values (1, 1);

insert into pedido_status_atualizacoes (pedido_id, status_pedido_id)
values (1, 2);

insert into pedido_status_atualizacoes (pedido_id, status_pedido_id)
values (1, 3);

insert into pedido_status_atualizacoes (pedido_id, status_pedido_id)
values (1, 4);

insert into pedido_status_atualizacoes (pedido_id, status_pedido_id)
values (2, 1);

insert into pedido_status_atualizacoes (pedido_id, status_pedido_id)
values (2, 2);

insert into pedido_status_atualizacoes (pedido_id, status_pedido_id)
values (2, 5);

insert into cliente_pontos (cliente_id, quantidade, pedido_id, dt_expiracao)
values (1, 60, 2, "2023-09-26 19:18:51");

insert into cliente_pontos (cliente_id, quantidade, pedido_id, dt_expiracao)
values (2, 30, 2, "2023-12-26 19:18:51");

insert into cliente_pontos (cliente_id, quantidade, pedido_id, dt_expiracao)
values (3, 9, 3, "2024-06-26 19:18:51");

insert into pagamento_metodos (nome)
values ("Cartão de Crédito");

insert into pagamento_metodos (nome)
values ("Debito");

insert into pagamento_metodos (nome)
values ("Pix");

insert into pagamento_metodos (nome)
values ("Boleto");

insert into pagamento_situacao (nome)
values ("Pendente");

insert into pagamento_situacao (nome)
values ("Processado");

insert into pagamento_situacao (nome)
values ("Pago");

insert into pagamento_situacao (nome)
values ("Estornado");

insert into pagamento_situacao (nome)
values ("Cancelado");

insert into pagamento_situacao (nome)
values ("Boleto Expirado");

insert into pagamentos (pedido_id,  pagamento_metodo_id)
values (1, 1);

insert into pagamentos (pedido_id, pagamento_metodo_id)
values (2, 2);

insert into pagamentos (pedido_id, pagamento_metodo_id)
values (3, 3);

insert into pagamentos (pedido_id, pagamento_metodo_id)
values (3, 1);

insert into pagamento_situacao_historico (pagamento_id, pagamento_metodo_id, pagamento_situacao_id)
values (1, 1, 1);

insert into pagamento_situacao_historico (pagamento_id, pagamento_metodo_id, pagamento_situacao_id)
values (1, 3, 2);

insert into pagamento_situacao_historico (pagamento_id , pagamento_metodo_id, pagamento_situacao_id)
values (1, 2, 3);

insert into mensagem_email (nome)
values ("Pedido realizado");

insert into mensagem_email (nome)
values ("Aguardando pagamento");

insert into mensagem_email (nome)
values ("Pagamento confirmado");

insert into mensagem_email (nome)
values ("Pedidos em separação");

insert into mensagem_email (nome)
values ("Pedido na transportadora");

insert into mensagem_email (nome)
values ("Pedido Entregue");

insert into pagamento_historico_mensagem (pedido_id, pagamento_metodo_id, pagamento_situacao_id, mensagem_email_id, situacao)
values (1, 1, 1, 1, 1);

insert into pagamento_historico_mensagem (pedido_id, pagamento_metodo_id, pagamento_situacao_id, mensagem_email_id, situacao)
values (1, 1, 2, 2, 1);

insert into pagamento_historico_mensagem (pedido_id, pagamento_metodo_id, pagamento_situacao_id, mensagem_email_id, situacao)
values (1, 1, 3, 3, 1);

