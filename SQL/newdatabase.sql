Create DATABASE matts_data
;

Use matts_data
;

CREATE TABLE teams (
  tms_id INT NOT NULL AUTO_INCREMENT,
  tms_name VARCHAR(45) NOT NULL,
  tms_city VARCHAR(45) NOT NULL,
  tms_coach VARCHAR(100) NULL,
  tms_logo BLOB NULL,
  PRIMARY KEY (tms_id),
  UNIQUE INDEX tms_name_UNIQUE (tms_name ASC) VISIBLE)
;

Insert into teams (tms_city, tms_name) Value ('New York', 'Yankees');
Insert into teams (tms_city, tms_name) Value ('Boston', 'Red Sox');
Insert into teams (tms_city, tms_name) Value ('Toronto', 'Blue Jays');
Insert into teams (tms_city, tms_name) Value ('Baltimore', 'Orioles');
Insert into teams (tms_city, tms_name) Value ('Tampa Bay', 'Rays');

Insert into players (pla_tms_id, pla_first_name, pla_last_name, pla_number, pla_dob) Value (1, 'Aaron', 'Judge', 99, '2000-01-01 00:00:00') ;
Insert into players (pla_tms_id, pla_first_name, pla_last_name, pla_number, pla_dob) Value (1, 'Gerrit', 'Cole', 45, '2000-01-01 00:00:00') ;
Insert into players (pla_tms_id, pla_first_name, pla_last_name, pla_number, pla_dob) Value (2, 'Rafael', 'Devers', 11, '2000-01-01 00:00:00') ;
Insert into players (pla_tms_id, pla_first_name, pla_last_name, pla_number, pla_dob) Value (2, 'Chris', 'Sale', 42, '2000-01-01 00:00:00') ;
Insert into players (pla_tms_id, pla_first_name, pla_last_name, pla_number, pla_dob) Value (3, 'Bo', 'Bichette', 12, '2000-01-01 00:00:00') ;
Insert into players (pla_tms_id, pla_first_name, pla_last_name, pla_number, pla_dob) Value (1, 'Matt', 'Collins', 1, '2006-06-18 23:54:00') ;

Select * From teams;
Select * From players;

Update players
	Set pla_league_rank = 6
    Where pla_id = 6
;

CREATE TABLE players (
  pla_id INT NOT NULL AUTO_INCREMENT,
  pla_tms_id INT NOT NULL,
  pla_first_name VARCHAR(50) NOT NULL,
  pla_last_name VARCHAR(50) NOT NULL,
  pla_dob DATETIME NOT NULL,
  pla_league_rank INT,
  pla_number INT NOT NULL,
  PRIMARY KEY (pla_id),
  INDEX pla_tms_id_FK (pla_tms_id ASC) VISIBLE)
;

Select *
  From teams
  Left Outer Join players ON tms_id = pla_tms_id
  Where pla_id IS NULL
;



