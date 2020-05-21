DROP DATABASE IF EXISTS MentorMii;

CREATE DATABASE MentorMii;

USE MentorMii;

CREATE TABLE Mentor (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  skill varchar(200) NOT NULL,
  review varchar(500) NOT NULL,
  picture varchar(200) NOT NULL,
  userName varchar(200) NOT NULL,
  password varchar(200) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE Mentii (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  picture varchar(200) NOT NULL,
  userName varchar(200) NOT NULL,
  password varchar(200) NOT NULL,
  PRIMARY KEY (ID)
);




INSERT INTO Mentor (name, skill, review, picture, userName, password)
VALUES ("Paul Blart", "C++", "Paul didn't know what he was talking about! All he keep saying was, this lemonade is insane! He was drinking a magarita",
 "https://blueoceang6.s3.us-east-2.amazonaws.com/G6/Blart.jpg", "topFlightSecurity", "OfTheWorld"), 
("Nik Mentakis", "javascript", "Nik knew everything but needs a haircut", "https://blueoceang6.s3.us-east-2.amazonaws.com/G6/Nik.jpg", "JediMaster", "macewindu");

INSERT INTO Mentii (name, picture, userName, password)
VALUES ("Andy Herrera", "https://blueoceang6.s3.us-east-2.amazonaws.com/G6/Andrew.jpg", "RentAcop", "spurs"), ("Collin Synder", "https://blueoceang6.s3.us-east-2.amazonaws.com/G6/Collin.jpg", "SpaceShip", "aliens");












