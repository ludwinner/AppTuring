CREATE DATABASE IF NOT EXISTS appturing;

USE appturing;

CREATE TABLE IF NOT EXISTS tasks(
  id INT(11) NOT NULL AUTO_INCREMENT,
  title VARCHAR(100),
  description TEXT,
  date DATE,
  PRIMARY KEY(id)
);

show tables;

describe tasks;

INSERT INTO tasks(title, description) VALUES
  ('my first task', 'some description'),
  ('my second task', 'some second description');