DROP DATABASE IF EXISTS dpwparkpermit;
CREATE SCHEMA `dpwparkpermit`;
USE dpwparkpermit;

CREATE TABLE `applications` (
  `app_id` int NOT NULL AUTO_INCREMENT,
  `app_cus_id` int NOT NULL,
  `app_time_enter` datetime DEFAULT NULL,
  `app_time_exit` datetime DEFAULT NULL,
  `app_time_start` datetime DEFAULT NULL,
  `app_time_end` datetime DEFAULT NULL,
  `app_date` date NOT NULL,
  `app_description` VARCHAR(200) NULL,
  `app_people` INT DEFAULT NULL,
  `app_registrants` INT DEFAULT NULL,
  `app_teams` INT DEFAULT NULL,
  PRIMARY KEY (`app_id`)
);

CREATE TABLE `customers` (
  `cus_id` INT NOT NULL AUTO_INCREMENT,
  `cus_tier` INT DEFAULT NULL,
  `cus_first_name` VARCHAR(45) NOT NULL,
  `cus_last_name` VARCHAR(45) NOT NULL,
  `cus_organization` VARCHAR(100) DEFAULT NULL,
  `cus_address` VARCHAR(100) DEFAULT NULL,
  `cus_phone` VARCHAR(45) DEFAULT NULL,
  `cus_email` VARCHAR(100) DEFAULT NULL,
  PRIMARY KEY (`cus_id`)
  );

CREATE TABLE `park_areas` (
  `pka_id` int NOT NULL AUTO_INCREMENT,
  `pka_par_id` int NOT NULL,
  `pka_name` varchar(45) NOT NULL,
  PRIMARY KEY (`pka_id`)
);

CREATE TABLE `park` (
  `par_id` int NOT NULL AUTO_INCREMENT,
  `par_name` varchar(100) NOT NULL,
  PRIMARY KEY (`par_id`)
);

CREATE TABLE `application_park_area` (
  `apa_id` int NOT NULL AUTO_INCREMENT,
  `apa_app_id` varchar(45) DEFAULT NULL,
  `apa_pka_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`apa_id`)
);