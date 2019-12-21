-- MySQL dump 10.13  Distrib 5.7.25, for Linux (x86_64)
--
-- Host: localhost    Database: TorneoCopaCiudadDeAyacucho
-- ------------------------------------------------------
-- Server version	5.7.25-0ubuntu0.18.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `equipo`
--

DROP TABLE IF EXISTS `equipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `equipo` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `puntos` int(1) NOT NULL DEFAULT '0',
  `partidosJugados` int(1) NOT NULL DEFAULT '0',
  `partidosGanados` int(1) NOT NULL DEFAULT '0',
  `partidosEmpatados` int(1) NOT NULL DEFAULT '0',
  `partidosPerdidos` int(1) NOT NULL DEFAULT '0',
  `golesAFavor` int(2) NOT NULL DEFAULT '0',
  `golesEnContra` int(2) NOT NULL DEFAULT '0',
  `diferenciaGoles` int(2) NOT NULL DEFAULT '0',
  `golesEnContraTotal` int(2) NOT NULL DEFAULT '0',
  `grupo` int(1) NOT NULL,
  `cantAmarillas` int(2) NOT NULL DEFAULT '0',
  `cantRojas` int(2) NOT NULL DEFAULT '0',
  `anio` int(4) DEFAULT NULL,
  `torneo` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipo`
--

