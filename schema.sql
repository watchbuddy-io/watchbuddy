DROP DATABASE IF EXISTS watchbuddy;

CREATE DATABASE watchbuddy;

USE watchbuddy;

CREATE TABLE user (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  show varchar(255),
  start DATE DEFAULT CURDATE(),
  monday int DEFAULT 0,
  tuesday int DEFAULT 0,
  wednesday int DEFAULT 0,
  thursday int DEFAULT 0,
  friday int DEFAULT 0,
  saturday int DEFAULT 0,
  sunday int DEFAULT 0,
  days int,
  hours int,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
