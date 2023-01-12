-- This is file for testing DELETE states

Select *
  From students
 Where stu_first_name LIKE 'Matt%'
;

Select *
  From students
 Where stu_id = 'stdX2000001008'
;

-- Delete the student itself

Delete
  From students
 Where stu_id = 'stdX2000001008'
;

-- Delete all children and ELIMINATE ALL orphans

Select *
  From attendance
 Where att_stu_id = 'stdX2000001008'
;

Delete
  From attendance
 Where att_stu_id = 'stdX2000001008'
;

Select *
  From schedules
 Where ssc_stu_id = 'stdX2000001008'
;

Delete
  From schedules
 Where ssc_stu_id = 'stdX2000001008'
;

Select *
  From transcripts
 Where trn_stu_id = 'stdX2000001008'
;

Delete
  From transcripts
 Where trn_stu_id = 'stdX2000001008'
;

-- Scanning for unacompanied children

Select stu_id, stu_last_name, stu_first_name, count(*)
  From students
  Left Outer Join attendance ON stu_id = att_stu_id
 Where att_stu_id IS null
;

Select stu_id, stu_last_name, stu_first_name
  From students
  Left Outer Join attendance ON stu_id = att_stu_id
 Where stu_grade_level = '12' AND stu_last_name LIKE 'Le%' AND att_stu_id IS null
;


Select *
  From attendance
  Left Outer Join students ON stu_id = att_stu_id
  Where stu_id IS null
;

Select *
  From attendance
  Join students On Not stu_id = att_stu_id
;
 
 -- 0 Orphans Detected
 -- Eliminating Parents to create Orphans
 
 Delete 
   From students
  Where stu_last_name LIKE 'Z%'
;

Delete attendance
  From attendance
  Left Outer Join students ON stu_id = att_stu_id
  Where stu_id IS null
;

-- IN op

Select * 
  From students
 Where stu_skl_id IN(
Select skl_id 
  From schools
 Where skl_name LIKE '%Elementary%'
 )
;

-- Pre-termination SELECT statement
Select *
  From attendance
 Where att_stu_id NOT IN(
 Select stu_id
   From students
)
;

-- Eliminate all Orphans previously created
Delete
  From attendance
 Where att_stu_id NOT IN(
 Select stu_id
   From students
)
;
