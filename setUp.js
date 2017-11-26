function run (index) {
  const { Client } = require('pg');
  const client = new Client({
    connectionString: process.env.DATABASE_URL || 'postgres://jyamevtnefikev:c21391120be4cd964cfe0b8f1c5395f58da938b9c8ce7fec59fc6c88efa96330@ec2-54-235-80-137.compute-1.amazonaws.com:5432/d34otthgq56sk',
    ssl: true,
  });
  client.connect();
  // console.log(query[index])
  client.query(query[index], (err, res) => {
    if (err) {
      console.log(err)
      client.end();
      return
    } else {
      console.log(res)
    }
    client.end();
    run (index + 1)
  });
}


var query = [
`CREATE TYPE copyType AS ENUM ('REFERENCE', 'BORROWABLE', 'LENT');`,

`CREATE TYPE genderType AS ENUM ('F', 'M');`,

`CREATE TYPE roleType AS ENUM ('LIBRARIAN', 'CUSTOMER');`,

`CREATE TYPE currentBorrow AS ENUM ('REGISTERED', 'ACTIVE', 'RETURNED', 'OVERDUE');`,

`CREATE TABLE book (
bookNumber varchar(6) NOT NULL PRIMARY KEY,
title varchar(256) NOT NULL,
publisher varchar(256) NOT NULL,
ISBN varchar(11) NOT NULL,
classification varchar(256) NOT NULL,
author varchar(256) NOT NULL
);`,

`CREATE TABLE copy (
copyNumber varchar(8) NOT NULL PRIMARY KEY,
bookNumber varchar(6) NOT NULL REFERENCES book (bookNumber) ON DELETE CASCADE,
price float NOT NULL,
type copyType NOT NULL
CHECK (price >= 0)
);`,


`CREATE TABLE users (
username varchar(30) NOT NULL PRIMARY KEY,
password varchar(30) NOT NULL,
fullName varchar(100) NOT NULL,
email varchar(100) NOT NULL,
gender genderType NOT NULL,
contact varchar(100) NOT NULL,
studyPeriod varchar(100) DEFAULT NULL,
studentId varchar(8) DEFAULT NULL,
role roleType NOT NULL
);`,

`CREATE TABLE borrowinfo (
borrowId SERIAL NOT NULL PRIMARY KEY,
username varchar(30) NOT NULL REFERENCES users (username) ON DELETE CASCADE,
copyNumber varchar(8) NOT NULL REFERENCES copy (copyNumber) ON DELETE CASCADE,
current currentBorrow NOT NULL,
borrowDate date NOT NULL,
returnDate date NOT NULL
);`,

`INSERT INTO book (bookNumber, title, publisher, ISBN, classification, author) VALUES
('SC0001', 'Science 101', 'Shortmans', '71448', 'Science', 'Nguyen Quoc Huy');`,

`INSERT INTO copy (copyNumber, bookNumber, price, type) VALUES
('SC000101', 'SC0001', 50000, 'REFERENCE'),
('SC000102', 'SC0001', 50000, 'BORROWABLE');`,

`INSERT INTO users (username, password, fullName, email, gender, contact, studyPeriod, studentId, role) VALUES
('customer1', 'customer1', 'Nguyen Quoc Huy', 'customer1@gmail.com', 'M', 'Ha Noi', '2014-2019', '20141976', 'CUSTOMER'),
('librarian1', 'librarian1', 'Chu Quoc Hung', 'librarian1@gmail.com', 'M', 'Ha Noi', NULL, NULL, 'LIBRARIAN');`,


]

run(0)
