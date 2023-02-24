---
title: "SQL"
description: "This section contains notes on SQL databases."
---

The ***databases*** that use the ***SQL*** syntax are called ***Relational databases***.
Popular examples are:

- ***MySQL***
- ***PostgreSQL***
- ***SQLite***

**Relational *databases*** use ***SQL*** to read, create, update and delete data.

The name comes from the way that data is stored in multiple, related tables. Within the tables, data is stored in rows and columns.

What is ***SQL***?

***SQL*** stands for ***S*tructured *Q*uery *L*anguage**, as it is the special purpose language for querying data in **Relational *Databases***.

***MySQL***, ***PostgreSQL***, ***SQLite*** all use ***SQL*** for querying with slight syntax differences.

## Basic SQL commands

- ### Select

  ```sql
  SELECT * FROM table1;
  SELECT column1 FROM table1;
  SELECT column1, column2 FROM table1;
  ```

- ### Update

  ```sql
  UPDATE table1
  SET column1 = value1, column2 = value2, ...
  WHERE condition;
  ```

- ### Delete

  ```sql
  DELETE FROM table1 WHERE condition;
  ```

- ### Insert

  ```sql
  -- specific columns
  INSERT INTO table1 (column1, column2, column3, ...)
  VALUES (value1, value2, value3, ...);

  -- all columns
  INSERT INTO table1
  VALUES (value1, value2, value3, ...);
  ```

- ### Create database

  ```sql
  CREATE DATABASE database1;
  ```

- ### Drop database

  ```sql
  DROP DATABASE database1;
  ```

- ### Create table

  ```sql
  CREATE TABLE table1;
  ```

- ### Alter table

  ```sql
  ALTER TABLE table1
  ADD column1 datatype;

  ALTER TABLE table1
  DROP COLUMN column1;
  ```

- ### Drop table

  ```sql
  DROP TABLE table1;
  ```

## SQL JOIN

As the name implies, **relational** ***databases*** have related data. In other words, we can join our tables to present these related data together.

- (**INNER**) **JOIN**

  Returns records that have matching values in both tables.
- **LEFT** (**OUTER**) **JOIN**

  Returns all records from the left table, and the matched records from the right table.
- **RIGHT** (**OUTER**) **JOIN**

  Returns all records from the right table, and the matched records from the left table.
- **FULL** (**OUTER**) **JOIN**

  Returns all records when there is a match in either left or right table.

## Useful snippets

- Functional index

  ```sql
  SELECT * FROM user_table WHERE LOWER(email) = 'example@gmail.com';

  -- PostgreSQL
  CREATE INDEX email_lower ON user_table (LOWER(email));

  -- MySQL
  CREATE INDEX email_lower ON user_table ((LOWER(email)));
  ```

  Now, the same expression will be

  ```sql
  SELECT * FROM user_table WHERE email_lower = 'example@gmail.com';
  ```

## Resources

- [w3schools (SQL)](https://www.w3schools.com/sql/default.asp)
- MySQL
  - [MySQL documentation](https://dev.mysql.com/doc/)
  - [MySQL cheat sheet](http://g2pc1.bu.edu/~qzpeng/manual/MySQL%20Commands.htm)
  - [C\# and MySQL (ZetCode)](https://zetcode.com/csharp/mysql/)
- SQLite
  - [SQLite documentation](https://www.sqlite.org/docs.html)
  - [SQLite cheat sheet](https://www.sqlitetutorial.net/sqlite-cheat-sheet/)
  - [C\# and SQLite (ZetCode)](https://zetcode.com/csharp/sqlite/)
- PostgreSQL
  - [PostgreSQL documentation](https://www.postgresql.org/docs/)
  - [PostgreSQL cheat sheet](https://postgrescheatsheet.com)
  - [C\# and PostgreSQL (ZetCode)](https://zetcode.com/csharp/postgresql/)
