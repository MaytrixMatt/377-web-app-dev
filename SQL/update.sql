Select *
   From teachers 
  Where tch_last_name = 'Bennett' AND tch_first_name = 'Catherine'
 ;
 
 Update teachers
	Set tch_last_name = 'Bennett'
    Where tch_last_name = 'Polk' AND tch_first_name = 'Catherine'
;

Select *
  From schools
;

Update schools
   Set skl_level = 'K-4'
   Where skl_level = 'Elementary'
;

Update schools
   Set skl_level = '5-8'
   Where skl_level = 'Middle'
;

Update schools
   Set skl_level = '9-12'
   Where skl_level = 'High'
;

Update schools
   Set skl_level = 'K-12'
   Where skl_level = 'All levels'
;