-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: loja_completa
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carrinho_produtos`
--

DROP TABLE IF EXISTS `carrinho_produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carrinho_produtos` (
  `produto_id` int NOT NULL,
  `carrinho_id` int NOT NULL,
  `quantidade` int NOT NULL,
  KEY `produto_id` (`produto_id`),
  KEY `carrinho_id` (`carrinho_id`),
  CONSTRAINT `carrinho_produtos_ibfk_1` FOREIGN KEY (`produto_id`) REFERENCES `produtos` (`id`),
  CONSTRAINT `carrinho_produtos_ibfk_2` FOREIGN KEY (`carrinho_id`) REFERENCES `carrinhos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrinho_produtos`
--

LOCK TABLES `carrinho_produtos` WRITE;
/*!40000 ALTER TABLE `carrinho_produtos` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrinho_produtos` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `atualizar_estoque` AFTER INSERT ON `carrinho_produtos` FOR EACH ROW begin
	update produto_estoques
	set quantidade = quantidade - new.quantidade;
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `carrinhos`
--

DROP TABLE IF EXISTS `carrinhos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carrinhos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente_id` int NOT NULL,
  `dt_cadastro` datetime DEFAULT CURRENT_TIMESTAMP,
  `dt_autualizacao` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `cliente_id` (`cliente_id`),
  CONSTRAINT `carrinhos_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrinhos`
--

