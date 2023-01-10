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

Select *
  From attendance
  Join students
 Where att_stu_id Not In stu_id
 ;



 