LOCK TABLES `equipo` WRITE;
/*!40000 ALTER TABLE `equipo` DISABLE KEYS */;
INSERT INTO `equipo` VALUES (1,'Club de Gimnasia y Esgrima La Plata A.F.A.',9,3,3,0,0,13,0,13,3,1,5,0,2018,0),(2,'Club Atletico Ayacucho',3,3,1,0,2,1,3,-2,4,1,0,0,2018,0),(3,'Club Atletico Jorge Newbery (Maipu)',0,3,0,0,3,1,14,-13,14,1,0,0,2018,0),(4,'Club Social y Deportivo El Fortin ',6,3,2,0,1,5,3,2,4,1,2,0,2018,0),(5,'Club Atletico Velez Sarsfield A.F.A.',9,3,3,0,0,27,2,25,3,2,1,0,2018,0),(6,'Club Defensores (Ayacucho)',6,3,2,0,1,5,12,-7,14,2,1,0,2018,0),(7,'Club Deportivo El Leon',1,3,0,1,2,3,7,-4,7,2,1,0,2018,0),(8,'Club Embajadores de Olavarria',1,3,0,1,2,4,18,-14,18,2,0,0,2018,0),(9,'Club Atletico Banfield A.F.A.',9,3,3,0,0,25,0,25,0,3,2,0,2018,0),(10,'Club de Gimnasia y Esgrima de Tandil',1,3,0,1,2,1,11,-10,11,3,0,1,2018,0),(11,'Club Sportivo Trabajo (Balcarce)',4,3,1,1,1,6,11,-5,20,3,1,0,2018,0),(12,' C.A.F.A. (Moreno)',2,3,0,2,1,4,14,-10,18,3,0,0,2018,0),(13,'Club Estudiantes de la Plata A.F.A',9,3,3,0,0,25,0,25,5,4,2,1,2018,0),(14,'Pequeños Talentos (Rauch)',1,3,0,1,2,2,15,-13,15,4,1,0,2018,0),(15,'Club Atletico Quilmes (Mar del Plata)',6,3,2,0,1,5,8,-3,9,4,0,0,2018,0),(16,'Club Social y Deportivo Pinamar',1,3,0,1,2,1,10,-9,12,4,2,0,2018,0),(17,'Racing Club de Avellaneda A.F.A.',9,3,3,0,0,14,0,14,2,5,2,1,2018,0),(18,'Club Atletico Ferrocarril Sud (Tandil)',4,3,1,1,1,4,4,0,10,5,1,0,2018,0),(19,'Club Deportivo Juventud Unida',4,3,1,1,1,2,7,-5,9,5,0,0,2018,0),(20,'Club Atletico Chascomus',0,3,0,0,3,0,9,-9,9,5,0,0,2018,0),(21,'Club Atletico Boca Juniors A.F.A.',9,3,3,0,0,21,0,21,4,6,2,0,2018,0),(22,'Club Independiente (Tandil)',4,3,1,1,1,2,9,-7,19,6,0,0,2018,0),(23,'Club Atletico Alvarado (Mar del Plata)',0,3,0,0,3,2,14,-12,14,6,0,0,2018,0),(24,'Club Atletico Estudiantes (Olavarria)',4,3,1,1,1,3,5,-2,6,6,0,0,2018,0),(25,'Club Nacional de Futbol (Uruguay)',9,3,3,0,0,20,1,19,5,7,1,0,2018,0),(26,'Club Excursionistas Tandil',0,3,0,0,3,2,26,-24,29,7,1,0,2018,0),(27,'Club Atletico Independiente (Mar del Plata)',6,3,2,0,1,9,5,4,19,7,1,0,2018,0),(28,'Club Ferrocarril Roca (Las Flores)',3,3,1,0,2,8,7,1,6,7,0,0,2018,0),(29,'Club Social y Deportivo El Fortin ',6,3,2,0,1,8,1,7,1,1,0,0,2018,1),(30,'Club Deportivo El Leon ',4,3,1,1,1,3,2,1,0,1,0,0,2018,1),(31,'Club Excursionistas Tandil',0,3,0,0,3,0,15,-15,15,1,0,0,2018,1),(32,'Club Ferrocarril Roca (Las Flores)',7,3,2,1,0,8,1,7,3,1,0,0,2018,1),(33,'Club Atletico Estudiantes (Olavarria)',3,3,1,0,2,3,6,-3,6,2,0,0,2018,1),(34,'Club Sarmiento (Ayacucho)',0,3,0,0,3,0,6,-6,6,2,0,0,2018,1),(35,'Club Independiente (Tandil)',6,3,2,0,1,4,1,3,4,2,0,0,2018,1),(36,'Club Atletico Independiente (Mar del Plata)',9,3,3,0,0,7,1,6,3,2,1,0,2018,1),(37,'Club Alumni Azuleño',6,3,2,0,1,4,1,3,3,3,0,0,2018,1),(38,'Club Defensores (Ayacucho)',3,3,1,0,2,2,4,-2,5,3,0,0,2018,1),(39,'Club Atletico Ferrocarril Sud (Tandil)',1,3,0,1,2,0,5,-5,5,3,0,0,2018,1),(40,'Club Atletico Quilmes (Mar del Plata)',7,3,2,1,0,4,0,4,0,3,1,0,2018,1),(41,'Club Atletico Ayacucho',9,3,3,0,0,9,0,9,6,4,0,0,2018,1),(42,'Club Deportivo Juevntud Unida',0,3,0,0,3,0,8,-8,8,4,0,0,2018,1),(43,'Club de Gimnasia y Esgrima de Tandil',6,3,2,0,1,5,3,2,6,4,0,0,2018,1),(44,'Club Atletico Jorge Newbery',3,3,1,0,2,3,6,-3,6,4,0,0,2018,1);
/*!40000 ALTER TABLE `equipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipoParticipaTorneo`
--

DROP TABLE IF EXISTS `equipoParticipaTorneo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `equipoParticipaTorneo` (
  `id_torneo` int(2) NOT NULL,
  `equipo` varchar(70) NOT NULL,
  PRIMARY KEY (`id_torneo`,`equipo`),
  CONSTRAINT `equipoParticipaTorneo_ibfk_1` FOREIGN KEY (`id_torneo`) REFERENCES `torneo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipoParticipaTorneo`
--

LOCK TABLES `equipoParticipaTorneo` WRITE;
/*!40000 ALTER TABLE `equipoParticipaTorneo` DISABLE KEYS */;
INSERT INTO `equipoParticipaTorneo` VALUES (1,'Club Atletico Boca Juniors'),(1,'Club Estudiantes de La Plata'),(1,'Racing Club de Avellaneda'),(2,'Club Atletico Boca Juniors'),(2,'Club Atletico Independiente de Avellaneda'),(2,'Club Atletico Lanus'),(2,'Racing Club de Avellaneda'),(3,'Club Atletico Boca Juniors'),(3,'Club Atletico Independiente de Avellaneda'),(3,'Club Atletico Lanus'),(3,'Racing Club de Avellaneda'),(4,'Club Atletico Boca Juniors'),(4,'Club Atletico Independiente de Avellaneda'),(4,'Club Atletico River Plate'),(4,'Racing Club de Avellaneda'),(5,'Club Atletico Boca Juniors'),(5,'Club Atletico Independiente de Avellaneda'),(5,'Club Atletico River Plate de Montevideo (Uruguay)'),(5,'Racing Club de Avellaneda'),(6,'Club Atletico Boca Juniors'),(6,'Club Atletico Independiente de Avellaneda'),(6,'Club Atletico Paulistinha de Brasil'),(6,'Club Atletico Velez Sarsfield'),(6,'Racing Club de Avellaneda'),(7,'Club Atletico Boca Juniors'),(7,'Club Atletico Independiente de Avellaneda'),(7,'Club Atletico Velez Sarsfield'),(7,'Racing Club de Avellaneda'),(8,'Club Atletico Boca Juniors'),(8,'Club Atletico Independiente de Avellaneda'),(8,'Club Atletico Velez Sarsfield'),(8,'Racing Club de Avellaneda'),(9,'Club Atletico Boca Juniors'),(9,'Club Atletico Independiente de Avellaneda'),(9,'Club Atletico Velez Sarsfield'),(9,'Racing Club de Avellaneda'),(10,'Club Atletico Banfield'),(10,'Club Atletico Velez Sarsfield'),(10,'Racing Club de Avellaneda'),(11,'Club Atletico Banfield'),(11,'Club Atletico Boca Juniors'),(11,'Club Atletico Velez Sarsfield'),(12,'Club Atletico Banfield'),(12,'Racing Club de Avellaneda'),(13,'Club Atletico Banfield'),(13,'Club Atletico Lanus'),(13,'Club Estudiantes de La Plata'),(13,'Club Olimpo de Bahia Blanca'),(13,'Racing Club de Avellaneda'),(14,'Club Atletico Banfield'),(14,'Club Atletico San Lorenzo de Almagro'),(14,'Club Atletico Velez Sarsfield'),(14,'Club Estudiantes de La Plata'),(14,'Club Nacional de Futbol de Uruguay'),(14,'Racing Club de Avellaneda'),(15,'Club Atletico Banfield'),(15,'Club Atletico Boca Juniors'),(15,'Club Atletico Velez Sarsfield'),(15,'Club de Gimnasia y Esgrima La Plata'),(15,'Club Estudiantes de La Plata'),(15,'Club Nacional de Futbol de Uruguay'),(15,'Racing Club de Avellaneda');
/*!40000 ALTER TABLE `equipoParticipaTorneo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `goleadores`
--

DROP TABLE IF EXISTS `goleadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `goleadores` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) NOT NULL,
  `apellido` varchar(60) NOT NULL,
  `numero` int(2) NOT NULL,
  `goles` int(2) NOT NULL,
  `id_equipo` int(2) NOT NULL,
  `anio` int(4) DEFAULT NULL,
  `torneo` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_equipo` (`id_equipo`),
  CONSTRAINT `goleadores_ibfk_1` FOREIGN KEY (`id_equipo`) REFERENCES `equipo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=169 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `goleadores`
--

LOCK TABLES `goleadores` WRITE;
/*!40000 ALTER TABLE `goleadores` DISABLE KEYS */;
INSERT INTO `goleadores` VALUES (1,'Raul Ignacio','Cabral',9,15,5,2018,0),(2,'Ezequiel','Nicolini',7,12,25,2018,0),(3,'Lautaro','Castaño',11,11,5,2018,0),(4,'Kevin Joel','Brito',16,9,5,2018,0),(5,'Gianluca','Bosch',17,7,5,2018,0),(6,'Lautaro','Ahumada ',7,6,5,2018,0),(7,'Mateo','Comba',9,9,25,2018,0),(8,'Mauricio','Roldan',11,6,9,2018,0),(9,'Santiago Valentin','Gonzales',10,5,9,2018,0),(10,'Octavio','Casalongue',16,5,17,2018,0),(11,'Juan Pablo','Arango Rolfi',10,5,13,2018,0),(12,'Nahuel','Simon',9,4,15,2018,0),(13,'Lucas Nicolas','Parera',7,4,9,2018,0),(14,'Luciano','Dias ',10,4,17,2018,0),(15,'Nicolas','Mitic Flores',9,4,1,2018,0),(16,'Nehuen','Benedetti',14,4,13,2018,0),(17,'Sebastian','Traverso',4,3,13,2018,0),(18,'Martin','Naser',16,3,13,2018,0),(19,'Luca','Landriel',11,4,13,2018,0),(20,'Thiago Valentin','Rolon',8,4,21,2018,0),(21,'Santiago','Peralta',11,3,25,2018,0),(22,'Thiago','Taboada',9,3,17,2018,0),(23,'Alex','Costa',2,3,28,2018,0),(24,'Agustin','Suarez',14,3,25,2018,0),(25,'Victor Hugo','Galeano',7,3,21,2018,0),(26,'Thomas','Mielniczuk',6,3,1,2018,0),(27,'Juan Cruz','Vergara',7,2,1,2018,0),(28,'Martin','Paz',11,3,6,2018,0),(29,'Mateo','Miglino',15,3,5,2018,0),(30,'Teo','Gomez ',11,3,11,2018,0),(31,'Facundo Nahuel','Roemo',8,3,9,2018,0),(32,'Lautaro Uriel','Peralta',9,3,9,2018,0),(33,'Nicolas Emanuel','Rojas',16,2,9,2018,0),(34,'Adrian Benjamin','Lucero Alaggio',14,2,9,2018,0),(35,'Juan Pablo','Moreno',10,3,21,2018,0),(36,'Tomas Joel','Lopez',11,3,21,2018,0),(37,'Juan Segundo','Larrivey',7,2,13,2018,0),(38,'Gano Genaro','Galarza',5,2,13,2018,0),(39,'Tiziano','Sanmartino',3,2,13,2018,0),(40,'Fabian','Masson',9,2,28,2018,0),(41,'Wenceslao','Cordomi',11,2,28,2018,0),(42,'Nicolas','Lombardi',9,2,7,2018,0),(43,'Juan Martin','Herrera ',11,2,7,2018,0),(44,'Santino','Sacchi',11,2,8,2018,0),(45,'Elias','Ferreyra',9,2,8,2018,0),(46,'Ramiro','Macarrone',3,2,17,2018,0),(47,'Mateo','Gutierrez',14,2,17,2018,0),(48,'Tomas','Arburua',12,2,17,2018,0),(49,'Tomas Alejandro','Lopez',13,2,4,2018,0),(50,'Tobias','Ferrari ',10,2,18,2018,0),(51,'Lucas','Dietzel',17,2,8,2018,0),(52,'Faustino','De Vito ',4,2,5,2018,0),(53,'Matias','Guerra',6,2,27,2018,0),(54,'Santiago','Ronda Laborde',11,2,27,2018,0),(55,'Juan Francisco','Vazquez Vizmara',9,2,11,2018,0),(56,'Diego','Rivas Urriza',9,2,4,2018,0),(57,'Marco','Miguens',13,2,13,2018,0),(58,'Santiago','Tobar',15,2,13,2018,0),(59,'Carlos','Otazu Fariña',9,2,13,2018,0),(60,'Agustin','Camplone',14,2,24,2018,0),(61,'Luca','Crivelli',10,1,24,2018,0),(62,'Jhoan','Cardozo',8,2,25,2018,0),(63,'Exequias','Zapata',11,2,17,2018,0),(64,'Tiago','Gonzalez ',15,2,17,2018,0),(65,'Gaston','Galeano',8,2,7,2018,0),(66,'Simon','Frias ',8,2,19,2018,0),(67,'Lucas','Lazarte',9,2,18,2018,0),(68,'Joshua Nicolas','Portillo',6,2,21,2018,0),(69,'Ivan','alvarez ',9,2,6,2018,0),(70,'Ezequiel','Gregnoli',10,2,12,2018,0),(71,'Lucio','Vazquez',16,2,1,2018,0),(72,'Simon','Meza',10,2,1,2018,0),(73,'Homero','Dobal',10,1,2,2018,0),(74,'Tomas Valentin','Velazquez ',14,1,9,2018,0),(75,'Santiago Elias','Acosta',3,1,9,2018,0),(76,'Agustin','Lopez',5,1,9,2018,0),(77,'Octavio Nahuel','Diaz',13,1,9,2018,0),(78,'Ciro','Lopez ',11,1,23,2018,0),(79,'Thiago','Pintado',13,1,25,2018,0),(80,'Mathias','Albistur',17,1,25,2018,0),(81,'Alessandro','Scarpa',5,1,10,2018,0),(82,'Gonzalo','Bustamante ',10,1,27,2018,0),(83,'Joaquin','Contino',11,1,2,2018,0),(84,'Rufino','Cordero',13,1,2,2018,0),(85,'Francisco','Diz',15,1,2,2018,0),(86,'Nahuel','Parenti',10,1,22,2018,0),(87,'Emanuel','Pica',5,1,4,2018,0),(88,'Enzo','Carrera',7,1,8,2018,0),(89,'Tomas','Bustos',14,1,8,2018,0),(90,'Nahuel Fernando','Lamorte',6,1,11,2018,0),(91,'Tiziano','Godoy',5,1,1,2018,0),(92,'Nicolas','Coceres',8,1,1,2018,0),(93,'Juan Ignacio','Canale',6,1,13,2018,0),(94,'Gianni','Dislacio',4,1,24,2018,0),(95,'Roman','Salazar',4,1,21,2018,0),(96,'Franco','Bortolin',18,1,12,2018,0),(97,'Alexis','Servia Leguizamon',12,1,12,2018,0),(98,'Kevin','Gonzalez Vargas',14,1,5,2018,0),(99,'Dylan','Meaca',5,1,14,2018,0),(100,'Jeronimo','Sosa',6,1,15,2018,0),(101,'Tobias','Zapata',9,1,22,2018,0),(102,'Juan Jose','Teriaca ',8,1,27,2018,0),(103,'Mateo','Becci Trama',9,1,27,2018,0),(104,'Ramiro','Cabranes',7,1,27,2018,0),(105,'Augusto','Ruis',13,1,27,2018,0),(106,'Joaquin','Mandiola',3,1,27,2018,0),(107,'Thomas','Scolari',2,1,13,2018,0),(108,'Fabricio','Ventresca',9,1,21,2018,0),(109,'Lautaro','Napolitano',11,1,1,2018,0),(110,'Joaquin','Soria ',13,1,17,2018,0),(111,'Tobias','Zapata',9,1,23,2018,0),(112,'Ezequiel Agustin','Raineri',7,1,16,2018,0),(113,'Gaspar','Conde Etchebarne',2,1,14,2018,0),(114,'Lautaro Omar','Sosa',6,1,7,2018,0),(115,'Nelson','Franco',5,1,28,2018,0),(116,'Benjamin','Andolfatti',2,1,26,2018,0),(117,'Tobias','Lopez',10,1,26,2018,0),(118,'Martiniano','Iralur',5,1,2,2018,0),(119,'Nasif','Elia',9,5,40,2018,1),(120,'Valentin','Capuano Torres',10,2,40,2018,1),(121,'Franco','Bonilauri',14,1,40,2018,1),(122,'Benjamin','Villaryel',11,1,40,2018,1),(123,'Patricio','Peñalva',11,4,32,2018,1),(124,'David','Juarez',8,4,36,2018,1),(125,'Fermin','Loengo',10,2,36,2018,1),(126,'Leonel Adrian','Sandez',3,2,36,2018,1),(127,'Tobias ','Castellano',15,1,36,2018,1),(128,'Agustin','Acosta',10,3,41,2018,1),(129,'Martin Maximiliano','Suarez ',8,2,41,2018,1),(130,'Juan','Pelegrini Gomila',15,2,41,2018,1),(131,'Lisandro','De Arrieta Mazza ',5,1,41,2018,1),(132,'Xanti','Urra',14,1,41,2018,1),(133,'Enoc','Girado',9,3,35,2018,1),(134,'Benjamin','Saenz',8,1,35,2018,1),(135,'Valentino','Rivero',14,1,35,2018,1),(136,'Baltasar','Anselmi',2,1,35,2018,1),(137,'Joaquin','Camara',9,2,43,2018,1),(138,'Thiago','Gadea',7,2,29,2018,1),(139,'Lucas','Gomez',5,2,29,2018,1),(140,'Fausto','Penacchionni',6,1,33,2018,1),(141,'Juan Ignacio','Velazquez',15,1,37,2018,1),(142,'Mateo Exequiel','Diaz',9,1,37,2018,1),(143,'Santiago','Recci',10,1,37,2018,1),(144,'Dylan','Russo',10,1,32,2018,1),(145,'Laureano','Lamas',22,1,32,2018,1),(146,'Valentin','Herrera ',8,1,32,2018,1),(147,'Franco','Bortolotti',10,1,29,2018,1),(148,'Lionel','Bustamante ',2,1,29,2018,1),(149,'Agustin','Medina',8,1,29,2018,1),(150,'Lautaro','Lopez ',3,1,29,2018,1),(151,'Hernan','La Frossia Harisgarat',5,1,30,2018,1),(152,'Brian Ezequiel','Sanchez',7,1,43,2018,1),(153,'Joaquin','Almaraz',11,1,43,2018,1),(154,'Gonzalo','Cabalin',10,1,43,2018,1),(155,'Geronimo','Girolet',7,1,35,2018,1),(156,'Pedro','Morel',11,1,41,2018,1),(157,'Juan Jose','Amodeo',2,1,41,2018,1),(158,'Manuel','alvarez',12,1,36,2018,1),(159,'Valentino','Vitali',11,1,33,2018,1),(160,'Bautista','Serrano',7,1,33,2018,1),(161,'Mateo','Novo',8,1,33,2018,1),(162,'Martin','Freije Elorz',9,1,44,2018,1),(163,'Joaquin','Peralta',5,1,44,2018,1),(164,'Nicolas','Ferdara',10,1,44,2018,1),(165,'Renzo','Ascat',7,1,38,2018,1),(166,'Lautaro','Videla ',5,1,38,2018,1),(167,'Diego','Lopez',7,1,37,2018,1),(168,'Valentin','Bianchimmi',19,1,32,2018,1);
/*!40000 ALTER TABLE `goleadores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `juega`
--

DROP TABLE IF EXISTS `juega`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `juega` (
  `id_partido` int(2) NOT NULL AUTO_INCREMENT,
  `id_equipoUno` int(2) NOT NULL,
  `id_equipoDos` int(2) NOT NULL,
  `golesLocal` int(2) NOT NULL DEFAULT '-1',
  `golesVisitante` int(2) NOT NULL DEFAULT '-1',
  `penalesLocal` int(2) NOT NULL DEFAULT '-1',
  `penalesVisitante` int(2) NOT NULL DEFAULT '-1',
  `id_grupo` int(1) DEFAULT NULL,
  `instancia` varchar(3) DEFAULT NULL,
  `anio` int(4) DEFAULT NULL,
  `torneo` tinyint(1) DEFAULT NULL,
  `dia` datetime DEFAULT NULL,
  PRIMARY KEY (`id_partido`),
  KEY `id_equipoUno` (`id_equipoUno`),
  KEY `id_equipoDos` (`id_equipoDos`),
  CONSTRAINT `juega_ibfk_1` FOREIGN KEY (`id_equipoUno`) REFERENCES `equipo` (`id`),
  CONSTRAINT `juega_ibfk_2` FOREIGN KEY (`id_equipoDos`) REFERENCES `equipo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `juega`
--

LOCK TABLES `juega` WRITE;
/*!40000 ALTER TABLE `juega` DISABLE KEYS */;
INSERT INTO `juega` VALUES (1,2,4,0,1,-1,-1,1,NULL,2018,0,'2018-02-07 00:00:00'),(2,1,3,9,0,-1,-1,1,NULL,2018,0,'2018-02-07 00:00:00'),(3,1,2,2,0,-1,-1,1,NULL,2018,0,'2018-02-07 00:00:00'),(4,3,4,1,4,-1,-1,1,NULL,2018,0,'2018-02-07 00:00:00'),(5,1,4,2,0,-1,-1,1,NULL,2018,0,'2018-02-07 00:00:00'),(6,2,3,1,0,-1,-1,1,NULL,2018,0,'2018-02-07 00:00:00'),(7,5,7,4,1,-1,-1,2,NULL,2018,0,'2018-02-07 00:00:00'),(8,6,8,4,1,-1,-1,2,NULL,2018,0,'2018-02-07 00:00:00'),(9,6,7,1,0,-1,-1,2,NULL,2018,0,'2018-02-07 00:00:00'),(10,5,8,12,1,-1,-1,2,NULL,2018,0,'2018-02-07 00:00:00'),(11,7,8,2,2,-1,-1,2,NULL,2018,0,'2018-02-07 00:00:00'),(12,5,6,11,0,-1,-1,2,NULL,2018,0,'2018-02-07 00:00:00'),(13,10,11,0,3,-1,-1,3,NULL,2018,0,'2018-02-07 00:00:00'),(14,9,12,10,0,-1,-1,3,NULL,2018,0,'2018-02-07 00:00:00'),(15,11,12,3,3,-1,-1,3,NULL,2018,0,'2018-02-07 00:00:00'),(16,9,10,7,0,-1,-1,3,NULL,2018,0,'2018-02-07 00:00:00'),(17,9,11,8,0,-1,-1,3,NULL,2018,0,'2018-02-07 00:00:00'),(18,10,12,1,1,-1,-1,3,NULL,2018,0,'2018-02-07 00:00:00'),(19,13,14,11,0,-1,-1,4,NULL,2018,0,'2018-02-07 00:00:00'),(20,15,16,2,0,-1,-1,4,NULL,2018,0,'2018-02-07 00:00:00'),(21,14,15,1,3,-1,-1,4,NULL,2018,0,'2018-02-07 00:00:00'),(22,13,16,7,0,-1,-1,4,NULL,2018,0,'2018-02-07 00:00:00'),(23,14,16,1,1,-1,-1,4,NULL,2018,0,'2018-02-07 00:00:00'),(24,13,15,7,0,-1,-1,4,NULL,2018,0,'2018-02-07 00:00:00'),(25,18,19,1,1,-1,-1,5,NULL,2018,0,'2018-02-07 00:00:00'),(26,17,20,5,0,-1,-1,5,NULL,2018,0,'2018-02-07 00:00:00'),(27,17,18,3,0,-1,-1,5,NULL,2018,0,'2018-02-07 00:00:00'),(28,19,20,1,0,-1,-1,5,NULL,2018,0,'2018-02-07 00:00:00'),(29,18,20,3,0,-1,-1,5,NULL,2018,0,'2018-02-07 00:00:00'),(30,17,19,6,0,-1,-1,5,NULL,2018,0,'2018-02-07 00:00:00'),(31,23,24,2,3,-1,-1,6,NULL,2018,0,'2018-02-07 00:00:00'),(32,21,22,9,0,-1,-1,6,NULL,2018,0,'2018-02-07 00:00:00'),(33,22,23,2,0,-1,-1,6,NULL,2018,0,'2018-02-07 00:00:00'),(34,21,24,3,0,-1,-1,6,NULL,2018,0,'2018-02-07 00:00:00'),(35,22,24,0,0,-1,-1,6,NULL,2018,0,'2018-02-07 00:00:00'),(36,21,23,9,0,-1,-1,6,NULL,2018,0,'2018-02-07 00:00:00'),(37,27,28,1,0,-1,-1,7,NULL,2018,0,'2018-02-07 00:00:00'),(38,25,26,11,0,-1,-1,7,NULL,2018,0,'2018-02-07 00:00:00'),(39,26,27,0,8,-1,-1,7,NULL,2018,0,'2018-02-07 00:00:00'),(40,25,28,4,1,-1,-1,7,NULL,2018,0,'2018-02-07 00:00:00'),(41,25,27,5,0,-1,-1,7,NULL,2018,0,'2018-02-07 00:00:00'),(42,26,28,2,7,-1,-1,7,NULL,2018,0,'2018-02-07 00:00:00'),(43,5,22,10,0,-1,-1,NULL,'o',2018,0,'2018-02-07 00:00:00'),(44,9,19,2,0,-1,-1,NULL,'o',2018,0,'2018-02-07 00:00:00'),(45,13,11,9,0,-1,-1,NULL,'o',2018,0,'2018-02-07 00:00:00'),(46,21,24,1,1,6,5,NULL,'o',2018,0,'2018-02-07 00:00:00'),(47,25,18,6,0,-1,-1,NULL,'o',2018,0,'2018-02-07 00:00:00'),(48,17,6,2,0,-1,-1,NULL,'o',2018,0,'2018-02-07 00:00:00'),(49,1,15,1,0,-1,-1,NULL,'o',2018,0,'2018-02-07 00:00:00'),(50,27,4,1,0,-1,-1,NULL,'o',2018,0,'2018-02-07 00:00:00'),(51,5,27,10,0,-1,-1,NULL,'c',2018,0,'2018-02-07 00:00:00'),(52,9,1,0,0,2,3,NULL,'c',2018,0,'2018-02-07 00:00:00'),(53,13,17,1,3,-1,-1,NULL,'c',2018,0,'2018-02-07 00:00:00'),(54,21,25,4,1,-1,-1,NULL,'c',2018,0,'2018-02-07 00:00:00'),(55,5,21,0,0,4,5,NULL,'s',2018,0,'2018-02-07 00:00:00'),(56,1,17,1,2,-1,-1,NULL,'s',2018,0,'2018-02-07 00:00:00'),(57,25,27,4,0,-1,-1,NULL,'7',2018,0,'2018-02-07 00:00:00'),(58,9,13,2,0,-1,-1,NULL,'5',2018,0,'2018-02-07 00:00:00'),(59,5,1,1,1,5,3,NULL,'t',2018,0,'2018-02-07 00:00:00'),(60,21,17,0,2,-1,-1,NULL,'f',2018,0,'2018-02-07 00:00:00'),(61,28,28,0,0,1,0,NULL,'ccp',2018,0,'2018-02-07 00:00:00'),(62,2,26,4,0,-1,-1,NULL,'ccp',2018,0,'2018-02-07 00:00:00'),(63,12,8,0,5,-1,-1,NULL,'ccp',2018,0,'2018-02-07 00:00:00'),(64,7,16,2,0,-1,-1,NULL,'ccp',2018,0,'2018-02-07 00:00:00'),(65,28,7,0,1,-1,-1,NULL,'scp',2018,0,'2018-02-07 00:00:00'),(66,2,8,0,1,-1,-1,NULL,'scp',2018,0,'2018-02-07 00:00:00'),(67,7,8,1,0,-1,-1,NULL,'fcp',2018,0,'2018-02-07 00:00:00'),(68,29,32,0,1,-1,-1,1,NULL,2018,1,'2018-02-07 00:00:00'),(69,30,31,2,0,-1,-1,1,NULL,2018,1,'2018-02-07 00:00:00'),(70,31,32,0,6,-1,-1,1,NULL,2018,1,'2018-02-07 00:00:00'),(71,29,30,1,0,-1,-1,1,NULL,2018,1,'2018-02-07 00:00:00'),(72,30,32,1,1,-1,-1,1,NULL,2018,1,'2018-02-07 00:00:00'),(73,29,31,7,0,-1,-1,1,NULL,2018,1,'2018-02-07 00:00:00'),(74,33,36,1,4,-1,-1,2,NULL,2018,1,'2018-02-07 00:00:00'),(75,34,35,0,2,-1,-1,2,NULL,2018,1,'2018-02-07 00:00:00'),(76,33,34,2,0,-1,-1,2,NULL,2018,1,'2018-02-07 00:00:00'),(77,33,35,0,2,-1,-1,2,NULL,2018,1,'2018-02-07 00:00:00'),(78,34,36,0,2,-1,-1,2,NULL,2018,1,'2018-02-07 00:00:00'),(79,35,36,0,1,-1,-1,2,NULL,2018,1,'2018-02-07 00:00:00'),(80,39,40,0,0,-1,-1,3,NULL,2018,1,'2018-02-07 00:00:00'),(81,37,38,1,0,-1,-1,3,NULL,2018,1,'2018-02-07 00:00:00'),(82,37,40,0,1,-1,-1,3,NULL,2018,1,'2018-02-07 00:00:00'),(83,38,39,2,0,-1,-1,3,NULL,2018,1,'2018-02-07 00:00:00'),(84,37,39,3,0,-1,-1,3,NULL,2018,1,'2018-02-07 00:00:00'),(85,38,40,0,3,-1,-1,3,NULL,2018,1,'2018-02-07 00:00:00'),(86,42,43,0,3,-1,-1,4,NULL,2018,1,'2018-02-07 00:00:00'),(87,41,44,4,0,-1,-1,4,NULL,2018,1,'2018-02-07 00:00:00'),(88,42,44,0,2,-1,-1,4,NULL,2018,1,'2018-02-07 00:00:00'),(89,43,44,2,1,-1,-1,4,NULL,2018,1,'2018-02-07 00:00:00'),(90,41,42,3,0,-1,-1,4,NULL,2018,1,'2018-02-07 00:00:00'),(91,41,43,2,0,-1,-1,4,NULL,2018,1,'2018-02-07 00:00:00'),(92,41,43,3,0,-1,-1,NULL,'c',2018,1,'2018-02-07 00:00:00'),(93,36,37,2,0,-1,-1,NULL,'c',2018,1,'2018-02-07 00:00:00'),(94,32,35,2,2,1,2,NULL,'c',2018,1,'2018-02-07 00:00:00'),(95,40,29,0,0,2,0,NULL,'c',2018,1,'2018-02-07 00:00:00'),(96,41,40,0,3,-1,-1,NULL,'s',2018,1,'2018-02-07 00:00:00'),(97,36,35,1,0,-1,-1,NULL,'s',2018,1,'2018-02-07 00:00:00'),(98,41,35,0,3,-1,-1,NULL,'t',2018,1,'2018-02-07 00:00:00'),(99,40,36,2,0,-1,-1,NULL,'f',2018,1,'2018-02-07 00:00:00'),(100,30,30,0,0,1,0,NULL,'scp',2018,1,'2018-02-07 00:00:00'),(101,38,33,0,1,-1,-1,NULL,'scp',2018,1,'2018-02-07 00:00:00'),(102,30,33,0,0,1,0,NULL,'fcp',2018,1,'2018-02-07 00:00:00');
/*!40000 ALTER TABLE `juega` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER tr_actualizar_grupo
AFTER UPDATE ON juega
FOR EACH ROW
BEGIN
	IF (old.golesLocal != new.golesLocal OR old.golesVisitante != new.golesVisitante) THEN
		IF (new.instancia IS NULL OR new.instancia = "iz") THEN
			IF (old.golesLocal = -1 AND old.golesVisitante = -1) THEN
				UPDATE equipo SET partidosJugados = partidosJugados + 1 WHERE (id = new.id_equipoUno OR id = new.id_equipoDos);
				UPDATE equipo SET golesAFavor = golesAFavor + new.golesLocal, golesEnContra = golesEnContra + new.golesVisitante, golesEnContraTotal = golesEnContraTotal + new.golesVisitante WHERE id = new.id_equipoUno;
				UPDATE equipo SET golesAFavor = golesAFavor + new.golesVisitante, golesEnContra = golesEnContra + new.golesLocal, golesEnContraTotal = golesEnContraTotal + new.golesLocal WHERE id = new.id_equipoDos;
				IF (new.golesLocal > new.golesVisitante) THEN
					UPDATE equipo SET puntos = puntos + 3, partidosGanados = partidosGanados + 1 WHERE id = new.id_equipoUno;
					UPDATE equipo SET partidosPerdidos = partidosPerdidos + 1 WHERE id = new.id_equipoDos;
				END IF;
				IF (new.golesLocal = new.golesVisitante) THEN
					UPDATE equipo SET puntos = puntos + 1, partidosEmpatados = partidosEmpatados + 1 WHERE (id = new.id_equipoUno OR id = new.id_equipoDos);
				END IF;
				IF (new.golesLocal < new.golesVisitante) THEN
					UPDATE equipo SET puntos = puntos + 3, partidosGanados = partidosGanados + 1 WHERE id = new.id_equipoDos;
					UPDATE equipo SET partidosPerdidos = partidosPerdidos + 1 WHERE id = new.id_equipoUno;
				END IF;
			ELSE
				IF (old.golesLocal > old.golesVisitante) THEN
					IF (new.golesLocal = new.golesVisitante) THEN
						UPDATE equipo SET puntos = puntos - 2, partidosGanados = partidosGanados - 1, partidosEmpatados = partidosEmpatados + 1 WHERE id = new.id_equipoUno;
						UPDATE equipo SET puntos = puntos + 1, partidosPerdidos = partidosPerdidos - 1, partidosEmpatados = partidosEmpatados + 1 WHERE id = new.id_equipoDos;
                    ELSEIF (new.golesLocal < new.golesVisitante) THEN
						UPDATE equipo SET puntos = puntos - 3, partidosGanados = partidosGanados - 1, partidosPerdidos = partidosPerdidos + 1 WHERE id = new.id_equipoUno;
						UPDATE equipo SET puntos = puntos + 3, partidosPerdidos = partidosPerdidos - 1, partidosGanados = partidosGanados + 1 WHERE id = new.id_equipoDos;
					END IF;
                ELSEIF (old.golesLocal = old.golesVisitante) THEN
					IF (new.golesLocal > new.golesVisitante) THEN
						UPDATE equipo SET puntos = puntos + 2, partidosGanados = partidosGanados + 1, partidosEmpatados = partidosEmpatados - 1 WHERE id = new.id_equipoUno;
						UPDATE equipo SET puntos = puntos - 1, partidosPerdidos = partidosPerdidos + 1, partidosEmpatados = partidosEmpatados - 1 WHERE id = new.id_equipoDos;
					ELSEIF (new.golesLocal < new.golesVisitante) THEN
						UPDATE equipo SET puntos = puntos - 1, partidosPerdidos = partidosPerdidos + 1, partidosEmpatados = partidosEmpatados - 1 WHERE id = new.id_equipoUno;
						UPDATE equipo SET puntos = puntos + 2, partidosGanados = partidosGanados + 1, partidosEmpatados = partidosEmpatados - 1 WHERE id = new.id_equipoDos;
					END IF;
				ELSEIF (old.golesLocal < old.golesVisitante) THEN
					IF (new.golesLocal > new.golesVisitante) THEN
						UPDATE equipo SET puntos = puntos + 3, partidosGanados = partidosGanados + 1, partidosPerdidos = partidosPerdidos - 1 WHERE id = new.id_equipoUno;
						UPDATE equipo SET puntos = puntos - 3, partidosPerdidos = partidosPerdidos + 1, partidosGanados = partidosGanados - 1 WHERE id = new.id_equipoDos;
					ELSEIF (new.golesLocal = new.golesVisitante) THEN
						UPDATE equipo SET puntos = puntos + 1, partidosEmpatados = partidosEmpatados + 1, partidosPerdidos = partidosPerdidos - 1 WHERE id = new.id_equipoUno;
						UPDATE equipo SET puntos = puntos - 2, partidosEmpatados = partidosEmpatados + 1, partidosGanados = partidosGanados - 1 WHERE id = new.id_equipoDos;
					END IF;
				END IF;
				UPDATE equipo SET golesAFavor = golesAFavor - old.golesLocal + new.golesLocal, golesEnContra = golesEnContra - old.golesVisitante + new.golesVisitante, golesEnContraTotal = golesEnContraTotal - old.golesVisitante + new.golesVisitante WHERE id = new.id_equipoUno;
				UPDATE equipo SET golesAFavor = golesAFavor - old.golesVisitante + new.golesVisitante, golesEnContra = golesEnContra - old.golesLocal + new.golesLocal, golesEnContraTotal = golesEnContraTotal - old.golesLocal + new.golesLocal WHERE id = new.id_equipoDos;
			END IF;
			UPDATE equipo SET diferenciaGoles = golesAFavor - golesEnContra WHERE id = new.id_equipoUno;
			UPDATE equipo SET diferenciaGoles = golesAFavor - golesEnContra WHERE id = new.id_equipoDos;
		ELSE
			IF (old.golesLocal = -1 AND old.golesVisitante = -1) THEN
				UPDATE equipo SET golesEnContraTotal = golesEnContraTotal + new.golesVisitante WHERE id = id_equipoUno;
				UPDATE equipo SET golesEnContraTotal = golesEnContraTotal + new.golesLocal WHERE id = id_equipoDos;
			ELSE
				UPDATE equipo SET golesEnContraTotal = golesEnContraTotal - old.golesVisitante + new.golesVisitante WHERE id = id_equipoUno;
				UPDATE equipo SET golesEnContraTotal = golesEnContraTotal - old.golesLocal + new.golesLocal WHERE id = id_equipoDos;
			END IF;
		END IF;
	END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `torneo`
--

DROP TABLE IF EXISTS `torneo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `torneo` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(150) NOT NULL,
  `cantEquipos` int(2) NOT NULL,
  `primero` varchar(70) NOT NULL,
  `segundo` varchar(70) NOT NULL,
  `tercero` varchar(70) NOT NULL,
  `cuarto` varchar(70) NOT NULL,
  `goleador` varchar(70) DEFAULT NULL,
  `cantGoles` int(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `torneo`
--

LOCK TABLES `torneo` WRITE;
/*!40000 ALTER TABLE `torneo` DISABLE KEYS */;
INSERT INTO `torneo` VALUES (1,'1° Torneo Nacional 14 al 16 de febrero de 1997 - Categoria 1984',16,'Club Atletico Boca Juniors','Club Azul Athletic','Club Estudiantes de La Plata','Ferrocarril Roca de Las Flores','Matias Alustiza (Club Azul Athletic)',NULL),(2,'2º Torneo Nacional 6 al 8 de febrero de 1998 - Categoria 1985',16,'Racing Club de Avellaneda','Club Atletico Boca Juniors','Club Atletico Lanus','Club Atletico Independiente de Avellaneda','Luis Benitez (Racing Club de Avellaneda)',NULL),(3,'3º Torneo Nacional 5 al 7 de febrero de 1999 - Categoria 1986',20,'Club Atletico Boca Juniors','Club Atletico Independiente de Avellaneda','Club Atletico Lanus','Racing Club de Avellaneda','Damian Napoli (Club Atletico Boca Juniors)',8),(4,'4º Torneo Nacional 4 al 6 de febrero de 2000 - Categoria 1987',24,'Club Atletico Boca Juniors','Club Atletico Independiente de Avellaneda','Racing Club de Avellaneda','Club Atletico Ayacucho',NULL,NULL),(5,'5º Torneo Nacional 9 al 11 de febrero de 2001 - Categoria 1988',20,'Club Atletico Independiente de Avellaneda','Club Atletico River Plate de Montevideo','Club Atletico Boca Juniors','Racing Club de Avellaneda','Sebastian Ahumada (Racing Club de Avellaneda)',11),(6,'6º Torneo Nacional 7 al 10 de febrero de 2002 - Categoria 1989',21,'Club Atletico Velez Sarsfield','Club Atletico Boca Juniors','Racing Club de Avellaneda','Club Atletico Independiente de Avellaneda','Jonatan Cristaldo (Club Atletico Velez Sarsfield)',11),(7,'7º Torneo Nacional 6 al 9 de febrero de 2003 - Categoria 1990',20,'Club Atletico Boca Juniors','Club Atletico Independiente de Avellaneda','Club Atletico Velez Sarsfield','Club Deportivo Castelli','Brian Nievas (Club Atletico Independiente de Avellaneda)',11),(8,'8º Torneo Nacional 5 al 8 de febrero de 2004 - Categoria 1991',20,'Club Atletico Boca Juniors','Club Atletico Almagro Florida (Mar del Plata)','Club Atletico Velez Sarsfield','Racing Club de Avellaneda','Nicolas Toledo (Ferrocarril Roca de Las Flores)',10),(9,'9º Torneo Nacional 6 al 8 de febrero de 2005 - Categoria 1992',20,'Club Atletico Boca Juniors','Racing Club de Avellaneda','Club Atletico Velez Sarsfield','Club Atletico Independiente de Avellaneda','Ignacio Patero (Club Atletico Velez Sarsfield)',8),(10,'10º Torneo Nacional 7 al 9 de febrero de 2006 - Categoria 1993',20,'Club Atletico Velez Sarsfield','Club Atletico Independiente de Mar del Plata','Racing Club de Avellaneda','Club Atletico Banfield','Federico Caloni (Club Atletico Velez Sarsfield)',7),(11,'11º Torneo Nacional 8 al 10 de febrero de 2007 - Categoria 1994',20,'Club Atletico Boca Juniors','Club Atletico Velez Sarsfield','Club Atletico Banfield','Club Atletico Liniers de Bahia Blanca',NULL,NULL),(12,'12º Torneo Nacional 6 al 9 de febrero de 2008 - Categoria 1995',16,'Club Atletico Banfield','E.F.I.G.A. (Las Flores)','Club Cadetes de San Martin','Club Atletico Ayacucho',NULL,NULL),(13,'13º Torneo Nacional 5 al 7 de febrero de 2016 - Categoria 2003',20,'Racing Club de Avellaneda','Club Atletico Lanus','Club Estudiantes de La Plata','Club Atletico Banfield','Evian Daniel Crescitelli (Club Estudiantes de La Plata)',8),(14,'14º Torneo Nacional 9 al 12 de febrero de 2017 - Categoria 2004',24,'Club Atletico Velez Sarsfield','Club Estudiantes de La Plata','Club Atletico San Lorenzo de Almagro','Club Atletico Banfield','Santiago Castro (Club Atletico Velez Sarsfield)',12),(15,'15º Torneo Nacional 1 al 4 de febrero de 2018 - Categoria 2005',28,'Racing Club de Avellaneda','Club Atletico Boca Juniors','Club Atletico Velez Sarsfield','Club de Gimnasia y Esgrima La Plata','Raul Ignacio Cabral (Club Atletico Velez Sarsfield)',15);
/*!40000 ALTER TABLE `torneo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id_usuario` int(2) NOT NULL AUTO_INCREMENT,
  `username` varchar(16) NOT NULL,
  `password` varchar(60) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-02 12:00:34
