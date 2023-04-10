Select *
  From tickets
;

SELECT * FROM tickets WHERE tck_id = 1;

INSERT INTO tickets (tck_issue, tck_priority, tck_email)
VALUES ('GUI broken', 2, 'jdemoin@goofy.net')
;
Delete from tickets
;

ALTER USER 'root'@'localhost' IDENTIFIED WITH
mysql_native_password
BY 'password';

INSERT INTO tickets (tck_issue, tck_priority, tck_email)VALUES ('Cole didn\'t submit his work', 10, 'cspence@effecient.org')
;

UPDATE tickets
Set tck_id = 1
Where tck_id = 4
;