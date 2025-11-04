-- -- Database: read_for_change_db

-- -- Users Table
-- CREATE TABLE users (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(100) NOT NULL,
--     email VARCHAR(100) NOT NULL UNIQUE,
--     password VARCHAR(255) NOT NULL,
--      role ENUM('user', 'admin') DEFAULT 'user',
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- Books Table
-- CREATE TABLE books (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     title VARCHAR(255) NOT NULL,
--     author VARCHAR(255) NOT NULL,
--     description TEXT,
--     cover_url VARCHAR(255),
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- Reviews Table
-- CREATE TABLE reviews (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     user_id INT NOT NULL,
--     book_id INT NOT NULL,
--     rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
--     comment TEXT,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
--     FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE
-- );
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: read_for_change_db
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `description` text,
  `cover_url` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `book_id` varchar(255) NOT NULL,
  `rating` int NOT NULL,
  `comment` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `reviews_chk_1` CHECK ((`rating` between 1 and 5))
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (4,16,'KVGd-NabpW0C',3,'nbhxdcxcbnvjsdckkkkkkkkkkkkknnnnnnnmmmmmmmmmmmmmmmmmmmmmmmmmm','2025-10-30 16:01:30');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `role` enum('admin','reader') NOT NULL DEFAULT 'reader',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'sara','we@gmail.com','$2b$10$uqhbasgm/O4XH8MM7peE2e26z4Di6MlvzPvvgUl9D6OWfU4OVAN2O','2025-10-17 13:38:10','reader'),(3,'sara','sarahhailu2010@gmail.com','$2b$10$PPw/6RJUHvXch3T1rb4YD.pIW/ncV0lMcxNQSJpEHfHg7D4HPUlsG','2025-10-17 13:39:14','reader'),(8,'sara','s@gmail.com','$2b$10$a/1HlP5AdkqGw4jETul0ge..jcr2rpYTgiIEE3B9rGlOahewZI5EK','2025-10-17 13:46:18','reader'),(10,'sara','1@gmail.com','$2b$10$drrrJA0sGV4Pq3GSavSLnO8R/B8vGXhBMp4EzIlCchvMTouMGEeDe','2025-10-17 13:55:03','reader'),(11,'sara','2@gmail.com','$2b$10$ozvlybOn9P5SgegpCtPco.2tZstHofAY6VT.QltdNO8ldT80C20Cm','2025-10-17 13:57:01','reader'),(12,'sara','3@gmail.com','$2b$10$CgEPfeFKw0lMidTo8gA0jOuOep3PC6xgVOMoRMU3J3euUr3WeRc56','2025-10-17 14:01:27','reader'),(13,'sara','4@gmail.com','$2b$10$4SyaKugs1bXEuAyfZ7uSt.TwAHfqqxhKAlBx1C6aIGR/x0VO0kw2K','2025-10-17 14:03:15','reader'),(15,'sara','5@gmail.com','$2b$10$M6z.lSd2u30BrJ1bk7eANOYUVfCmaAsrKHI2nlHtpVR0oZ/qYfSNG','2025-10-17 14:03:50','reader'),(16,'sara','6@gmail.com','$2b$10$9JY1dOAzRfr9pZCGCSqDgu6UqVZPdw/UAd3ppIyVMsrEXYSuBX6xe','2025-10-17 14:07:27','reader');
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

-- Dump completed on 2025-10-31 21:46:45