LOCK TABLES `carrinhos` WRITE;
/*!40000 ALTER TABLE `carrinhos` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrinhos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Eletrodomestico'),(2,'Medicamentos'),(3,'Infatil'),(4,'Automotivos');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente_enderecos`
--

DROP TABLE IF EXISTS `cliente_enderecos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente_enderecos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente_id` int NOT NULL,
  `endereco` varchar(50) NOT NULL,
  `uf` varchar(2) NOT NULL,
  `complemento` varchar(10) NOT NULL,
  `principal` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cliente_id` (`cliente_id`),
  CONSTRAINT `cliente_enderecos_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente_enderecos`
--

LOCK TABLES `cliente_enderecos` WRITE;
/*!40000 ALTER TABLE `cliente_enderecos` DISABLE KEYS */;
INSERT INTO `cliente_enderecos` VALUES (3,2,'Rua Atoleiro','PE','951',1),(4,3,'Rua da Lama','PB','65',1),(5,4,'Rua Sem saida','PB','180',1);
/*!40000 ALTER TABLE `cliente_enderecos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente_pontos`
--

DROP TABLE IF EXISTS `cliente_pontos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente_pontos` (
  `cliente_id` int NOT NULL,
  `quantidade` int NOT NULL,
  `pedido_id` int NOT NULL,
  `dt_cadastro` datetime DEFAULT CURRENT_TIMESTAMP,
  `dt_expiracao` datetime NOT NULL,
  KEY `pedido_id` (`pedido_id`),
  KEY `cliente_id` (`cliente_id`),
  CONSTRAINT `cliente_pontos_ibfk_2` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`),
  CONSTRAINT `cliente_pontos_ibfk_3` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente_pontos`
--

LOCK TABLES `cliente_pontos` WRITE;
/*!40000 ALTER TABLE `cliente_pontos` DISABLE KEYS */;
INSERT INTO `cliente_pontos` VALUES (1,60,2,'2024-01-03 12:06:30','2023-09-26 19:18:51'),(2,30,2,'2024-01-03 12:06:30','2023-12-26 19:18:51'),(3,9,3,'2024-01-03 12:06:30','2024-06-26 19:18:51');
/*!40000 ALTER TABLE `cliente_pontos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cpf` varchar(15) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `situacao` int DEFAULT '0',
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'857.272.210-64','Fabio',1,'fabio123@gmail.com'),(2,'857.272.210-65','Samara',1,'samara123@gmail.com'),(3,'857.272.210-66','Alexandre',1,'alexandre123@gmail.com'),(4,'857.272.210-67','Lucas',1,'lucas123@gmail.com');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `configuracoes`
--

DROP TABLE IF EXISTS `configuracoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `configuracoes` (
  `valor_ponto` int NOT NULL,
  `nome_loja` varchar(30) NOT NULL,
  `validade_pontos` int DEFAULT '90'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `configuracoes`
--

LOCK TABLES `configuracoes` WRITE;
/*!40000 ALTER TABLE `configuracoes` DISABLE KEYS */;
INSERT INTO `configuracoes` VALUES (5,'Top Marketplace',90);
/*!40000 ALTER TABLE `configuracoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fornecedores`
--

DROP TABLE IF EXISTS `fornecedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fornecedores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `cnpj` varchar(20) NOT NULL,
  `situacao` int DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fornecedores`
--

LOCK TABLES `fornecedores` WRITE;
/*!40000 ALTER TABLE `fornecedores` DISABLE KEYS */;
INSERT INTO `fornecedores` VALUES (1,'Fornecedor A','50.057.775/0001-71',1),(2,'Fornecedor B','50.057.775/0001-72',1),(3,'Fornecedor C','50.057.775/0001-73',1),(4,'Fornecedor D','50.057.775/0001-74',1);
/*!40000 ALTER TABLE `fornecedores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mensagem_email`
--

DROP TABLE IF EXISTS `mensagem_email`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mensagem_email` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mensagem_email`
--

LOCK TABLES `mensagem_email` WRITE;
/*!40000 ALTER TABLE `mensagem_email` DISABLE KEYS */;
INSERT INTO `mensagem_email` VALUES (1,'Pedido realizado'),(2,'Aguardando pagamento'),(3,'Pagamento confirmado'),(4,'Pedidos em separação'),(5,'Pedido na transportadora'),(6,'Pedido Entregue');
/*!40000 ALTER TABLE `mensagem_email` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pagamento_historico_mensagem`
--

DROP TABLE IF EXISTS `pagamento_historico_mensagem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pagamento_historico_mensagem` (
  `pedido_id` int NOT NULL,
  `pagamento_metodo_id` int NOT NULL,
  `pagamento_situacao_id` int NOT NULL,
  `mensagem_email_id` int NOT NULL,
  `situacao` int NOT NULL,
  `dt_envio` datetime DEFAULT CURRENT_TIMESTAMP,
  KEY `pedido_id` (`pedido_id`),
  KEY `pagamento_metodo_id` (`pagamento_metodo_id`),
  KEY `pagamento_situacao_id` (`pagamento_situacao_id`),
  KEY `mensagem_email_id` (`mensagem_email_id`),
  CONSTRAINT `pagamento_historico_mensagem_ibfk_1` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`),
  CONSTRAINT `pagamento_historico_mensagem_ibfk_2` FOREIGN KEY (`pagamento_metodo_id`) REFERENCES `pagamento_metodos` (`id`),
  CONSTRAINT `pagamento_historico_mensagem_ibfk_3` FOREIGN KEY (`pagamento_situacao_id`) REFERENCES `pagamento_situacao` (`id`),
  CONSTRAINT `pagamento_historico_mensagem_ibfk_4` FOREIGN KEY (`mensagem_email_id`) REFERENCES `mensagem_email` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagamento_historico_mensagem`
--

LOCK TABLES `pagamento_historico_mensagem` WRITE;
/*!40000 ALTER TABLE `pagamento_historico_mensagem` DISABLE KEYS */;
INSERT INTO `pagamento_historico_mensagem` VALUES (1,1,1,1,1,'2024-01-03 12:06:30'),(1,1,2,2,1,'2024-01-03 12:06:30'),(1,1,3,3,1,'2024-01-03 12:06:30');
/*!40000 ALTER TABLE `pagamento_historico_mensagem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pagamento_metodos`
--

DROP TABLE IF EXISTS `pagamento_metodos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pagamento_metodos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagamento_metodos`
--

LOCK TABLES `pagamento_metodos` WRITE;
/*!40000 ALTER TABLE `pagamento_metodos` DISABLE KEYS */;
INSERT INTO `pagamento_metodos` VALUES (1,'Cartão de Crédito'),(2,'Debito'),(3,'Pix'),(4,'Boleto');
/*!40000 ALTER TABLE `pagamento_metodos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pagamento_situacao`
--

DROP TABLE IF EXISTS `pagamento_situacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pagamento_situacao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagamento_situacao`
--

LOCK TABLES `pagamento_situacao` WRITE;
/*!40000 ALTER TABLE `pagamento_situacao` DISABLE KEYS */;
INSERT INTO `pagamento_situacao` VALUES (1,'Pendente'),(2,'Processado'),(3,'Pago'),(4,'Estornado'),(5,'Cancelado'),(6,'Boleto Expirado');
/*!40000 ALTER TABLE `pagamento_situacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pagamento_situacao_historico`
--

DROP TABLE IF EXISTS `pagamento_situacao_historico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pagamento_situacao_historico` (
  `pagamento_id` int NOT NULL,
  `pagamento_metodo_id` int NOT NULL,
  `pagamento_situacao_id` int NOT NULL,
  `dt_criacao` datetime DEFAULT CURRENT_TIMESTAMP,
  KEY `pagamento_id` (`pagamento_id`),
  KEY `pagamento_metodo_id` (`pagamento_metodo_id`),
  KEY `pagamento_situacao_id` (`pagamento_situacao_id`),
  CONSTRAINT `pagamento_situacao_historico_ibfk_1` FOREIGN KEY (`pagamento_id`) REFERENCES `pagamentos` (`id`),
  CONSTRAINT `pagamento_situacao_historico_ibfk_2` FOREIGN KEY (`pagamento_metodo_id`) REFERENCES `pagamento_metodos` (`id`),
  CONSTRAINT `pagamento_situacao_historico_ibfk_3` FOREIGN KEY (`pagamento_situacao_id`) REFERENCES `pagamento_situacao` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagamento_situacao_historico`
--

LOCK TABLES `pagamento_situacao_historico` WRITE;
/*!40000 ALTER TABLE `pagamento_situacao_historico` DISABLE KEYS */;
INSERT INTO `pagamento_situacao_historico` VALUES (1,1,1,'2024-01-03 12:06:30'),(1,3,2,'2024-01-03 12:06:30'),(1,2,3,'2024-01-03 12:06:30');
/*!40000 ALTER TABLE `pagamento_situacao_historico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pagamentos`
--

DROP TABLE IF EXISTS `pagamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pagamentos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pedido_id` int NOT NULL,
  `pagamento_metodo_id` int NOT NULL,
  `dt_criacao` datetime DEFAULT CURRENT_TIMESTAMP,
  `dt_atualizacao` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `pedido_id` (`pedido_id`),
  KEY `pagamento_metodo_id` (`pagamento_metodo_id`),
  CONSTRAINT `pagamentos_ibfk_1` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`),
  CONSTRAINT `pagamentos_ibfk_2` FOREIGN KEY (`pagamento_metodo_id`) REFERENCES `pagamento_metodos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagamentos`
--

LOCK TABLES `pagamentos` WRITE;
/*!40000 ALTER TABLE `pagamentos` DISABLE KEYS */;
INSERT INTO `pagamentos` VALUES (1,1,1,'2024-01-03 12:06:30','2024-01-03 12:06:30'),(2,2,2,'2024-01-03 12:06:30','2024-01-03 12:06:30'),(3,3,3,'2024-01-03 12:06:30','2024-01-03 12:06:30'),(4,3,1,'2024-01-03 12:06:30','2024-01-03 12:06:30');
/*!40000 ALTER TABLE `pagamentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido_produtos`
--

DROP TABLE IF EXISTS `pedido_produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido_produtos` (
  `pedido_id` int NOT NULL,
  `produto_id` int NOT NULL,
  `quantidade` int NOT NULL,
  KEY `pedido_id` (`pedido_id`),
  KEY `produto_id` (`produto_id`),
  CONSTRAINT `pedido_produtos_ibfk_1` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`),
  CONSTRAINT `pedido_produtos_ibfk_2` FOREIGN KEY (`produto_id`) REFERENCES `produtos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido_produtos`
--

LOCK TABLES `pedido_produtos` WRITE;
/*!40000 ALTER TABLE `pedido_produtos` DISABLE KEYS */;
INSERT INTO `pedido_produtos` VALUES (1,2,2),(2,3,3),(3,4,5);
/*!40000 ALTER TABLE `pedido_produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido_status_atualizacoes`
--

DROP TABLE IF EXISTS `pedido_status_atualizacoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido_status_atualizacoes` (
  `pedido_id` int NOT NULL,
  `status_pedido_id` int NOT NULL,
  `dt_atualizacao` datetime DEFAULT CURRENT_TIMESTAMP,
  KEY `pedido_id` (`pedido_id`),
  KEY `status_pedido_id` (`status_pedido_id`),
  CONSTRAINT `pedido_status_atualizacoes_ibfk_1` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`),
  CONSTRAINT `pedido_status_atualizacoes_ibfk_2` FOREIGN KEY (`status_pedido_id`) REFERENCES `status_pedidos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido_status_atualizacoes`
--

LOCK TABLES `pedido_status_atualizacoes` WRITE;
/*!40000 ALTER TABLE `pedido_status_atualizacoes` DISABLE KEYS */;
INSERT INTO `pedido_status_atualizacoes` VALUES (1,1,'2024-01-03 12:06:30'),(1,2,'2024-01-03 12:06:30'),(1,3,'2024-01-03 12:06:30'),(1,4,'2024-01-03 12:06:30'),(2,1,'2024-01-03 12:06:30'),(2,2,'2024-01-03 12:06:30'),(2,5,'2024-01-03 12:06:30');
/*!40000 ALTER TABLE `pedido_status_atualizacoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente_id` int NOT NULL,
  `endereco_id` varchar(50) NOT NULL,
  `total` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cliente_id` (`cliente_id`),
  CONSTRAINT `pedidos_ibfk_2` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,1,'1',299.50),(2,2,'2',152.30),(3,3,'4',47.49);
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto_categorias`
--

DROP TABLE IF EXISTS `produto_categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto_categorias` (
  `produto_id` int NOT NULL,
  `categoria_id` int NOT NULL,
  KEY `produto_id` (`produto_id`),
  KEY `categoria_id` (`categoria_id`),
  CONSTRAINT `produto_categorias_ibfk_1` FOREIGN KEY (`produto_id`) REFERENCES `produtos` (`id`),
  CONSTRAINT `produto_categorias_ibfk_2` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto_categorias`
--

LOCK TABLES `produto_categorias` WRITE;
/*!40000 ALTER TABLE `produto_categorias` DISABLE KEYS */;
INSERT INTO `produto_categorias` VALUES (2,1),(3,2),(4,3),(1,4);
/*!40000 ALTER TABLE `produto_categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto_estoques`
--

DROP TABLE IF EXISTS `produto_estoques`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto_estoques` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantidade` int NOT NULL,
  `produto_id` int NOT NULL,
  `quantidade_min` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `produto_id` (`produto_id`),
  CONSTRAINT `produto_estoques_ibfk_1` FOREIGN KEY (`produto_id`) REFERENCES `produtos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto_estoques`
--

LOCK TABLES `produto_estoques` WRITE;
/*!40000 ALTER TABLE `produto_estoques` DISABLE KEYS */;
INSERT INTO `produto_estoques` VALUES (1,3,2,2),(2,3,3,2),(3,-2,4,2),(4,93,1,20);
/*!40000 ALTER TABLE `produto_estoques` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(20) NOT NULL,
  `fornecedor_id` int NOT NULL,
  `situacao` int DEFAULT NULL,
  `valor` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fornecedor_id` (`fornecedor_id`),
  CONSTRAINT `produtos_ibfk_1` FOREIGN KEY (`fornecedor_id`) REFERENCES `fornecedores` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'Produto A',1,1,59.90),(2,'Produto B',2,1,36.60),(3,'Produto C',3,1,105.99),(4,'Produto D',4,1,1.99);
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status_pedidos`
--

DROP TABLE IF EXISTS `status_pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status_pedidos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status_pedidos`
--

LOCK TABLES `status_pedidos` WRITE;
/*!40000 ALTER TABLE `status_pedidos` DISABLE KEYS */;
INSERT INTO `status_pedidos` VALUES (1,'pedido realizado'),(2,'pagamento confirmado'),(3,'Pedido enviado'),(4,'Pedido entregue'),(5,'Pedido cancelado');
/*!40000 ALTER TABLE `status_pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'loja_completa'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-18 20:16:57
