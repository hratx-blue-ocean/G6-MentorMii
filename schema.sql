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




INSERT INTO Mentor (firstName, lastName, skill, review, picture, userName, password, email, bio)
VALUES ("Paul", "Blart", "C++", "Paul didn't know what he was talking about! All he keep saying was, this lemonade is insane! He was drinking a magarita",
 "https://blueoceang6.s3.us-east-2.amazonaws.com/G6/Blart.jpg", "topFlightSecurity", "OfTheWorld", "paulblart@gmail.com", "My name is Paul, and I have been a C++ mentor for 6 months."),
("Nik", "Mentakis", "javascript", "Nik knew everything but needs a haircut", "https://blueoceang6.s3.us-east-2.amazonaws.com/G6/Nik.jpg", "JediMaster", "macewindu", "nikmentakis@gmail.com", "I'm a full stack engineer that is interested in building innovative solutions to difficult everyday problems. I love solving challenging obstacles across the stack that stretch my knowledge and encourage personal growth.");

INSERT INTO Mentii (firstName, lastName, picture, userName, password, email)
VALUES ("Andy", "Herrera", "https://blueoceang6.s3.us-east-2.amazonaws.com/G6/Andrew.jpg", "RentAcop", "spurs", "andrewherrara@gmail.com"),
 ("Collin", "Synder", "https://blueoceang6.s3.us-east-2.amazonaws.com/G6/Collin.jpg", "SpaceShip", "aliens", "collinsnyder@gmail.com");










