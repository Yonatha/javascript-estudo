/*
 * Autor: Samara Raquel 
 * */ 
create database loja;
use loja;

create table clientes
(
    id int not null auto_increment,
    cpf    varchar(15) not null,
    nome varchar(50) not null,
    situacao int (1) default 0,
    email varchar (50) not null,
    primary key(id)
);

create table fornecedores
(
	id int not null auto_increment,
	nome varchar(50) not null,
	cnpj varchar(20) not null,
	situacao int (1) default 1,
	primary key(id)
);

create table produtos
(
	id int not null auto_increment,
	nome varchar(20) not null,
	fornecedor_id int not null,
	situacao int,
	valor decimal (10,2),
	primary key(id),
	foreign key (fornecedor_id) references fornecedores (id)
);

create table categorias
(
	id int not null auto_increment,
	nome varchar(20) not null,
	primary key (id)
);

create table produto_categorias
(
	produto_id int not null,
	categoria_id int not null,
	foreign key (produto_id) references produtos (id),
	foreign key (categoria_id) references categorias (id)
);

create table cliente_enderecos
(
	id int not null auto_increment,
	cliente_id int not null,
	endereco varchar(50) not null,
	uf varchar (2) not null,
	complemento varchar(10) not null,
	principal int (1),
	primary key (id),
	foreign key (cliente_id) references clientes (id)
);

create table pedidos
(
	id int not null auto_increment,
	cliente_id int not null,
	endereco_id varchar(50) not null,
	total decimal (10,2) not null,
	foreign key (cliente_id) references clientes (id),
	primary key (id)
	);
	
create table carrinhos
(
	id int not null auto_increment,
	cliente_id int not null,
	dt_cadastro datetime default now(),
	dt_autualizacao datetime default now(),
	foreign key (cliente_id) references clientes (id),
	primary key (id)
);


create table carrinho_produtos
(
	produto_id int not null,
	carrinho_id int not null,
	quantidade int not null,
	foreign key (produto_id) references produtos (id),
	foreign key (carrinho_id) references carrinhos (id)
);


create table produto_estoques
(
	id int not null auto_increment,
	quantidade int not null,
	produto_id int not null,
	quantidade_min int not null,
	foreign key (produto_id) references produtos (id),
	primary key (id)
);

create table pedido_produtos
(
	pedido_id int not null,
	produto_id int not null,
	quantidade int not null,
	foreign key (pedido_id) references pedidos (id),
	foreign key (produto_id) references produtos (id)
);

create table configuracoes
(
	valor_ponto int not null,
	nome_loja varchar(30) not null,
	validade_pontos int(3) default 90
);

create table status_pedidos
(
	id int not null auto_increment,
	nome varchar (25) not null,
	primary key (id)
);


create table pedido_status_atualizacoes
(
	pedido_id int not null,
	status_pedido_id int not null,
	dt_atualizacao datetime default now(),
	foreign key (pedido_id) references pedidos (id),
	foreign key (status_pedido_id) references status_pedidos (id)
);


create table cliente_pontos
(
	cliente_id int not null,
	quantidade int not null,
	pedido_id int not null,
	dt_cadastro datetime default now(),
	dt_expiracao datetime not null,
	foreign key (cliente_id) references clientes (id),
	foreign key (pedido_id) references pedidos (id)
);

create table pagamento_metodos
(
	id int not null auto_increment,
	nome varchar (30) not null,
	primary key(id)
);

create table pagamento_situacao
(
	id int not null auto_increment,
	nome varchar (20),
	primary key (id)
);

create table pagamentos 
(
	id int not null auto_increment,
	pedido_id int not null,
	pagamento_metodo_id int not null,
	dt_criacao datetime default now(),
	dt_atualizacao datetime default now(),
	foreign key (pedido_id) references pedidos (id),
	foreign key (pagamento_metodo_id) references pagamento_metodos (id),
	primary key (id)
);


create table pagamento_situacao_historico 
(
	pagamento_id int not null,
	pagamento_metodo_id int not null,
	pagamento_situacao_id int not null,
	dt_criacao datetime default now(),
	foreign key (pagamento_id) references pagamentos (id),
	foreign key (pagamento_metodo_id) references pagamento_metodos (id),  
	foreign key (pagamento_situacao_id) references pagamento_situacao (id)
);

create table mensagem_email
(
	id int not null auto_increment,
	nome varchar (40),
	primary key (id)
);

create table pagamento_historico_mensagem
(
	pedido_id int not null,
	pagamento_metodo_id int not null,
	pagamento_situacao_id int not null,
	mensagem_email_id int not null,
	situacao int not null,
	dt_envio datetime default now(),
	foreign key (pedido_id) references pedidos (id),
	foreign key (pagamento_metodo_id) references pagamento_metodos (id),
	foreign key (pagamento_situacao_id) references pagamento_situacao (id),
	foreign key (mensagem_email_id) references mensagem_email (id)
);