
alter table audit 
add constraint fk_audit_user foreign key(userid) references dbuser(id);



alter table jobapplication
add constraint fk_jobapplication_graduate foreign key(graduate) references graduate(id);

alter table jobapplication
add constraint fk_jobapplication_company foreign key(company) references company(id);

alter table jobapplication
add constraint fk_jobapplication_area foreign key(area) references area(id);



alter table graduatecareer
add constraint fk_graduate_career_period foreign key(period) references academicperiod(id);

alter table graduatecareer
add constraint fk_graduate_career_faculty foreign key(faculty) references faculty(id);

alter table graduatecareer
add constraint fk_graduate_career_career foreign key(career) references career(id);

alter table graduatecareer
add constraint fk_graduate_career_graduated foreign key(graduated) references graduate(id);