use Loja;

SELECT table_name FROM information_schema.tables;

CREATE TABLE dbo.Fornecedores (
  Id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
  NomeFantasia VARCHAR(20) NOT NULL,
  RazaoSocial VARCHAR(50) NOT NULL,
  Cnpj VARCHAR(20) NOT NULL UNIQUE,
  Observacoes VARCHAR(255) NOT NULL
);

CREATE TABLE dbo.Categorias (
  Id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
  Nome VARCHAR(50) NOT NULL,
  Subcategoria INT NULL,
  DataCriacao DATETIME DEFAULT CURRENT_TIMESTAMP,
  DataAtualizacao DATETIME DEFAULT GETDATE()
);

CREATE TABLE dbo.Produtos (
  Sku INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
  Nome VARCHAR(20) NOT NULL,
  Preco DECIMAL(5,2) NOT NULL,
  CategoriaId INT NOT NULL,
  FornecedorId INT NOT NULL,
  CodigoBarras VARCHAR(36) NOT NULL,
  Marca VARCHAR(30) NOT NULL,
  CONSTRAINT FK_Produtos_Fornecedores FOREIGN KEY (FornecedorId) REFERENCES dbo.Fornecedores(Id),
  CONSTRAINT FK_Produtos_Categorias FOREIGN KEY (CategoriaId) REFERENCES dbo.Categorias(Id)
);

CREATE TABLE dbo.Estoques (
  Sku INT NOT NULL PRIMARY KEY,
  QtdMin INT NOT NULL,
  QtdMax INT NOT NULL,
  CONSTRAINT FK_Estoque_Produtos FOREIGN KEY (Sku) REFERENCES dbo.Produtos(Sku) ON DELETE CASCADE
);