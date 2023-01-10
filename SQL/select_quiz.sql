-- =================================================================================================
-- SQL SELECT Quiz
--
-- Each question is worth 3 points for a total of 24 possible points. The bonus question is also
-- worth 3 points.
-- =================================================================================================

-- *************************************************************************************************
-- #1: Write a query to return the homeroom number, first name, last name, and gender of
--     all active students in first grade; sort the results by homeroom, last name, first name.
-- *************************************************************************************************

Select distinct stu_status
  From students
;

Select stu_homeroom, stu_first_name, stu_last_name, stu_gender
  From students
 Where stu_grade_level = 01 AND stu_status = 'Active'
 Order By stu_homeroom, stu_last_name, stu_first_name
 ;

-- *************************************************************************************************
-- #2: Update the query from question 1 to include each student's school's name as the
--     first column; sort the results first by the school name than all the other sort fields
--     listed in question 1.
-- *************************************************************************************************

Select skl_name, stu_homeroom, stu_first_name, stu_last_name, stu_gender
  From students
  Join schools ON stu_skl_id = skl_id
 Where stu_grade_level = 01 AND stu_status = 'Active'
 Order By skl_name, stu_homeroom, stu_last_name, stu_first_name
 ;

-- *************************************************************************************************
-- #3: Write a query to find the number of active students in homeroom 04 at Hancock Elementary
--     School.
-- *************************************************************************************************

Select COUNT(*) 
  From students
  Join schools ON stu_skl_id = skl_id
 Where stu_homeroom = '04' AND stu_status = 'Active' AND  skl_name = 'Hancock Elementary School'
 ;

-- *************************************************************************************************
-- #4: Write a query to find the first and last name of the homeroom teacher for the students in
--     question 3.
-- *************************************************************************************************

Select tch_first_name, tch_last_name
  From teachers
  Join schools ON tch_skl_id = skl_id
 Where tch_homeroom = 04  AND  skl_name = 'Hancock Elementary School'
 ;

-- *************************************************************************************************
-- #5: Write a query to list the active students at Washington High School who have either Kristen
--     McDonnell or Laura Giordano as a guidance counselor. Show columns for: counselor, grade
--     level, first name, and last name; sort the results by counselor, grade level, last name,
--     first name.
-- *************************************************************************************************

Select stu_counselor, stu_grade_level, stu_first_name, stu_last_name
  From students
  Join schools ON stu_skl_id = skl_id
 Where skl_name = 'Washington High School' AND stu_status = 'Active' AND stu_counselor in ('McDonnell, Kristen' ,'Giordano, Laura')
 Order By skl_name, stu_homeroom, stu_last_name, stu_first_name
 ;

-- *************************************************************************************************
-- #6: Write a query to list the transcript records for student Grace Brewer since 2016. Show
--     columns for the school year, course name, final grade, and credits; sort the results by
--     school year and course name.
-- *************************************************************************************************

Select trn_school_year, trn_course, trn_final, trn_credit
  From transcripts
  Join students ON stu_id = trn_stu_id
 Where stu_first_name = 'Grace' AND stu_last_name = 'Brewer' AND trn_school_year > 2015
 Order By trn_school_year, trn_course
 ;

-- *************************************************************************************************
-- #7: Write a query to list the classes taught by Catherine Bennett (exclude any courses named
--     'DST'). Show the course name, section number, meeting times, and room number; sort the
--     results by meeting time.
-- *************************************************************************************************

Select cls_course, cls_section, cls_meeting_times, cls_room
  From classes
  Join teachers ON cls_tch_id = tch_id
 Where tch_first_name = 'Catherine' AND tch_last_name = 'Bennett' AND cls_course != 'DST'
 Order By cls_meeting_times
 ;
 
-- *************************************************************************************************
-- BONUS: Write a query to list the rosters for each of Catherine Bennett's classes. Show the
--        course name, section number, and the student's first/last names. Sort the results by
--        those same columns.
-- *************************************************************************************************

Select cls_course AS 'Course', cls_section AS 'Section', cls_enrollment_total AS 'Count'
  From classes
  Join teachers ON cls_tch_id = tch_id
 Where tch_first_name = 'Catherine' AND tch_last_name = 'Bennett' AND cls_course != 'DST'
 Order By cls_enrollment_total DESC
 ;