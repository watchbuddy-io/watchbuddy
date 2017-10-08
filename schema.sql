DROP DATABASE IF EXISTS watchbuddy;

CREATE DATABASE watchbuddy;

USE watchbuddy;

CREATE TABLE user (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(255) UNIQUE, -- set username to be unique
  password varchar(64),
  salt varchar(64),
  showtitle int,
  season int,
  episode int,
  start timestamp not null default now(),
  deadline DATE,
  monday int DEFAULT 0,
  tuesday int DEFAULT 0,
  wednesday int DEFAULT 0,
  thursday int DEFAULT 0,
  friday int DEFAULT 0,
  saturday int DEFAULT 0,
  sunday int DEFAULT 0,
  hours int,
  PRIMARY KEY (ID)
);

-- CREATE TABLE shows (
--   show_id int NOT NULL AUTO_INCREMENT,
--   title varchar(255),
--   season int,
--   episode int,
--   user_id int,
--   FOREIGN KEY (user_id) REFERENCES user(id)
-- );

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
