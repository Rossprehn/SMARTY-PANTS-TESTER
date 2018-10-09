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
