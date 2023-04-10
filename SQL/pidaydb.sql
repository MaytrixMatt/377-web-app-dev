CREATE DATABASE `piday` DEFAULT CHARSET=latin1;

USE `piday`;

CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `sso_google_id` varchar(100) DEFAULT NULL,
  `display_name` varchar(100) NOT NULL,
  `created` datetime NOT NULL,
  `verified` int NOT NULL DEFAULT '0',
  `verification_hash` varchar(100) DEFAULT NULL,
  `verification_expiration` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `progress` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `year` int(4) NOT NULL,
  `puzzle_states` varchar(500) NOT NULL,
  `completion_time` datetime DEFAULT NULL,
  `genius_ind` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE INDEX `natural_key` (`user_id`, `year`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `puzzle_progress` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `progress_id` int(11) NOT NULL,
  `puzzle_id` int(3) NOT NULL,
  `parameters` varchar(100) DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  `end_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE INDEX `natural_key` (`progress_id`, `puzzle_id`),
  KEY `progress_id` (`progress_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
user