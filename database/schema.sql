-- Database: read_for_change_db

 -- Users Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
     role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- -- Books Table
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    description TEXT,
    cover_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- -- Reviews Table
CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    book_id INT NOT NULL,
    rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE
);
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
-- ----------------------------
-- Database: read_for_change_db
-- ----------------------------

-- Users Table
-- CREATE TABLE IF NOT EXISTS users (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(100) NOT NULL,
--     email VARCHAR(100) NOT NULL UNIQUE,
--     password VARCHAR(255) NOT NULL,
--     role ENUM('admin', 'reader') NOT NULL DEFAULT 'reader',
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- Books Table
-- CREATE TABLE IF NOT EXISTS books (
--     id VARCHAR(255) NOT NULL PRIMARY KEY,
--     title VARCHAR(255) NOT NULL,
--     author VARCHAR(255) NOT NULL,
--     description TEXT,
--     cover_url VARCHAR(255),
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- Reviews Table
-- CREATE TABLE IF NOT EXISTS reviews (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     user_id INT NOT NULL,
--     book_id VARCHAR(255) NOT NULL,
--     rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
--     comment TEXT,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
--     FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE
-- );

-- -- ----------------------------
-- -- Optional: Insert sample data
-- -- ----------------------------

-- -- Users
-- INSERT INTO users (id, name, email, password, role, created_at) VALUES
-- (1,'sara','we@gmail.com','$2b$10$uqhbasgm/O4XH8MM7peE2e26z4Di6MlvzPvvgUl9D6OWfU4OVAN2O','reader','2025-10-17 13:38:10'),
-- (3,'sara','sarahhailu2010@gmail.com','$2b$10$PPw/6RJUHvXch3T1rb4YD.pIW/ncV0lMcxNQSJpEHfHg7D4HPUlsG','reader','2025-10-17 13:39:14');

-- -- Books
-- -- Add your books data here if needed
-- -- INSERT INTO books (id, title, author, description, cover_url) VALUES (...);

-- -- Reviews
-- -- Add your reviews data here if needed
-- -- INSERT INTO reviews (user_id, book_id, rating, comment) VALUES (...);
