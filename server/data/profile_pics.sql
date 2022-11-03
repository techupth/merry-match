create table profile_pics (
profile_pic_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
	user_id INT REFERENCES users(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
	pic_1 VARCHAR(50),
	pic_2 VARCHAR(50),
	pic_3 VARCHAR(50),
	pic_4 VARCHAR(50),
	Pic_5 VARCHAR(50)
);
insert into profile_pics (user_id, pic_1, pic_2, pic_3, pic_4, Pic_5) values (1, 'http://dummyimage.com/127x100.png/ff4444/ffffff', 'http://dummyimage.com/211x100.png/cc0000/ffffff', null, null, null);
insert into profile_pics (user_id, pic_1, pic_2, pic_3, pic_4, Pic_5) values (2, 'http://dummyimage.com/129x100.png/5fa2dd/ffffff', 'http://dummyimage.com/127x100.png/dddddd/000000', null, null, null);
insert into profile_pics (user_id, pic_1, pic_2, pic_3, pic_4, Pic_5) values (3, 'http://dummyimage.com/184x100.png/cc0000/ffffff', 'http://dummyimage.com/214x100.png/ff4444/ffffff', 'http://dummyimage.com/198x100.png/dddddd/000000', 'http://dummyimage.com/189x100.png/cc0000/ffffff', null);
insert into profile_pics (user_id, pic_1, pic_2, pic_3, pic_4, Pic_5) values (4, 'http://dummyimage.com/170x100.png/5fa2dd/ffffff', 'http://dummyimage.com/241x100.png/dddddd/000000', null, null, null);
insert into profile_pics (user_id, pic_1, pic_2, pic_3, pic_4, Pic_5) values (5, 'http://dummyimage.com/114x100.png/ff4444/ffffff', 'http://dummyimage.com/143x100.png/5fa2dd/ffffff', null, null, null);
insert into profile_pics (user_id, pic_1, pic_2, pic_3, pic_4, Pic_5) values (6, 'http://dummyimage.com/164x100.png/5fa2dd/ffffff', 'http://dummyimage.com/128x100.png/dddddd/000000', null, null, null);
insert into profile_pics (user_id, pic_1, pic_2, pic_3, pic_4, Pic_5) values (7, 'http://dummyimage.com/218x100.png/cc0000/ffffff', 'http://dummyimage.com/172x100.png/dddddd/000000', null, null, null);
insert into profile_pics (user_id, pic_1, pic_2, pic_3, pic_4, Pic_5) values (8, 'http://dummyimage.com/192x100.png/cc0000/ffffff', 'http://dummyimage.com/160x100.png/cc0000/ffffff', 'http://dummyimage.com/166x100.png/5fa2dd/ffffff', 'http://dummyimage.com/151x100.png/dddddd/000000', null);
insert into profile_pics (user_id, pic_1, pic_2, pic_3, pic_4, Pic_5) values (9, 'http://dummyimage.com/203x100.png/dddddd/000000', 'http://dummyimage.com/222x100.png/ff4444/ffffff', null, null, null);
insert into profile_pics (user_id, pic_1, pic_2, pic_3, pic_4, Pic_5) values (10, 'http://dummyimage.com/236x100.png/cc0000/ffffff', 'http://dummyimage.com/109x100.png/cc0000/ffffff', null, null, null);
