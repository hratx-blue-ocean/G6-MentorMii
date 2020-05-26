DROP DATABASE IF EXISTS MentorMii;

CREATE DATABASE MentorMii;

USE MentorMii;

CREATE TABLE Mentor (
  id int NOT NULL AUTO_INCREMENT,
  firstName varchar(50) NOT NULL,
  lastName varchar(50) NOT NULL,
  skill varchar(200) NOT NULL,
  review varchar(500) NOT NULL,
  picture varchar(200) NOT NULL,
  userName varchar(200) NOT NULL,
  password varchar(200) NOT NULL,
  email varchar(200) NOT NULL,
  bio varchar(500) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE Mentii (
  id int NOT NULL AUTO_INCREMENT,
  firstName varchar(50) NOT NULL,
  lastName varchar(50) NOT NULL,
  picture varchar(200) NOT NULL,
  userName varchar(200) NOT NULL,
  password varchar(200) NOT NULL,
  email varchar(200) NOT NULL,
  PRIMARY KEY (ID)
);




INSERT INTO Mentii (firstName, lastName, picture, userName, password, email)
VALUES ("Andy", "Herrera", "https://blueoceang6.s3.us-east-2.amazonaws.com/G6/Andrew.jpg", "RentAcop", "spurs", "andrewherrara@gmail.com"),
("Collin", "Synder", "https://blueoceang6.s3.us-east-2.amazonaws.com/G6/Collin.jpg", "SpaceShip", "aliens", "collinsnyder@gmail.com");

INSERT INTO Mentii (firstName, lastName, picture, userName, password, email)
VALUES ("Andy", "Herrera", "https://blueoceang6.s3.us-east-2.amazonaws.com/G6/Andrew.jpg", "RentAcop", "spurs", "andrewherrara@gmail.com"),
 ("Collin", "Synder", "https://blueoceang6.s3.us-east-2.amazonaws.com/G6/Collin.jpg", "SpaceShip", "aliens", "collinsnyder@gmail.com");












