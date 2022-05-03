-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: localhost    Database: eng_4k_web_app
-- ------------------------------------------------------
-- Server version	8.0.24

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
-- Table structure for table `add_lessons`
--

DROP TABLE IF EXISTS `add_lessons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `add_lessons` (
  `lessons` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `add_lessons`
--

LOCK TABLES `add_lessons` WRITE;
/*!40000 ALTER TABLE `add_lessons` DISABLE KEYS */;
/*!40000 ALTER TABLE `add_lessons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coursedb`
--

DROP TABLE IF EXISTS `coursedb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coursedb` (
  `CourseId` int NOT NULL AUTO_INCREMENT,
  `CourseDescription` varchar(45) NOT NULL,
  `CourseName` varchar(45) NOT NULL,
  `CourseTags` varchar(45) NOT NULL,
  `CourseMedia` varchar(45) NOT NULL,
  `CourseImage` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`CourseId`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coursedb`
--

LOCK TABLES `coursedb` WRITE;
/*!40000 ALTER TABLE `coursedb` DISABLE KEYS */;
INSERT INTO `coursedb` VALUES (5,'A quick introductory course on Physics','PHYS1001','','',NULL),(6,'A quick introductory course on Physics','PHYS1001','','',NULL),(7,'A quick introductory course on Physics','PHYS1002','','',NULL),(8,'B','B','','',NULL),(9,'C','C','','',NULL),(10,'D','D','','',NULL),(11,'E','E','','',NULL),(12,'Calculus','MATH1001','','',NULL),(13,'a','a','a','a','a'),(14,'1','1','1','1','1'),(15,'3','3','3','3','3'),(16,'hjds','test course','test tag','test media','https test'),(17,'','','','',''),(18,'','','','',''),(19,'','','','adog',''),(20,'','','','','');
/*!40000 ALTER TABLE `coursedb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lessondb`
--

DROP TABLE IF EXISTS `lessondb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lessondb` (
  `LessonId` int NOT NULL AUTO_INCREMENT,
  `Author` varchar(45) DEFAULT NULL,
  `LessonName` varchar(45) NOT NULL,
  `image` longtext,
  `description` longtext NOT NULL,
  `CourseId` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`LessonId`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lessondb`
--

LOCK TABLES `lessondb` WRITE;
/*!40000 ALTER TABLE `lessondb` DISABLE KEYS */;
INSERT INTO `lessondb` VALUES (22,NULL,'A','D','B','6'),(23,NULL,'AA','DD','BB','5'),(24,NULL,'Software','','Teach software','7'),(25,NULL,'Calculus','google.image','Math stuff','12');
/*!40000 ALTER TABLE `lessondb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lessonmediadb`
--

DROP TABLE IF EXISTS `lessonmediadb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lessonmediadb` (
  `LessonId` int NOT NULL AUTO_INCREMENT,
  `Media` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`LessonId`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lessonmediadb`
--

LOCK TABLES `lessonmediadb` WRITE;
/*!40000 ALTER TABLE `lessonmediadb` DISABLE KEYS */;
INSERT INTO `lessonmediadb` VALUES (1,'MP3'),(2,'Some PDF file again'),(3,'Webm'),(4,'MP3'),(5,'Some PDF file again'),(6,'None'),(7,'pdf'),(8,'pdf'),(9,'pdf'),(10,'pdf'),(11,'pdf'),(12,'pfd josh'),(13,'pdf'),(14,'MP4'),(15,'mp4'),(16,'circuits_introduction.mp4'),(17,'lesson.pdf'),(18,'Some PDF file again'),(19,'MP3'),(20,NULL),(21,NULL);
/*!40000 ALTER TABLE `lessonmediadb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lessontagdb`
--

DROP TABLE IF EXISTS `lessontagdb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lessontagdb` (
  `LessonId` int NOT NULL AUTO_INCREMENT,
  `Tag` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`LessonId`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lessontagdb`
--

LOCK TABLES `lessontagdb` WRITE;
/*!40000 ALTER TABLE `lessontagdb` DISABLE KEYS */;
INSERT INTO `lessontagdb` VALUES (1,'Samyak J.'),(2,'Beta, Preview, Practice'),(3,'Engineering, Electrical'),(4,'Circuits, Introduction, Fundamentals'),(5,'Circuits, Introduction, Fundamentals'),(6,'test,one,more'),(7,'math'),(8,'math'),(9,'rgrtg'),(10,'eng'),(11,'eng'),(12,'eng'),(13,'engineering'),(14,'ENG'),(15,'math'),(16,'Circuits, Introduction, Fundamentals'),(17,'Circuits, Introduction, Fundamentals'),(18,'Calculus, Math, Introduction'),(19,'Samyak J.'),(20,NULL),(21,NULL);
/*!40000 ALTER TABLE `lessontagdb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sign_up`
--

DROP TABLE IF EXISTS `sign_up`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sign_up` (
  `person_id` int DEFAULT NULL,
  `person_email` varchar(45) NOT NULL,
  `person_password` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`person_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sign_up`
--

LOCK TABLES `sign_up` WRITE;
/*!40000 ALTER TABLE `sign_up` DISABLE KEYS */;
INSERT INTO `sign_up` VALUES (1,'after@gmail.com','ggogogg','teacher'),(1,'done@gmail.com','dsdas','teacher'),(1,'eff@gmail.com','gerg','student'),(1,'final2@gmail.com','fefref','teacher'),(1,'joshua@gmail.com','joshua','teacher'),(1,'joshua1@gmail.com','joshua','student'),(1,'joshua2@gmail.com','joshua','teacher'),(1,'samyak@gmail.com','ghvgh','teacher');
/*!40000 ALTER TABLE `sign_up` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `fullname` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  `entry_date` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `feedback_file` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('a dog','adog@gmail.com','adog','2022-02-21 22:13:22','teacher',NULL),(NULL,'after@gmail.com','ggogogg',NULL,'teacher',NULL),(NULL,'done@gmail.com','dsdas',NULL,'teacher',NULL),(NULL,'eff@gmail.com','gerg',NULL,'student',NULL),(NULL,'final2@gmail.com','fefref',NULL,'teacher',NULL),('Jihal','jihal@gmail.com','jihal','2021-12-23 16:09:05','student',NULL),('Jihal','jihal1@gmail.com','jihal','2021-12-23 16:13:03','student',NULL),('Jihal','jihal2@gmail.com','jihal','2021-12-23 16:17:28','student',NULL),('Jihal','jihalp@gmail.com','jihal','2021-12-23 16:20:49','student',NULL),(NULL,'joshua@gmail.com','joshua',NULL,'teacher',NULL),(NULL,'joshua1@gmail.com','rfefrf',NULL,'student',NULL),(NULL,'lukas@gmail.com','rfref',NULL,'teacher',NULL),('newsam9','newsam9@gmail.com','passowrd','2021-12-20 03:28:00','teacher','new.mp3'),('sammy','samyak@gmail.com','ghvgh',NULL,'teacher','audio.wav');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-03  1:40:31
