USE dpwparkpermit; 
TRUNCATE park;
TRUNCATE park_areas;


-- LOCATION TABLE
INSERT INTO park (par_id, par_name) VALUE (1,'Briggs Field');
INSERT INTO park (par_id, par_name) VALUE (2,'Ceurvels Field');
INSERT INTO park (par_id, par_name) VALUE (3,'Calvin J. Ellis Field');
INSERT INTO park (par_id, par_name) VALUE (4,'Forge Pond Park');
INSERT INTO park (par_id, par_name) VALUE (5,'Amos Gallant Field');
INSERT INTO park (par_id, par_name) VALUE (6,'B. Everett Hall');

-- FIELDS TABLE
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (1, 'T-Ball');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (1, 'Other');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (2, 'Full-size Baseball');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (2, 'Little League');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (2, 'Softball');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (2, 'Lacrosse');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (2, 'Soccer');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (2, 'Basketball');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (2, 'Other');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (3, 'Little League #1');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (3, 'Little League #2');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (3, 'Little League #3');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (3, 'Field #4');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (3, 'Soccer');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (3, 'Other');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (4, 'Little League #1');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (4, 'Little League #2');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (4, 'Little League #3');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (4, 'Softball #4');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (4, 'Softball #5');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (4, 'Softball #6');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (4, 'Multi-Use Soccer');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (4, 'Multi-Use Lacrosse');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (4, 'Multi-Use Other');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (4, 'Pavilion');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (4, 'Kitchen & Pavilion');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (4, 'Other');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (5, 'Other');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (6, 'Full-Size Basketball');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (6, 'Little League [Front Field Only]');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (6, 'Basketball 1');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (6, 'Basket Ball 2');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (6, 'Football');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (6, 'Street Hockey Rink');
INSERT INTO park_areas (pka_par_id, pka_name) VALUE (6, 'Other');