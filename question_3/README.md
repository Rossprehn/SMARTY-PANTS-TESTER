With the test data below, fill in the “???” in the recursive CTE query so that each item in category table is listed with its parents.

https://www.postgresql.org/docs/10/static/queries-with.html
https://www.postgresql.org/docs/10/static/functions-array.html

BEGIN;
CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    parent_id INTEGER REFERENCES category(id) DEFERRABLE,
    name TEXT NOT NULL UNIQUE );
SET CONSTRAINTS ALL DEFERRED;
INSERT INTO category VALUES (1, NULL, 'animal');
INSERT INTO category VALUES (2, NULL, 'mineral');
INSERT INTO category VALUES (3, NULL, 'vegetable');
INSERT INTO category VALUES (4, 1, 'dog');
INSERT INTO category VALUES (5, 1, 'cat');
INSERT INTO category VALUES (6, 4, 'doberman');
INSERT INTO category VALUES (7, 4, 'dachshund');
INSERT INTO category VALUES (8, 3, 'carrot');
INSERT INTO category VALUES (9, 3, 'lettuce');
INSERT INTO category VALUES (10, 11, 'paradox1');
INSERT INTO category VALUES (11, 10, 'paradox2');
SELECT setval('category_id_seq', (select max(id) from category));

WITH RECURSIVE last_run(parent_id, id_list, name_list) AS (
    ???
SELECT id_list, name_list
FROM last_run ???
WHERE ORDER BY id_list;
ROLLBACK;
The output should look like this. The id_list column should be an integer array containing ARRAY[id, parent id, grandparent id, etc]. The name_list column should be a text field containing comma separated names.

 id_list |       name_list        
---------+------------------------
 {1}     | animal
 {2}     | mineral
 {3}     | vegetable
 {4,1}   | dog, animal
 {5,1}   | cat, animal
 {6,4,1} | doberman, dog, animal
 {7,4,1} | dachshund, dog, animal
 {8,3}   | carrot, vegetable
 {9,3}   | lettuce, vegetable
 {10,11} | paradox1, paradox2
 {11,10} | paradox2, paradox1


BEGIN;
CREATE TABLE category (
  id SERIAL PRIMARY KEY,
  parent_id INTEGER REFERENCES category(id) DEFERRABLE,
  name TEXT NOT NULL UNIQUE );
SET CONSTRAINTS ALL DEFERRED;
INSERT INTO category VALUES (1, NULL, 'animal');
INSERT INTO category VALUES (2, NULL, 'mineral');
INSERT INTO category VALUES (3, NULL, 'vegetable');
INSERT INTO category VALUES (4, 1, 'dog');
INSERT INTO category VALUES (5, 1, 'cat');
INSERT INTO category VALUES (6, 4, 'doberman');
INSERT INTO category VALUES (7, 4, 'dachshund');
INSERT INTO category VALUES (8, 3, 'carrot');
INSERT INTO category VALUES (9, 3, 'lettuce');
INSERT INTO category VALUES (10, 11, 'paradox1');
INSERT INTO category VALUES (11, 10, 'paradox2');
SELECT setval('category_id_seq', (select max(id) from category));

WITH RECURSIVE last_run(parent_id, id_list, name_list) AS (
  SELECT parent_id, ARRAY[id] AS id_list, ARRAY[name] AS name_list
  FROM category
  WHERE parent_id IS NULL
  UNION ALL
  SELECT
  	cat.parent_id,
  	array_cat(ARRAY[cat.id], lr.id_list),
  	array_cat(ARRAY[cat.name], lr.name_list)
  FROM last_run lr
  JOIN category cat
  ON cat.parent_id = lr.id_list[1]
  )
SELECT id_list, array_to_string(name_list, ', ')
FROM last_run
WHERE ORDER BY id_list;
ROLLBACK;