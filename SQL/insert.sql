-- Inserting records into a table

Insert 
  Into students (stu_id, stu_first_name, stu_last_name, stu_grade_level)
Values ( 'BTTF2015','Marty', 'McFly', '11')
;

Select *
  From students
 Where stu_id = 'BTTF2015'
 ;
 