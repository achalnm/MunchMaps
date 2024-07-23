-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: munch_maps
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant` (
  `RestaurantID` int NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Contact_num` varchar(15) DEFAULT NULL,
  `MapLink` varchar(255) DEFAULT NULL,
  `Branch` varchar(255) DEFAULT NULL,
  `CategoryID` int DEFAULT NULL,
  `PriceID` int DEFAULT NULL,
  `ServiceTypeID` int DEFAULT NULL,
  `DistanceID` int DEFAULT NULL,
  `Rating_id` int DEFAULT NULL,
  `OpenTime` varchar(45) DEFAULT NULL,
  `CloseTime` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`RestaurantID`),
  KEY `CategoryID` (`CategoryID`),
  KEY `PriceID` (`PriceID`),
  KEY `ServiceTypeID` (`ServiceTypeID`),
  KEY `DistanceID` (`DistanceID`),
  KEY `Rating_id` (`Rating_id`),
  CONSTRAINT `CategoryID` FOREIGN KEY (`CategoryID`) REFERENCES `category` (`CategoryID`),
  CONSTRAINT `DistanceID` FOREIGN KEY (`DistanceID`) REFERENCES `distance` (`DistanceID`),
  CONSTRAINT `PriceID` FOREIGN KEY (`PriceID`) REFERENCES `price` (`PriceID`),
  CONSTRAINT `Rating_id` FOREIGN KEY (`Rating_id`) REFERENCES `rating` (`Rating_id`),
  CONSTRAINT `ServiceTypeID` FOREIGN KEY (`ServiceTypeID`) REFERENCES `service` (`ServiceTypeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES (1,'Dhanalakshmi Biriyani','123-456-7890','https://shorturl.at/xETV6','Tataguni',2,3,1,2,4,'12:00pm','9:00pm'),(2,'Five Star Chicken','987-654-3210','https://shorturl.at/bmM14','Tataguni',1,2,1,2,5,'10:00am','9:30pm'),(3,'Masth Cafe','987-654-3216','https://shorturl.at/dtEHJ','Lakshmipura',1,2,1,3,3,'8:30am','9:00pm'),(4,'Nature Cafe','987-654-3234','https://shorturl.at/ghDH3','Nice Road',1,2,1,3,5,'10:00am','7:00pm'),(5,'Royal Cakes and Bakery','420-654-3234','https://shorturl.at/EHKWX','Tataguni',3,1,2,1,5,'8:00am','9:00pm'),(6,'Santrupthi Hotel','420-654-8362','https://shorturl.at/EHKWX','Tataguni',2,2,1,1,2,'8:00am','9:00pm'),(7,'Sri Brahmalingeshwara Hotel','123-123-2345','https://shorturl.at/bluU3','Tataguni',2,1,2,2,5,NULL,'8:00pm'),(8,'Sri Ganapati Hot Chips','345-123-4567','https://shorturl.at/bluU3','Tataguni',1,1,2,2,4,'9:00am','9:00pm'),(9,'Sri Lakshmi Janardhan Bakery and Sweets','567-543-4523','https://rb.gy/xw7jet','Tataguni',3,1,2,1,4,'7:45am','9:00pm'),(10,'Vaishnavi Palace','111-456-1234','https://rb.gy/h81h5t','Lakshmipura',2,3,1,3,5,'8:00am','10:00pm'),(11,'Veg Gate','222-678-9087','https://rb.gy/27e0au','Lakshmipura',2,2,1,3,5,'8:00am','10:00pm');
/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-23 16:04:48
