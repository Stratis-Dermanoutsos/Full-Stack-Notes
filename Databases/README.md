# Databases

- [**Notes**](#databases---notes)
- [**Resources**](#databases---resources)

## Databases - Notes

### Databases types

There are many types of ***Databases*** but the 2 main ones are:

- **Relational *databases*** (eg. ***MySQL***, ***PostgreSQL***, ***SQLite***)
- **NoSQL *databases*** (eg. ***MongoDB***)

### Relational databases

The name comes from the way that data is stored in multiple, related tables. Within the tables, data is stored in rows and columns.

**Relational *databases*** use ***SQL*** to read, create, update and delete data.

What is ***SQL***?

***SQL*** stands for ***S*tructured *Q*uery *L*anguage**, as it is the special purpose language for querying data in **Relational *Databases***.

***MySQL***, ***PostgreSQL***, ***SQLite*** all use ***SQL*** for querying with slight syntax differences.

#### Basic SQL commands

- *Get* data

  ```sql
  SELECT * FROM table1;
  SELECT column1 FROM table1;
  SELECT column1, column2 FROM table1;
  ```

- *Update* data

  ```sql
  UPDATE table1
  SET column1 = value1, column2 = value2, ...
  WHERE condition;
  ```

- *Delete* data

  ```sql
  DELETE FROM table1 WHERE condition;
  ```

- *Insert* data

  ```sql
  -- specific columns
  INSERT INTO table1 (column1, column2, column3, ...)
  VALUES (value1, value2, value3, ...);

  -- all columns
  INSERT INTO table1
  VALUES (value1, value2, value3, ...);
  ```

- *Create **database***

  ```sql
  CREATE DATABASE database1;
  ```

- *Delete **database***

  ```sql
  DROP DATABASE database1;
  ```

- *Create* table

  ```sql
  CREATE TABLE table1;
  ```

- *Modify* table

  ```sql
  ALTER TABLE table1
  ADD column1 datatype;

  ALTER TABLE table1
  DROP COLUMN column1;
  ```

- *Delete* table

  ```sql
  DROP DATABASE table1;
  ```

#### SQL JOIN

As the name implies, **relational** ***databases*** have related data. In other words, we can join our tables to present these related data together.

- (**INNER**) **JOIN**

  Returns records that have matching values in both tables.
- **LEFT** (**OUTER**) **JOIN**

  Returns all records from the left table, and the matched records from the right table.
- **RIGHT** (**OUTER**) **JOIN**

  Returns all records from the right table, and the matched records from the left table.
- **FULL** (**OUTER**) **JOIN**

  Returns all records when there is a match in either left or right table.

#### Useful snippets

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

### NoSQL databases

**NoSQL** is a broad category that includes any ***database*** that doesn???t use SQL as its primary data access language. These types of ***databases*** are also sometimes referred to as *non-relational **databases***.

Unlike in relational ***databases***, data in a **NoSQL** ***database*** doesn???t have to conform to a pre-defined schema, so these types of ***databases*** are great for organizations seeking to store unstructured or semi-structured data.

One advantage of **NoSQL *databases*** is that developers can make changes to the ***database*** on the fly, without affecting applications that are using the ***database***.

#### MongoDB

Characteristics:

- *Document-oriented*
- ***NoSQL***
- *General Purpose*
- *Flexible* (It offers the ability to make changes quickly and easily)
- *Scalable*
- *Secure* (Authentication and Authorization with a ***MongoDB*** are needed)
- *JSON* (Data is stored in documents, in a key-value pairs format)

Basic commands:

- Show ***databases***

  ```bash
  show dbs;
  ```

- Choose ***database*** to work on (it creates one, if it does not exist)

  ```bash
  use name1;
  use testdb1; # example
  ```

  Notice that the newly created ***database*** is not shown in the list generated by the previous command yet. To solve this, simply create a **Collection**.
- Show currently working ***database***

  ```bash
  db;
  ```

- Create new **collection**

  ```bash
  db.createCollection('name1');
  db.createCollection('collection1'); # example
  ```

- Show **collections**

  ```bash
  show collections;
  ```

- Insert data to **collection**

  ```bash
  db.collection1.insert({key1: 'value1', ...});
  db.collection1.insert({name: 'Stratis'}); # example
  ```

  If the specified **collection** does not exist, it is automatically created. (NOT recommended)
- Show data

  ```bash
  db.collection1.find();
  ```

- Update data

  ```bash
  db.collection1.update({query1}, {update1}[, {options1}]);
  db.collection1.update({ name: 'Mitsos' }, {name: 'Mitsos', age: 23, height: 1.50}); # Where name = 'Mitsos', set age to 23 and height to 1.50
  ```

- Remove data

  ```bash
  db.collection1.remove({query1}, [justOne: true|false]);

  # Examples
  db.collection2.remove({}) # Remove all data from collection2
  db.collection2.remove( { age: { $gt: 10 } } ) # Remove all the documents from collection2 where age is greater than 10
  db.collection2.remove( { age: { $gt: 10 } }, true ) # Remove the first document from collection2 where age is greater than 10
  ```

### Basic terminology

| SQL | NoSQL |
| ----- | ----- |
| database | database |
| table | collection |
| row | document |

## Databases - Resources

- [w3schools (SQL)](https://www.w3schools.com/sql/default.asp)
- MySQL
  - [MySQL documentation](https://dev.mysql.com/doc/)
  - [MySQL cheat sheet](http://g2pc1.bu.edu/~qzpeng/manual/MySQL%20Commands.htm)
  - [C# and MySQL (ZetCode)](https://zetcode.com/csharp/mysql/)
- SQLite
  - [SQLite documentation](https://www.sqlite.org/docs.html)
  - [SQLite cheat sheet](https://www.sqlitetutorial.net/sqlite-cheat-sheet/)
  - [C# and SQLite (ZetCode)](https://zetcode.com/csharp/sqlite/)
- PostgreSQL
  - [PostgreSQL documentation](https://www.postgresql.org/docs/)
  - [PostgreSQL cheat sheet](https://postgrescheatsheet.com)
  - [C# and PostgreSQL (ZetCode)](https://zetcode.com/csharp/postgresql/)
- MongoDB
  - [MongoDB documentation](https://docs.mongodb.com)
  - [MongoDB Cheat Sheet](https://www.mongodb.com/developer/quickstart/cheat-sheet/)
  - [Simplilearn video (tutorial)](https://youtu.be/lBBtq3Oawqw)
  - [C# and MongoDB (Official)](https://www.mongodb.com/blog/post/quick-start-c-sharp-and-mongodb-starting-and-setup)
  - [C# and MongoDB (ZetCode)](https://zetcode.com/csharp/mongodb/)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-Notes#full-stack-notes) or [??? Back to top](#databases)
