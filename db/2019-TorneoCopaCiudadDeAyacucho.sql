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
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipo`
--

LOCK TABLES `equipo` WRITE;
/*!40000 ALTER TABLE `equipo` DISABLE KEYS */;
INSERT INTO `equipo` VALUES (1,'Club de Gimnasia y Esgrima La Plata A.F.A.',9,3,3,0,0,13,0,13,3,1,5,0,2018,0),(2,'Club Atletico Ayacucho',3,3,1,0,2,1,3,-2,4,1,0,0,2018,0),(3,'Club Atletico Jorge Newbery (Maipu)',0,3,0,0,3,1,14,-13,14,1,0,0,2018,0),(4,'Club Social y Deportivo El Fortin ',6,3,2,0,1,5,3,2,4,1,2,0,2018,0),(5,'Club Atletico Velez Sarsfield A.F.A.',9,3,3,0,0,27,2,25,3,2,1,0,2018,0),(6,'Club Defensores (Ayacucho)',6,3,2,0,1,5,12,-7,14,2,1,0,2018,0),(7,'Club Deportivo El Leon',1,3,0,1,2,3,7,-4,7,2,1,0,2018,0),(8,'Club Embajadores de Olavarria',1,3,0,1,2,4,18,-14,18,2,0,0,2018,0),(9,'Club Atletico Banfield A.F.A.',9,3,3,0,0,25,0,25,0,3,2,0,2018,0),(10,'Club de Gimnasia y Esgrima de Tandil',1,3,0,1,2,1,11,-10,11,3,0,1,2018,0),(11,'Club Sportivo Trabajo (Balcarce)',4,3,1,1,1,6,11,-5,20,3,1,0,2018,0),(12,' C.A.F.A. (Moreno)',2,3,0,2,1,4,14,-10,18,3,0,0,2018,0),(13,'Club Estudiantes de la Plata A.F.A',9,3,3,0,0,25,0,25,5,4,2,1,2018,0),(14,'Pequeños Talentos (Rauch)',1,3,0,1,2,2,15,-13,15,4,1,0,2018,0),(15,'Club Atletico Quilmes (Mar del Plata)',6,3,2,0,1,5,8,-3,9,4,0,0,2018,0),(16,'Club Social y Deportivo Pinamar',1,3,0,1,2,1,10,-9,12,4,2,0,2018,0),(17,'Racing Club de Avellaneda A.F.A.',9,3,3,0,0,14,0,14,2,5,2,1,2018,0),(18,'Club Atletico Ferrocarril Sud (Tandil)',4,3,1,1,1,4,4,0,10,5,1,0,2018,0),(19,'Club Deportivo Juventud Unida',4,3,1,1,1,2,7,-5,9,5,0,0,2018,0),(20,'Club Atletico Chascomus',0,3,0,0,3,0,9,-9,9,5,0,0,2018,0),(21,'Club Atletico Boca Juniors A.F.A.',9,3,3,0,0,21,0,21,4,6,2,0,2018,0),(22,'Club Independiente (Tandil)',4,3,1,1,1,2,9,-7,19,6,0,0,2018,0),(23,'Club Atletico Alvarado (Mar del Plata)',0,3,0,0,3,2,14,-12,14,6,0,0,2018,0),(24,'Club Atletico Estudiantes (Olavarria)',4,3,1,1,1,3,5,-2,6,6,0,0,2018,0),(25,'Club Nacional de Futbol (Uruguay)',9,3,3,0,0,20,1,19,5,7,1,0,2018,0),(26,'Club Excursionistas Tandil',0,3,0,0,3,2,26,-24,29,7,1,0,2018,0),(27,'Club Atletico Independiente (Mar del Plata)',6,3,2,0,1,9,5,4,19,7,1,0,2018,0),(28,'Club Ferrocarril Roca (Las Flores)',3,3,1,0,2,8,7,1,6,7,0,0,2018,0),(29,'Club Social y Deportivo El Fortin ',6,3,2,0,1,8,1,7,1,1,0,0,2018,1),(30,'Club Deportivo El Leon ',4,3,1,1,1,3,2,1,0,1,0,0,2018,1),(31,'Club Excursionistas Tandil',0,3,0,0,3,0,15,-15,15,1,0,0,2018,1),(32,'Club Ferrocarril Roca (Las Flores)',7,3,2,1,0,8,1,7,3,1,0,0,2018,1),(33,'Club Atletico Estudiantes (Olavarria)',3,3,1,0,2,3,6,-3,6,2,0,0,2018,1),(34,'Club Sarmiento (Ayacucho)',0,3,0,0,3,0,6,-6,6,2,0,0,2018,1),(35,'Club Independiente (Tandil)',6,3,2,0,1,4,1,3,4,2,0,0,2018,1),(36,'Club Atletico Independiente (Mar del Plata)',9,3,3,0,0,7,1,6,3,2,1,0,2018,1),(37,'Club Alumni Azuleño',6,3,2,0,1,4,1,3,3,3,0,0,2018,1),(38,'Club Defensores (Ayacucho)',3,3,1,0,2,2,4,-2,5,3,0,0,2018,1),(39,'Club Atletico Ferrocarril Sud (Tandil)',1,3,0,1,2,0,5,-5,5,3,0,0,2018,1),(40,'Club Atletico Quilmes (Mar del Plata)',7,3,2,1,0,4,0,4,0,3,1,0,2018,1),(41,'Club Atletico Ayacucho',9,3,3,0,0,9,0,9,6,4,0,0,2018,1),(42,'Club Deportivo Juevntud Unida',0,3,0,0,3,0,8,-8,8,4,0,0,2018,1),(43,'Club de Gimnasia y Esgrima de Tandil',6,3,2,0,1,5,3,2,6,4,0,0,2018,1),(44,'Club Atletico Jorge Newbery',3,3,1,0,2,3,6,-3,6,4,0,0,2018,1),(45,'Club Atletico River Plate A.F.A.',9,3,3,0,0,29,0,29,1,1,5,0,2019,0),(46,'Club y Biblioteca Ramon Santamarina (Tandil)',1,3,0,1,2,3,20,-17,20,1,2,0,2019,0),(47,'Club Atletico Estudiantes (Olavarria)',6,3,2,0,1,4,3,1,4,1,2,0,2019,0),(48,'Club Atletico Argentino (Saladillo)',1,3,0,1,2,4,17,-13,17,1,0,0,2019,0),(49,'Club Estudiantes de La Plata A.F.A.',9,3,3,0,0,27,0,27,4,2,2,1,2019,0),(50,'Club Atletico y Social San Lorenzo (Rauch)',1,3,0,1,2,1,14,-13,15,2,1,0,2019,0),(51,'Club Atletico Ayacucho',6,3,2,0,1,12,5,7,9,2,2,0,2019,0),(52,'Club Atletico Belgrano (Vidal)',1,3,0,1,2,1,22,-21,22,2,0,0,2019,0),(53,'Club Nacional de Futbol de Uruguay',6,3,2,0,1,8,3,5,4,3,0,0,2019,0),(54,'Club Atletico Ferrocarril Sud (Tandil)',9,3,3,0,0,16,4,12,9,3,2,0,2019,0),(55,'Club Atletico Quilmes (Mar del Plata)',3,3,1,0,2,1,6,-5,7,3,2,0,2019,0),(56,'Asociacion Deportiva Atletico Villa Gesell',0,3,0,0,3,2,14,-12,14,3,4,0,2019,0),(57,'Club Atletico Banfield A.F.A.',9,3,3,0,0,8,0,8,3,4,0,0,2019,0),(58,'Club de Gimnasia y Esgrima de Tandil',3,3,1,0,2,5,5,0,20,4,7,0,2019,0),(59,'Club Deportivo Independencia (A. G. Chavez)',3,3,1,0,2,2,3,-1,6,4,6,0,2019,0),(60,'Club Deportivo Juventud Unida (Gral. Madariaga)',3,3,1,0,2,2,9,-7,9,4,4,0,2019,0),(61,'Club Atletico Boca Juniors A.F.A.',9,3,3,0,0,30,0,30,4,5,2,0,2019,0),(62,'Club Defensores (Ayacucho)',3,3,1,0,2,2,14,-12,17,5,1,0,2019,0),(63,'Club Atletico Chascomus',6,3,2,0,1,7,4,3,7,5,0,0,2019,0),(64,'Club Social y Deportivo Union (Maipu)',0,3,0,0,3,1,22,-21,22,5,2,0,2019,0),(65,'Club Atletico San Lorenzo de Almagro A.F.A.',9,3,3,0,0,31,0,31,2,6,2,0,2019,0),(66,'Club Atletico Social y Deportivo Rauch',0,3,0,0,3,0,21,-21,21,6,0,0,2019,0),(67,'Club Atletico Liniers (Bahia Blanca) B',3,3,1,0,2,3,12,-9,13,6,0,0,2019,0),(68,'Club Deportivo El Leon (Gral. Madariaga)',6,3,2,0,1,6,7,-1,15,6,1,0,2019,0),(69,'Racing Club de Avellaneda A.F.A.',9,3,3,0,0,18,0,18,0,7,1,0,2019,0),(70,'Club Sarmiento (Ayacucho)',3,3,1,0,2,4,6,-2,8,7,3,0,2019,0),(71,'Club Atletico Independiente (Mar del Plata)',6,3,2,0,1,5,6,-1,6,7,1,0,2019,0),(72,'Club Atletico Maipu',0,3,0,0,3,1,16,-15,21,7,2,0,2019,0),(73,'Club Atletico Velez Sarsfield A.F.A.',9,3,3,0,0,35,0,35,3,8,3,0,2019,0),(74,'Club Independiente (Tandil)',4,3,1,1,1,4,5,-1,10,8,1,0,2019,0),(75,'Club Atletico Liniers (Bahia Blanca) A',2,3,0,2,1,2,21,-19,22,8,0,0,2019,0),(76,'Club Ferrocarril Roca (Las Flores)',1,3,0,1,2,2,17,-15,19,8,4,0,2019,0),(77,'Club Atletico Estudiantes (Olavarria)',6,3,2,0,1,6,2,4,6,1,1,0,2019,1),(78,'Club Deportivo Juventud Unida (Gral. Madariaga)',4,3,1,1,1,3,2,1,5,1,0,0,2019,1),(79,'Club y Biblioteca Ramon Santamarina (Tandil)',7,3,2,1,0,7,2,5,3,1,1,0,2019,1),(80,'Club Atletico Liniers (Bahia Blanca) A',0,3,0,0,3,0,10,-10,10,1,0,0,2019,1),(81,'Club Alumni Azuleño',6,3,2,0,1,8,1,7,7,2,1,0,2019,1),(82,'Club Sarmiento (Ayacucho)',1,3,0,1,2,2,6,-4,6,2,0,0,2019,1),(83,'Club Independiente (Tandil)',9,3,3,0,0,7,2,5,3,2,0,0,2019,1),(84,'Club Atletico Liniers (Bahia Blanca) B',1,3,0,1,2,2,10,-8,12,2,0,0,2019,1),(85,'Club Atletico Independiente (Mar del Plata)',9,3,3,0,0,12,1,11,1,3,2,0,2019,1),(86,'Club Defensores (Ayacucho)',0,3,0,0,3,2,8,-6,11,3,2,0,2019,1),(87,'Club Atletico Ferrocarril Sud (Tandil)',6,3,2,0,1,6,8,-2,11,3,0,0,2019,1),(88,'Club Atletico Ayacucho',3,3,1,0,2,2,4,-2,7,4,0,0,2019,1),(89,'Club Atletico Maipu',0,3,0,0,3,0,10,-10,10,4,0,0,2019,1),(90,'Club Ferrocarril Roca (Las Flores)',9,3,3,0,0,9,0,9,0,4,1,0,2019,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=367 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `goleadores`
--

LOCK TABLES `goleadores` WRITE;
/*!40000 ALTER TABLE `goleadores` DISABLE KEYS */;
INSERT INTO `goleadores` VALUES (1,'Raul Ignacio','Cabral',9,15,5,2018,0),(2,'Ezequiel','Nicolini',7,12,25,2018,0),(3,'Lautaro','Castaño',11,11,5,2018,0),(4,'Kevin Joel','Brito',16,9,5,2018,0),(5,'Gianluca','Bosch',17,7,5,2018,0),(6,'Lautaro','Ahumada ',7,6,5,2018,0),(7,'Mateo','Comba',9,9,25,2018,0),(8,'Mauricio','Roldan',11,6,9,2018,0),(9,'Santiago Valentin','Gonzales',10,5,9,2018,0),(10,'Octavio','Casalongue',16,5,17,2018,0),(11,'Juan Pablo','Arango Rolfi',10,5,13,2018,0),(12,'Nahuel','Simon',9,4,15,2018,0),(13,'Lucas Nicolas','Parera',7,4,9,2018,0),(14,'Luciano','Dias ',10,4,17,2018,0),(15,'Nicolas','Mitic Flores',9,4,1,2018,0),(16,'Nehuen','Benedetti',14,4,13,2018,0),(17,'Sebastian','Traverso',4,3,13,2018,0),(18,'Martin','Naser',16,3,13,2018,0),(19,'Luca','Landriel',11,4,13,2018,0),(20,'Thiago Valentin','Rolon',8,4,21,2018,0),(21,'Santiago','Peralta',11,3,25,2018,0),(22,'Thiago','Taboada',9,3,17,2018,0),(23,'Alex','Costa',2,3,28,2018,0),(24,'Agustin','Suarez',14,3,25,2018,0),(25,'Victor Hugo','Galeano',7,3,21,2018,0),(26,'Thomas','Mielniczuk',6,3,1,2018,0),(27,'Juan Cruz','Vergara',7,2,1,2018,0),(28,'Martin','Paz',11,3,6,2018,0),(29,'Mateo','Miglino',15,3,5,2018,0),(30,'Teo','Gomez ',11,3,11,2018,0),(31,'Facundo Nahuel','Roemo',8,3,9,2018,0),(32,'Lautaro Uriel','Peralta',9,3,9,2018,0),(33,'Nicolas Emanuel','Rojas',16,2,9,2018,0),(34,'Adrian Benjamin','Lucero Alaggio',14,2,9,2018,0),(35,'Juan Pablo','Moreno',10,3,21,2018,0),(36,'Tomas Joel','Lopez',11,3,21,2018,0),(37,'Juan Segundo','Larrivey',7,2,13,2018,0),(38,'Gano Genaro','Galarza',5,2,13,2018,0),(39,'Tiziano','Sanmartino',3,2,13,2018,0),(40,'Fabian','Masson',9,2,28,2018,0),(41,'Wenceslao','Cordomi',11,2,28,2018,0),(42,'Nicolas','Lombardi',9,2,7,2018,0),(43,'Juan Martin','Herrera ',11,2,7,2018,0),(44,'Santino','Sacchi',11,2,8,2018,0),(45,'Elias','Ferreyra',9,2,8,2018,0),(46,'Ramiro','Macarrone',3,2,17,2018,0),(47,'Mateo','Gutierrez',14,2,17,2018,0),(48,'Tomas','Arburua',12,2,17,NULL,NULL),(49,'Tomas Alejandro','Lopez',13,2,4,2018,0),(50,'Tobias','Ferrari ',10,2,18,2018,0),(51,'Lucas','Dietzel',17,2,8,2018,0),(52,'Faustino','De Vito ',4,2,5,2018,0),(53,'Matias','Guerra',6,2,27,2018,0),(54,'Santiago','Ronda Laborde',11,2,27,2018,0),(55,'Juan Francisco','Vazquez Vizmara',9,2,11,2018,0),(56,'Diego','Rivas Urriza',9,2,4,2018,0),(57,'Marco','Miguens',13,2,13,2018,0),(58,'Santiago','Tobar',15,2,13,2018,0),(59,'Carlos','Otazu Fariña',9,2,13,2018,0),(60,'Agustin','Camplone',14,2,24,2018,0),(61,'Luca','Crivelli',10,1,24,2018,0),(62,'Jhoan','Cardozo',8,2,25,2018,0),(63,'Exequias','Zapata',11,2,17,2018,0),(64,'Tiago','Gonzalez ',15,2,17,2018,0),(65,'Gaston','Galeano',8,2,7,2018,0),(66,'Simon','Frias ',8,2,19,2018,0),(67,'Lucas','Lazarte',9,2,18,2018,0),(68,'Joshua Nicolas','Portillo',6,2,21,2018,0),(69,'Ivan','alvarez ',9,2,6,2018,0),(70,'Ezequiel','Gregnoli',10,2,12,2018,0),(71,'Lucio','Vazquez',16,2,1,2018,0),(72,'Simon','Meza',10,2,1,2018,0),(73,'Homero','Dobal',10,1,2,2018,0),(74,'Tomas Valentin','Velazquez ',14,1,9,2018,0),(75,'Santiago Elias','Acosta',3,1,9,2018,0),(76,'Agustin','Lopez',5,1,9,2018,0),(77,'Octavio Nahuel','Diaz',13,1,9,2018,0),(78,'Ciro','Lopez ',11,1,23,2018,0),(79,'Thiago','Pintado',13,1,25,2018,0),(80,'Mathias','Albistur',17,1,25,2018,0),(81,'Alessandro','Scarpa',5,1,10,2018,0),(82,'Gonzalo','Bustamante ',10,1,27,2018,0),(83,'Joaquin','Contino',11,1,2,2018,0),(84,'Rufino','Cordero',13,1,2,2018,0),(85,'Francisco','Diz',15,1,2,2018,0),(86,'Nahuel','Parenti',10,1,22,2018,0),(87,'Emanuel','Pica',5,1,4,2018,0),(88,'Enzo','Carrera',7,1,8,2018,0),(89,'Tomas','Bustos',14,1,8,2018,0),(90,'Nahuel Fernando','Lamorte',6,1,11,2018,0),(91,'Tiziano','Godoy',5,1,1,2018,0),(92,'Nicolas','Coceres',8,1,1,2018,0),(93,'Juan Ignacio','Canale',6,1,13,2018,0),(94,'Gianni','Dislacio',4,1,24,2018,0),(95,'Roman','Salazar',4,1,21,2018,0),(96,'Franco','Bortolin',18,1,12,2018,0),(97,'Alexis','Servia Leguizamon',12,1,12,2018,0),(98,'Kevin','Gonzalez Vargas',14,1,5,2018,0),(99,'Dylan','Meaca',5,1,14,2018,0),(100,'Jeronimo','Sosa',6,1,15,2018,0),(101,'Tobias','Zapata',9,1,22,2018,0),(102,'Juan Jose','Teriaca ',8,1,27,2018,0),(103,'Mateo','Becci Trama',9,1,27,2018,0),(104,'Ramiro','Cabranes',7,1,27,2018,0),(105,'Augusto','Ruis',13,1,27,2018,0),(106,'Joaquin','Mandiola',3,1,27,2018,0),(107,'Thomas','Scolari',2,1,13,2018,0),(108,'Fabricio','Ventresca',9,1,21,2018,0),(109,'Lautaro','Napolitano',11,1,1,2018,0),(110,'Joaquin','Soria ',13,1,17,2018,0),(111,'Tobias','Zapata',9,1,23,2018,0),(112,'Ezequiel Agustin','Raineri',7,1,16,2018,0),(113,'Gaspar','Conde Etchebarne',2,1,14,2018,0),(114,'Lautaro Omar','Sosa',6,1,7,2018,0),(115,'Nelson','Franco',5,1,28,2018,0),(116,'Benjamin','Andolfatti',2,1,26,2018,0),(117,'Tobias','Lopez',10,1,26,2018,0),(118,'Martiniano','Iralur',5,1,2,2018,0),(119,'Nasif','Elia',9,5,40,2018,1),(120,'Valentin','Capuano Torres',10,2,40,2018,1),(121,'Franco','Bonilauri',14,1,40,2018,1),(122,'Benjamin','Villaryel',11,1,40,2018,1),(123,'Patricio','Peñalva',11,4,32,2018,1),(124,'David','Juarez',8,4,36,2018,1),(125,'Fermin','Loengo',10,2,36,2018,1),(126,'Leonel Adrian','Sandez',3,2,36,2018,1),(127,'Tobias ','Castellano',15,1,36,2018,1),(128,'Agustin','Acosta',10,3,41,2018,1),(129,'Martin Maximiliano','Suarez ',8,2,41,2018,1),(130,'Juan','Pelegrini Gomila',15,2,41,2018,1),(131,'Lisandro','De Arrieta Mazza ',5,1,41,2018,1),(132,'Xanti','Urra',14,1,41,2018,1),(133,'Enoc','Girado',9,3,35,2018,1),(134,'Benjamin','Saenz',8,1,35,2018,1),(135,'Valentino','Rivero',14,1,35,2018,1),(136,'Baltasar','Anselmi',2,1,35,2018,1),(137,'Joaquin','Camara',9,2,43,2018,1),(138,'Thiago','Gadea',7,2,29,2018,1),(139,'Lucas','Gomez',5,2,29,2018,1),(140,'Fausto','Penacchionni',6,1,33,2018,1),(141,'Juan Ignacio','Velazquez',15,1,37,2018,1),(142,'Mateo Exequiel','Diaz',9,1,37,2018,1),(143,'Santiago','Recci',10,1,37,2018,1),(144,'Dylan','Russo',10,1,32,2018,1),(145,'Laureano','Lamas',22,1,32,2018,1),(146,'Valentin','Herrera ',8,1,32,2018,1),(147,'Franco','Bortolotti',10,1,29,2018,1),(148,'Lionel','Bustamante ',2,1,29,2018,1),(149,'Agustin','Medina',8,1,29,2018,1),(150,'Lautaro','Lopez ',3,1,29,2018,1),(151,'Hernan','La Frossia Harisgarat',5,1,30,2018,1),(152,'Brian Ezequiel','Sanchez',7,1,43,2018,1),(153,'Joaquin','Almaraz',11,1,43,2018,1),(154,'Gonzalo','Cabalin',10,1,43,2018,1),(155,'Geronimo','Girolet',7,1,35,2018,1),(156,'Pedro','Morel',11,1,41,2018,1),(157,'Juan Jose','Amodeo',2,1,41,2018,1),(158,'Manuel','alvarez',12,1,36,2018,1),(159,'Valentino','Vitali',11,1,33,2018,1),(160,'Bautista','Serrano',7,1,33,2018,1),(161,'Mateo','Novo',8,1,33,2018,1),(162,'Martin','Freije Elorz',9,1,44,2018,1),(163,'Joaquin','Peralta',5,1,44,2018,1),(164,'Nicolas','Ferdara',10,1,44,2018,1),(165,'Renzo','Ascat',7,1,38,2018,1),(166,'Lautaro','Videla ',5,1,38,2018,1),(167,'Diego','Lopez',7,1,37,2018,1),(168,'Valentin','Bianchimmi',19,1,32,2018,1),(169,'Keylan','Mandeville',10,1,90,2019,1),(170,'Agustin','Torrisi',10,3,79,2019,1),(171,'Fermin','Llanos',2,1,79,2019,1),(172,'Iñaki','Larraburu',16,1,79,2019,1),(173,'Pedro','Lopez Sanchez',7,1,83,2019,1),(174,'Roque','Temoche',9,3,83,2019,1),(175,'Mateo','Wiemann Santos',17,1,83,2019,1),(176,'Lionel','Urtizberea',7,4,84,2019,1),(177,'Eros Alexander','Arena',9,4,77,2019,1),(178,'Juan Jose','Collado',9,4,87,2019,1),(179,'Roman','Islas',15,1,87,2019,1),(180,'Benicio Leon','Segura',9,1,86,2019,1),(181,'Julian','Guzman Ollearo',5,3,81,2019,1),(182,'Tobias','Castellano',11,3,85,2019,1),(183,'Mateo','Sarlinga Rodriguez',10,2,85,2019,1),(184,'Agustin Nicolas','Lemmi',9,5,85,2019,1),(185,'Valentin','Dini Palazzo',14,1,85,2019,1),(186,'Benjamin','Fernandez',9,3,58,2019,0),(187,'Rafael','Pichio',3,2,59,2019,0),(188,'Uriel','Conti',9,2,59,2019,0),(189,'Juan Andres','Coria',8,1,47,2019,0),(190,'Augusto','Wrobel',6,1,47,2019,0),(191,'Santiago','Villalba',4,1,49,2019,0),(192,'Ignacio','Agüero',8,4,49,2019,0),(193,'Axel','Atum',10,7,49,2019,0),(194,'Tomas','Chamorro',11,8,49,2019,0),(195,'Santiago','Alvarez',14,1,49,2019,0),(196,'Agustin','De La Cuesta',11,2,45,2019,0),(197,'Claudio','Echeverri',10,3,45,2019,0),(198,'Guillermo','Segovia',7,4,45,2019,0),(199,'Bautista','Dadin',9,15,45,2019,0),(200,'Axel','Sena',16,9,45,2019,0),(201,'Josias Emanuel','Palais',7,1,74,2019,0),(202,'Ramiro','Gonzalez',6,2,57,2019,0),(203,'Sebastian','Fiala',8,2,57,2019,0),(204,'Tomas','Tenis',5,2,57,2019,0),(205,'Emiliano Javier','Alvarez ',10,1,57,2019,0),(206,'Axel','Benites',16,5,65,2019,0),(207,'Juan Cruz','Avaca',17,7,65,2019,0),(208,'Thiago','Dolud',6,1,65,2019,0),(209,'Agustin','Sciaroni',10,2,65,2019,0),(210,'Thiago','Porra',8,4,65,2019,0),(211,'Franco','Gomez Kosarinki',9,4,65,2019,0),(212,'Maximo Enrique','Tabord',5,1,62,2019,0),(213,'Federico','Rodriguez',11,2,62,2019,0),(214,'Maximo','Gisondi',5,1,64,2019,0),(215,'Nazareno Cruz','Domecq Octavio',10,3,68,2019,0),(216,'Valentin','Migoya Bidalun',7,1,68,2019,0),(217,'Facundo Nicolas','Rosani Echandia',5,1,68,2019,0),(218,'Bautista','Murno',8,1,50,2019,0),(219,'Ramiro','Tissier',5,1,52,2019,0),(220,'Bautista','San Martin',8,5,54,2019,0),(221,'Alexis ','Devesa',9,4,54,2019,0),(222,'Benjamin','Iriart',11,2,54,2019,0),(223,'Marcos','Antunez',4,1,70,2019,0),(224,'Uriel','Lopez',10,4,70,2019,0),(225,'Mauricio','Carrizo Maher',9,12,73,2019,0),(226,'Carlos','Estigarribia Gonzalez',7,11,73,2019,0),(227,'Agustin','Armaya',17,5,73,2019,0),(228,'Gianluca','Piastrinni Gross',11,7,73,2019,0),(229,'Jeremias','Reyna',16,5,73,2019,0),(230,'Lucas','Alvarez',2,1,69,2019,0),(231,'Mateo','Marangmello',7,8,69,2019,0),(232,'Emanuel','Osuna',15,3,69,2019,0),(233,'Lucas','Pereyra',6,1,53,2019,0),(234,'Justin','Cintrone',7,1,53,2019,0),(235,'Thiago','Pintado',9,3,53,2019,0),(236,'Mathias','Albistu',10,1,53,2019,0),(237,'Dylan Tomas','Gorosito',4,1,61,2019,0),(238,'Juan','Traverso',10,4,61,2019,0),(239,'Facundo Ezequiel','Herrera',5,2,61,2019,0),(240,'Leandro Andres','Martinez',9,11,61,2019,0),(241,'Francisco','Jañez',5,2,51,2019,0),(242,'Santino','Tucci',16,3,51,2019,0),(243,'Francisco','Dis',10,3,51,2019,0),(244,'Salvador','Etchepare',9,3,51,2019,0),(245,'Martiniano','Suarez',15,1,51,2019,0),(246,'Agustin','Laturraga',17,1,78,2019,1),(247,'Felipe','Suarez Gonzalez',9,2,78,2019,1),(249,'Jeronimo','Romeo',11,3,83,2019,1),(250,'Alejo','Denaro',9,3,82,2019,1),(251,'Valentin','Borda',7,2,57,2019,0),(252,'Joel David','Gamarra',10,2,71,2019,0),(253,'Tomas','Parlapiano Ferrante',15,1,71,2019,0),(254,'Tiziano','Sosa Muscogorry',14,1,71,2019,0),(255,'Ivo','Rojas',7,1,48,2019,0),(257,'Tomas','Lilli',13,2,48,2019,0),(259,'Benjamin','Maliani',6,1,48,2019,0),(260,'Cristian','Echeverria',11,3,46,2019,0),(261,'Tiziano Lionel','Croci',5,1,73,2019,0),(262,'Agustin Fernando','Lopez',15,2,73,2019,0),(263,'Ignacio','Lopez Gomez',8,1,73,2019,0),(264,'Lucas Agustin','Pyziak',14,2,73,2019,0),(265,'Demian Lionel','Dominguez',3,2,73,2019,0),(266,'Camilo Pedro','Torres Pavletich',13,1,73,2019,0),(267,'Isaias','Ramirez',6,1,69,2019,0),(268,'Thiago','Taborda',8,2,69,2019,0),(269,'Maxi Alejo','Llanos',16,2,69,2019,0),(270,'Lautaro','Enriquez',10,1,69,2019,0),(271,'Alan','Vallejos',9,2,69,2019,0),(272,'Ignacio','Gutierrez',9,1,68,2019,0),(273,'Agustin','Lucero',9,3,63,2019,0),(274,'Simon','Pecora',3,1,63,2019,0),(275,'Dominguez','Santiago',11,1,63,2019,0),(276,'Nicanor Hernan ','de Ostazua',14,1,63,2019,0),(277,'Geronimo ','Miranda',3,1,54,2019,0),(278,'Joaquin','Ruiz',5,2,54,2019,0),(279,'Laureano','Bernazza',10,2,54,2019,0),(280,'Tomas','Copes',16,1,54,2019,0),(281,'Matias Ezequiel','Romay',11,2,56,2019,0),(282,'Tomas','Alvarez Castiloo',9,2,74,2019,0),(283,'Thiago','Cattanese',11,1,74,2019,0),(284,'Patricio','Peñalva',15,2,76,2019,0),(285,'Alejo ','Diez',10,1,58,2019,0),(286,'Juan','Gramajo',11,1,58,2019,0),(287,'Franco','Cima',15,1,60,2019,0),(288,'Lautaro','Braun',9,2,49,2019,0),(289,'Benjamin','Ridella',15,3,49,2019,0),(290,'Jonathan','Gonzalez',15,4,65,2019,0),(291,'Laureano','Elia',14,6,65,2019,0),(292,'Moices','Vega',7,6,65,2019,0),(293,'Ignacio','Ordoñez',11,1,65,2019,0),(294,'Ian Luca','Ramirez',14,3,61,2019,0),(295,'Baltazar','Blum Macias',3,3,61,2019,0),(296,'Felipe','Obradovich',11,2,61,2019,0),(297,'Ulises ','Gimenez',2,1,45,2019,0),(298,'Valentin','Lobos',6,2,90,2019,1),(299,'Valentin','Bianchini',5,2,90,2019,1),(300,'Leandro Antonio','Sorto',15,3,90,2019,1),(301,'Owen','Siraco',16,2,90,2019,1),(302,'Leonel Andres','Sandez',5,3,85,2019,1),(303,'Diego','Minciacca',15,2,85,2019,1),(304,'Juan Manuel','Arrayago',2,1,86,2019,1),(305,'Benjamin','Dangelo',11,1,79,2019,1),(306,'Luciano','D\'Onofrio',11,2,77,2019,1),(307,'Benjamin','Digaudio',7,3,81,2019,1),(308,'Matias','Barcelonna',8,1,81,2019,1),(309,'Julio Marias Leonel','Correa',9,1,81,2019,1),(310,'Carlos','Carrizo',8,2,87,2019,1),(311,'Lucas','Crocci',4,1,88,2019,1),(312,'Leonel','Flores',8,1,88,2019,1),(313,'Galo','Fogel',9,1,75,2019,0),(314,'Francisco','Moyano',9,1,76,2019,0),(315,'Maximiliano','Merlo',11,3,57,2019,0),(316,'Emiliano Javier','Alvarez',10,1,57,2019,0),(317,'Juan Maria','Maggi Bauza',16,1,63,2019,0),(318,'Jeremias Lario','Fraysse',9,1,47,2019,0),(319,'Lautaro','Rozycky',10,1,47,2019,0),(320,'Julian','Gomez',10,1,60,2019,0),(321,'Pepe Santino','Nahuel',8,2,85,2019,1),(322,'Bruno','Ismael',9,1,79,2019,1),(323,'Tiago','Vieytes',10,2,78,2019,1),(324,'Javier Ezequiel','Bustos',10,1,55,2019,0),(325,'Tomas','Hegler',11,1,67,2019,0),(326,'Bruno','Fernandez',7,1,67,2019,0),(327,'Joaquin','Calamante',6,1,84,2019,1),(328,'Elias','Tamir',8,1,53,2019,0),(329,'Axel','Cardozo',14,1,53,2019,0),(330,'Juanse','Charlier',8,1,71,2019,0),(331,'Tomas','Mariazcurrena',9,1,72,2019,0),(332,'Sergio Nahuel','Tison',7,2,61,2019,0),(333,'Lautaro Julian ','Mendieta',8,2,61,2019,0),(334,'Constantino','De Paz',6,1,49,2019,0),(335,'Thiago','Hirigoyen',7,1,49,2019,0),(336,'Fabricio','Diaz',14,3,45,2019,0),(337,'Ignacio','Zaballa',15,1,45,2019,0),(338,'Agustin','Obregon',4,2,45,2019,0),(339,'Joaquin','Flores',2,1,69,2019,0),(340,'Uriel','Rossi',10,3,77,2019,1),(341,'Maximiliano','Porcel',10,2,73,2019,0),(342,'Lucas Ramon','Gimenez Benitez',4,1,73,2019,0),(343,'Thiago Ariel','Silvero',2,1,73,2019,0),(344,'Juan Ignacio','Ferreira',16,2,61,2019,0),(345,'Maximo','Lazo',6,1,61,2019,0),(346,'Lucas','Garcias Granja',4,1,85,2019,1),(347,'Santiago','Grecco',15,1,57,2019,0),(348,'Bautista','Lippi',13,1,57,2019,0),(349,'Victoriano','Girado',7,2,82,2019,1),(350,'Bautista','Hernandez',11,1,59,2019,0),(351,'Facundo','Gonzalez',6,1,45,2019,0),(352,'Geronimo Nehuen','Inda',4,1,81,2019,1),(353,'Jose Carlos','Gioia',7,1,76,2019,0),(354,'Elias','Tamir',8,1,54,2019,0),(355,'Leonel','Lugones',11,1,75,2019,0),(356,'Thiago','Lisaso',8,2,90,2019,1),(357,'Bruno','Gomez',11,1,69,2019,0),(358,'Benjamin','Arrzeres',8,1,70,2019,0),(359,'Roberto','Faccio',16,1,50,2019,0),(360,'Gonzalo','Gomez de Saravia',8,1,59,2019,0),(361,'Axel','Gomez de Saravia',12,2,59,2019,0),(362,'Juan Cruz','Jatip',5,1,70,2019,0),(363,'Hugo','Rojas',5,1,45,2019,0),(364,'Keylan','Mandeville',10,1,90,2019,1),(365,'Alejo','Rivas',5,2,65,2019,0),(366,'Yair Ezequiel','Prezioso',5,1,81,2019,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=208 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `juega`
--

LOCK TABLES `juega` WRITE;
/*!40000 ALTER TABLE `juega` DISABLE KEYS */;
INSERT INTO `juega` VALUES (1,2,4,0,1,-1,-1,1,NULL,2018,0,'2018-02-07 00:00:00'),(2,1,3,9,0,-1,-1,1,NULL,2018,0,'2018-02-07 00:00:00'),(3,1,2,2,0,-1,-1,1,NULL,2018,0,'2018-02-07 00:00:00'),(4,3,4,1,4,-1,-1,1,NULL,2018,0,'2018-02-07 00:00:00'),(5,1,4,2,0,-1,-1,1,NULL,2018,0,'2018-02-07 00:00:00'),(6,2,3,1,0,-1,-1,1,NULL,2018,0,'2018-02-07 00:00:00'),(7,5,7,4,1,-1,-1,2,NULL,2018,0,'2018-02-07 00:00:00'),(8,6,8,4,1,-1,-1,2,NULL,2018,0,'2018-02-07 00:00:00'),(9,6,7,1,0,-1,-1,2,NULL,2018,0,'2018-02-07 00:00:00'),(10,5,8,12,1,-1,-1,2,NULL,2018,0,'2018-02-07 00:00:00'),(11,7,8,2,2,-1,-1,2,NULL,2018,0,'2018-02-07 00:00:00'),(12,5,6,11,0,-1,-1,2,NULL,2018,0,'2018-02-07 00:00:00'),(13,10,11,0,3,-1,-1,3,NULL,2018,0,'2018-02-07 00:00:00'),(14,9,12,10,0,-1,-1,3,NULL,2018,0,'2018-02-07 00:00:00'),(15,11,12,3,3,-1,-1,3,NULL,2018,0,'2018-02-07 00:00:00'),(16,9,10,7,0,-1,-1,3,NULL,2018,0,'2018-02-07 00:00:00'),(17,9,11,8,0,-1,-1,3,NULL,2018,0,'2018-02-07 00:00:00'),(18,10,12,1,1,-1,-1,3,NULL,2018,0,'2018-02-07 00:00:00'),(19,13,14,11,0,-1,-1,4,NULL,2018,0,'2018-02-07 00:00:00'),(20,15,16,2,0,-1,-1,4,NULL,2018,0,'2018-02-07 00:00:00'),(21,14,15,1,3,-1,-1,4,NULL,2018,0,'2018-02-07 00:00:00'),(22,13,16,7,0,-1,-1,4,NULL,2018,0,'2018-02-07 00:00:00'),(23,14,16,1,1,-1,-1,4,NULL,2018,0,'2018-02-07 00:00:00'),(24,13,15,7,0,-1,-1,4,NULL,2018,0,'2018-02-07 00:00:00'),(25,18,19,1,1,-1,-1,5,NULL,2018,0,'2018-02-07 00:00:00'),(26,17,20,5,0,-1,-1,5,NULL,2018,0,'2018-02-07 00:00:00'),(27,17,18,3,0,-1,-1,5,NULL,2018,0,'2018-02-07 00:00:00'),(28,19,20,1,0,-1,-1,5,NULL,2018,0,'2018-02-07 00:00:00'),(29,18,20,3,0,-1,-1,5,NULL,2018,0,'2018-02-07 00:00:00'),(30,17,19,6,0,-1,-1,5,NULL,2018,0,'2018-02-07 00:00:00'),(31,23,24,2,3,-1,-1,6,NULL,2018,0,'2018-02-07 00:00:00'),(32,21,22,9,0,-1,-1,6,NULL,2018,0,'2018-02-07 00:00:00'),(33,22,23,2,0,-1,-1,6,NULL,2018,0,'2018-02-07 00:00:00'),(34,21,24,3,0,-1,-1,6,NULL,2018,0,'2018-02-07 00:00:00'),(35,22,24,0,0,-1,-1,6,NULL,2018,0,'2018-02-07 00:00:00'),(36,21,23,9,0,-1,-1,6,NULL,2018,0,'2018-02-07 00:00:00'),(37,27,28,1,0,-1,-1,7,NULL,2018,0,'2018-02-07 00:00:00'),(38,25,26,11,0,-1,-1,7,NULL,2018,0,'2018-02-07 00:00:00'),(39,26,27,0,8,-1,-1,7,NULL,2018,0,'2018-02-07 00:00:00'),(40,25,28,4,1,-1,-1,7,NULL,2018,0,'2018-02-07 00:00:00'),(41,25,27,5,0,-1,-1,7,NULL,2018,0,'2018-02-07 00:00:00'),(42,26,28,2,7,-1,-1,7,NULL,2018,0,'2018-02-07 00:00:00'),(43,5,22,10,0,-1,-1,NULL,'o',2018,0,'2018-02-07 00:00:00'),(44,9,19,2,0,-1,-1,NULL,'o',2018,0,'2018-02-07 00:00:00'),(45,13,11,9,0,-1,-1,NULL,'o',2018,0,'2018-02-07 00:00:00'),(46,21,24,1,1,6,5,NULL,'o',2018,0,'2018-02-07 00:00:00'),(47,25,18,6,0,-1,-1,NULL,'o',2018,0,'2018-02-07 00:00:00'),(48,17,6,2,0,-1,-1,NULL,'o',2018,0,'2018-02-07 00:00:00'),(49,1,15,1,0,-1,-1,NULL,'o',2018,0,'2018-02-07 00:00:00'),(50,27,4,1,0,-1,-1,NULL,'o',2018,0,'2018-02-07 00:00:00'),(51,5,27,10,0,-1,-1,NULL,'c',2018,0,'2018-02-07 00:00:00'),(52,9,1,0,0,2,3,NULL,'c',2018,0,'2018-02-07 00:00:00'),(53,13,17,1,3,-1,-1,NULL,'c',2018,0,'2018-02-07 00:00:00'),(54,21,25,4,1,-1,-1,NULL,'c',2018,0,'2018-02-07 00:00:00'),(55,5,21,0,0,4,5,NULL,'s',2018,0,'2018-02-07 00:00:00'),(56,1,17,1,2,-1,-1,NULL,'s',2018,0,'2018-02-07 00:00:00'),(57,25,27,4,0,-1,-1,NULL,'7',2018,0,'2018-02-07 00:00:00'),(58,9,13,2,0,-1,-1,NULL,'5',2018,0,'2018-02-07 00:00:00'),(59,5,1,1,1,5,3,NULL,'t',2018,0,'2018-02-07 00:00:00'),(60,21,17,0,2,-1,-1,NULL,'f',2018,0,'2018-02-07 00:00:00'),(61,28,28,0,0,1,0,NULL,'ccp',2018,0,'2018-02-07 00:00:00'),(62,2,26,4,0,-1,-1,NULL,'ccp',2018,0,'2018-02-07 00:00:00'),(63,12,8,0,5,-1,-1,NULL,'ccp',2018,0,'2018-02-07 00:00:00'),(64,7,16,2,0,-1,-1,NULL,'ccp',2018,0,'2018-02-07 00:00:00'),(65,28,7,0,1,-1,-1,NULL,'scp',2018,0,'2018-02-07 00:00:00'),(66,2,8,0,1,-1,-1,NULL,'scp',2018,0,'2018-02-07 00:00:00'),(67,7,8,1,0,-1,-1,NULL,'fcp',2018,0,'2018-02-07 00:00:00'),(68,29,32,0,1,-1,-1,1,NULL,2018,1,'2018-02-07 00:00:00'),(69,30,31,2,0,-1,-1,1,NULL,2018,1,'2018-02-07 00:00:00'),(70,31,32,0,6,-1,-1,1,NULL,2018,1,'2018-02-07 00:00:00'),(71,29,30,1,0,-1,-1,1,NULL,2018,1,'2018-02-07 00:00:00'),(72,30,32,1,1,-1,-1,1,NULL,2018,1,'2018-02-07 00:00:00'),(73,29,31,7,0,-1,-1,1,NULL,2018,1,'2018-02-07 00:00:00'),(74,33,36,1,4,-1,-1,2,NULL,2018,1,'2018-02-07 00:00:00'),(75,34,35,0,2,-1,-1,2,NULL,2018,1,'2018-02-07 00:00:00'),(76,33,34,2,0,-1,-1,2,NULL,2018,1,'2018-02-07 00:00:00'),(77,33,35,0,2,-1,-1,2,NULL,2018,1,'2018-02-07 00:00:00'),(78,34,36,0,2,-1,-1,2,NULL,2018,1,'2018-02-07 00:00:00'),(79,35,36,0,1,-1,-1,2,NULL,2018,1,'2018-02-07 00:00:00'),(80,39,40,0,0,-1,-1,3,NULL,2018,1,'2018-02-07 00:00:00'),(81,37,38,1,0,-1,-1,3,NULL,2018,1,'2018-02-07 00:00:00'),(82,37,40,0,1,-1,-1,3,NULL,2018,1,'2018-02-07 00:00:00'),(83,38,39,2,0,-1,-1,3,NULL,2018,1,'2018-02-07 00:00:00'),(84,37,39,3,0,-1,-1,3,NULL,2018,1,'2018-02-07 00:00:00'),(85,38,40,0,3,-1,-1,3,NULL,2018,1,'2018-02-07 00:00:00'),(86,42,43,0,3,-1,-1,4,NULL,2018,1,'2018-02-07 00:00:00'),(87,41,44,4,0,-1,-1,4,NULL,2018,1,'2018-02-07 00:00:00'),(88,42,44,0,2,-1,-1,4,NULL,2018,1,'2018-02-07 00:00:00'),(89,43,44,2,1,-1,-1,4,NULL,2018,1,'2018-02-07 00:00:00'),(90,41,42,3,0,-1,-1,4,NULL,2018,1,'2018-02-07 00:00:00'),(91,41,43,2,0,-1,-1,4,NULL,2018,1,'2018-02-07 00:00:00'),(92,41,43,3,0,-1,-1,NULL,'c',2018,1,'2018-02-07 00:00:00'),(93,36,37,2,0,-1,-1,NULL,'c',2018,1,'2018-02-07 00:00:00'),(94,32,35,2,2,1,2,NULL,'c',2018,1,'2018-02-07 00:00:00'),(95,40,29,0,0,2,0,NULL,'c',2018,1,'2018-02-07 00:00:00'),(96,41,40,0,3,-1,-1,NULL,'s',2018,1,'2018-02-07 00:00:00'),(97,36,35,1,0,-1,-1,NULL,'s',2018,1,'2018-02-07 00:00:00'),(98,41,35,0,3,-1,-1,NULL,'t',2018,1,'2018-02-07 00:00:00'),(99,40,36,2,0,-1,-1,NULL,'f',2018,1,'2018-02-07 00:00:00'),(100,30,30,0,0,1,0,NULL,'scp',2018,1,'2018-02-07 00:00:00'),(101,38,33,0,1,-1,-1,NULL,'scp',2018,1,'2018-02-07 00:00:00'),(102,30,33,0,0,1,0,NULL,'fcp',2018,1,'2018-02-07 00:00:00'),(103,47,46,2,0,-1,-1,1,NULL,2019,0,'2019-02-13 16:10:00'),(104,45,48,12,0,-1,-1,1,NULL,2019,0,'2019-02-13 18:30:00'),(105,48,46,3,3,-1,-1,1,NULL,2019,0,'2019-02-14 16:10:00'),(106,45,47,2,0,-1,-1,1,NULL,2019,0,'2019-02-14 22:00:00'),(107,47,48,2,1,-1,-1,1,NULL,2019,0,'2019-02-15 16:10:00'),(108,45,46,15,0,-1,-1,1,NULL,2019,0,'2019-02-15 18:30:00'),(109,49,51,5,0,-1,-1,2,NULL,2019,0,'2019-02-13 17:20:00'),(110,50,52,1,1,-1,-1,2,NULL,2019,0,'2019-02-13 18:30:00'),(111,51,50,7,0,-1,-1,2,NULL,2019,0,'2019-02-14 15:00:00'),(112,49,52,16,0,-1,-1,2,NULL,2019,0,'2019-02-14 17:20:00'),(113,51,52,5,0,-1,-1,2,NULL,2019,0,'2019-02-15 15:00:00'),(114,49,50,6,0,-1,-1,2,NULL,2019,0,'2019-02-15 18:30:00'),(115,54,55,5,0,-1,-1,3,NULL,2019,0,'2019-02-13 15:00:00'),(116,53,56,5,0,-1,-1,3,NULL,2019,0,'2019-02-13 19:40:00'),(117,54,56,8,2,-1,-1,3,NULL,2019,0,'2019-02-14 16:10:00'),(118,53,55,1,0,-1,-1,3,NULL,2019,0,'2019-02-14 18:30:00'),(119,53,54,2,3,-1,-1,3,NULL,2019,0,'2019-02-15 17:20:00'),(120,55,56,1,0,-1,-1,3,NULL,2019,0,'2019-02-15 17:20:00'),(121,58,59,1,2,-1,-1,4,NULL,2019,0,'2019-02-13 15:00:00'),(122,57,60,5,0,-1,-1,4,NULL,2019,0,'2019-02-13 17:20:00'),(123,57,59,1,0,-1,-1,4,NULL,2019,0,'2019-02-14 16:10:00'),(124,58,60,4,1,-1,-1,4,NULL,2019,0,'2019-02-14 18:30:00'),(125,57,58,2,0,-1,-1,4,NULL,2019,0,'2019-02-15 16:10:00'),(126,59,60,0,1,-1,-1,4,NULL,2019,0,'2019-02-15 16:10:00'),(127,62,64,2,1,-1,-1,5,NULL,2019,0,'2019-02-13 16:10:00'),(128,61,63,4,0,-1,-1,5,NULL,2019,0,'2019-02-13 20:50:00'),(129,64,63,0,4,-1,-1,5,NULL,2019,0,'2019-02-14 17:20:00'),(130,61,62,10,0,-1,-1,5,NULL,2019,0,'2019-02-14 20:50:00'),(131,62,63,0,3,-1,-1,5,NULL,2019,0,'2019-02-15 16:10:00'),(132,61,64,16,0,-1,-1,5,NULL,2019,0,'2019-02-15 18:30:00'),(133,66,68,0,4,-1,-1,6,NULL,2019,0,'2019-02-13 17:20:00'),(134,65,67,10,0,-1,-1,6,NULL,2019,0,'2019-02-13 18:30:00'),(135,67,68,0,2,-1,-1,6,NULL,2019,0,'2019-02-14 16:10:00'),(136,65,66,14,0,-1,-1,6,NULL,2019,0,'2019-02-14 18:30:00'),(137,67,66,3,0,-1,-1,6,NULL,2019,0,'2019-02-15 17:20:00'),(138,65,68,7,0,-1,-1,6,NULL,2019,0,'2019-02-15 17:20:00'),(139,70,72,3,0,-1,-1,7,NULL,2019,0,'2019-02-13 16:10:00'),(140,69,71,4,0,-1,-1,7,NULL,2019,0,'2019-02-13 18:30:00'),(141,70,71,1,3,-1,-1,7,NULL,2019,0,'2019-02-14 15:00:00'),(142,69,72,11,0,-1,-1,7,NULL,2019,0,'2019-02-14 18:30:00'),(143,71,72,2,1,-1,-1,7,NULL,2019,0,'2019-02-15 18:30:00'),(144,69,70,3,0,-1,-1,7,NULL,2019,0,'2019-02-15 20:50:00'),(145,75,74,1,1,-1,-1,8,NULL,2019,0,'2019-02-13 16:10:00'),(146,73,76,13,0,-1,-1,8,NULL,2019,0,'2019-02-13 17:20:00'),(147,73,75,19,0,-1,-1,8,NULL,2019,0,'2019-02-14 17:20:00'),(148,74,76,3,1,-1,-1,8,NULL,2019,0,'2019-02-14 17:20:00'),(149,75,76,1,1,-1,-1,8,NULL,2019,0,'2019-02-15 15:00:00'),(150,73,74,3,0,-1,-1,8,NULL,2019,0,'2019-02-15 19:40:00'),(151,77,78,1,0,-1,-1,1,NULL,2019,1,'2019-02-13 15:00:00'),(152,79,80,4,0,-1,-1,1,NULL,2019,1,'2019-02-13 17:20:00'),(153,80,78,0,2,-1,-1,1,NULL,2019,1,'2019-02-14 16:10:00'),(154,79,77,2,1,-1,-1,1,NULL,2019,1,'2019-02-14 18:30:00'),(155,80,77,0,4,-1,-1,1,NULL,2019,1,'2019-02-15 17:20:00'),(156,79,78,1,1,-1,-1,1,NULL,2019,1,'2019-02-15 17:20:00'),(157,82,81,0,3,-1,-1,2,NULL,2019,1,'2019-02-13 17:20:00'),(158,83,84,4,1,-1,-1,2,NULL,2019,1,'2019-02-13 18:30:00'),(159,83,82,2,1,-1,-1,2,NULL,2019,1,'2019-02-14 15:00:00'),(160,84,81,0,5,-1,-1,2,NULL,2019,1,'2019-02-14 17:20:00'),(161,84,82,1,1,-1,-1,2,NULL,2019,1,'2019-02-15 18:30:00'),(162,83,81,1,0,-1,-1,2,NULL,2019,1,'2019-02-15 18:30:00'),(163,86,87,1,3,-1,-1,3,NULL,2019,1,'2019-02-13 16:10:00'),(164,85,86,2,1,-1,-1,3,NULL,2019,1,'2019-02-14 17:20:00'),(165,87,85,0,6,-1,-1,3,NULL,2019,1,'2019-02-15 16:10:00'),(166,88,90,0,1,-1,-1,4,NULL,2019,1,'2019-02-13 16:10:00'),(167,90,89,5,0,-1,-1,4,NULL,2019,1,'2019-02-14 16:10:00'),(168,88,89,1,0,-1,-1,4,NULL,2019,1,'2019-02-15 16:10:00'),(169,85,89,4,0,-1,-1,NULL,'iz',2019,1,'2019-02-13 18:30:00'),(170,87,88,3,1,-1,-1,NULL,'iz',2019,1,'2019-02-14 18:30:00'),(171,86,90,0,3,-1,-1,NULL,'iz',2019,1,'2019-02-15 15:00:00'),(172,61,71,5,0,-1,-1,NULL,'o',2019,0,'2019-02-16 08:40:00'),(173,73,58,15,0,-1,-1,NULL,'o',2019,0,'2019-02-16 08:40:00'),(174,57,51,4,0,-1,-1,NULL,'o',2019,0,'2019-02-16 09:00:00'),(175,65,74,5,0,-1,-1,NULL,'o',2019,0,'2019-02-16 09:50:00'),(176,45,68,8,0,-1,-1,NULL,'o',2019,0,'2019-02-16 09:50:00'),(177,54,53,1,0,-1,-1,NULL,'o',2019,0,'2019-02-16 10:10:00'),(178,49,47,1,0,-1,-1,NULL,'o',2019,0,'2019-02-16 11:00:00'),(179,69,63,3,0,-1,-1,NULL,'o',2019,0,'2019-02-16 11:00:00'),(180,59,76,2,2,4,3,NULL,'ccp',2019,0,'2019-02-16 09:30:00'),(181,55,75,0,1,-1,-1,NULL,'ccp',2019,0,'2019-02-16 10:30:00'),(182,62,67,1,0,-1,-1,NULL,'ccp',2019,0,'2019-02-16 11:30:00'),(183,70,50,1,1,4,2,NULL,'ccp',2019,0,'2019-02-16 12:10:00'),(184,85,88,3,0,-1,-1,NULL,'c',2019,1,'2019-02-16 08:40:00'),(185,79,81,0,1,-1,-1,NULL,'c',2019,1,'2019-02-16 09:50:00'),(186,90,87,3,0,-1,-1,NULL,'c',2019,1,'2019-02-16 11:00:00'),(187,83,77,1,1,1,3,NULL,'c',2019,1,'2019-02-16 11:00:00'),(188,82,86,3,0,-1,-1,NULL,'scp',2019,1,'2019-02-16 09:00:00'),(189,78,84,2,3,-1,-1,NULL,'scp',2019,1,'2019-02-16 10:00:00'),(190,82,84,0,0,2,3,NULL,'fcp',2019,1,'2019-02-16 17:00:00'),(191,73,57,2,0,-1,-1,NULL,'c',2019,0,'2019-02-16 17:00:00'),(192,65,54,2,0,-1,-1,NULL,'c',2019,0,'2019-02-16 18:10:00'),(193,61,69,0,0,5,4,NULL,'c',2019,0,'2019-02-16 19:20:00'),(194,45,49,2,0,-1,-1,NULL,'c',2019,0,'2019-02-16 20:30:00'),(195,85,81,4,0,-1,-1,NULL,'s',2019,1,'2019-02-17 10:00:00'),(196,90,77,1,0,-1,-1,NULL,'s',2019,1,'2019-02-17 11:10:00'),(197,59,62,3,0,-1,-1,NULL,'scp',2019,0,'2019-02-16 17:00:00'),(198,75,70,0,1,-1,-1,NULL,'scp',2019,0,'2019-02-16 18:00:00'),(199,59,70,1,1,2,4,NULL,'fcp',2019,0,'2019-02-17 09:00:00'),(200,73,45,0,2,-1,-1,NULL,'s',2019,0,'2019-02-17 10:00:00'),(201,65,61,3,0,-1,-1,NULL,'s',2019,0,'2019-02-17 11:10:00'),(202,54,57,1,3,-1,-1,NULL,'7',2019,0,'2019-02-17 15:50:00'),(203,49,69,0,2,-1,-1,NULL,'5',2019,0,'2019-02-17 17:00:00'),(204,77,81,2,2,4,3,NULL,'t',2019,1,'2019-02-17 16:00:00'),(205,85,90,0,0,2,3,NULL,'f',2019,1,'2019-02-17 17:15:00'),(206,73,61,1,1,2,3,NULL,'t',2019,0,'2019-02-17 18:10:00'),(207,45,65,2,1,-1,-1,NULL,'f',2019,0,'2019-02-17 19:30:00');
/*!40000 ALTER TABLE `juega` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('hF82KcYkTIH01NTzRd9LyqAoDUnph7oI',1551296237,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),('hwgPOP06Gg9i8K_bB7k2AY5AW9bHh-6T',1551296233,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),('jylI2wpfJdRWfjKHusJemSjYW9FFNG1f',1551228032,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),('mNscVWpjiNfL2NHWrgCIYmqmMjC9_CR8',1551216531,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Joaco','$2a$10$BSA.b5mqfpf983nxD/GHBu2hkD.YtmJqNYRp8Cat0uq3dVFUkLPX6','Joaquin Allende');
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

-- Dump completed on 2019-03-27 18:17:02
