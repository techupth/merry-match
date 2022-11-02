 SET datestyle = dmy;
create table users (
  user_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
	username VARCHAR(50) UNIQUE NOT NULL,
	password VARCHAR(50) NOT NULL,
	email VARCHAR(50) UNIQUE NOT NULL,
	name VARCHAR(50) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL,
	birthday DATE NOT NULL,
	location VARCHAR(50) NOT NULL,
	city VARCHAR(50) NOT NULL,
	sex_identity VARCHAR(50) NOT NULL,
	sex_pref VARCHAR(50) NOT NULL,
	racial_pref VARCHAR(50) NOT NULL,
	meeting_int VARCHAR(23) NOT NULL,
	about_me TEXT,
	hobby TEXT []
);
insert into users (username, password, email, name, created_at, birthday, location, city, sex_identity, sex_pref, racial_pref, meeting_int, about_me,hobby) values ('hcharlot0', '63620dfcfc13ae6f7400028d', 'hstallebrass0@example.com', 'Hagan', '2021-11-11T16:12:00Z','26/08/1991', 'China', 'Xiatuanpu', 'Cisgender Female', 'Trans Male', 'Ute', 'Short-term relationship', 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',ARRAY ['Reading','Play Computer Games']);
insert into users (username, password, email, name, created_at, birthday, location, city, sex_identity, sex_pref, racial_pref, meeting_int, about_me,hobby) values ('odunican1', '63620dfcfc13ae6f7400028e', 'omckilroe1@earthlink.net', 'Obadias', '2022-09-14T14:46:12Z', '10/04/1999', 'Cameroon', 'Edéa', 'Cisgender Woman', 'Pangender', 'Aleut', 'FWB', 'Cras non velit nec nisi vulputate nonummy.',ARRAY['Gardening','Reading']);
insert into users (username, password, email, name, created_at, birthday, location, city, sex_identity, sex_pref, racial_pref, meeting_int, about_me,hobby) values ('wbett2', '63620dfcfc13ae6f7400028f', 'wcossons2@devhub.com', 'Wittie', '2022-01-08T02:41:52Z', '17/07/1996', 'Mongolia', 'Uujim', 'Cis Male', 'Cisgender Female', 'Mexican', 'FWB', 'Donec ut dolor.',ARRAY['Badminton','Exercise']);
insert into users (username, password, email, name, created_at, birthday, location, city, sex_identity, sex_pref, racial_pref, meeting_int, about_me,hobby) values ('cdales3', '63620dfcfc13ae6f74000290', 'csimoneschi3@dagondesign.com', 'Candace', '2022-10-07T03:06:12Z', '28/10/1992', 'Philippines', 'Digkilaan', 'Androgyne', 'Transgender Man', 'Eskimo', 'Long-term relationship', 'Sed ante.',ARRAY['Reading','Play Computer Games','Badminton','Travel','Drink a coffee','Sleep','Walking','Gardening','Exercise','Play Board Games']);
insert into users (username, password, email, name, created_at, birthday, location, city, sex_identity, sex_pref, racial_pref, meeting_int, about_me,hobby) values ('mvalek4', '63620dfcfc13ae6f74000291', 'mfowlston4@go.com', 'Murvyn', '2021-10-26T07:35:50Z', '06/06/1995', 'Brazil', 'Juripiranga', 'Transfeminine', 'Cisgender Male', 'Fijian', 'Long-term relationship', 'Duis mattis egestas metus.',ARRAY['Drink a coffee', 'Sleep','Walking','Gardening','Exercise','Play Board Games']);
insert into users (username, password, email, name, created_at, birthday, location, city, sex_identity, sex_pref, racial_pref, meeting_int, about_me,hobby) values ('lbooeln5', '63620dfcfc13ae6f74000292', 'lpoxon5@dailymotion.com', 'Libbie', '2022-05-07T03:28:46Z', '26/09/1990', 'France', 'Troyes', 'Trans Woman', 'Androgyne', 'Peruvian', 'Long-term relationship', 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',ARRAY['Sleep','Walking']);
insert into users (username, password, email, name, created_at, birthday, location, city, sex_identity, sex_pref, racial_pref, meeting_int, about_me,hobby) values ('smcewan6', '63620dfcfc13ae6f74000293', 'strosdall6@hubpages.com', 'Sherye', '2022-06-21T17:30:50Z', '05/08/1995', 'Nigeria', 'Bassa', 'Trans Person', 'Gender Nonconforming', 'Hmong', 'FWB', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',ARRAY['Exercise','Play Board Game']);
insert into users (username, password, email, name, created_at, birthday, location, city, sex_identity, sex_pref, racial_pref, meeting_int, about_me,hobby) values ('msiddons7', '63620dfcfc13ae6f74000294', 'mgiamelli7@ebay.com', 'Marco', '2022-07-13T19:35:46Z', '06/08/1994', 'Indonesia', 'Wangunsari', 'Trans Woman', 'Transsexual', 'Crow', 'Short-term relationship', 'Praesent blandit lacinia erat.',ARRAY['Reading','Drink a coffee','Sleep','Walking','Gardening','Exercise','Play Board Game']);
insert into users (username, password, email, name, created_at, birthday, location, city, sex_identity, sex_pref, racial_pref, meeting_int, about_me,hobby) values ('oivie8', '63620dfcfc13ae6f74000295', 'oomulderrig8@usnews.com', 'Olav', '2022-07-25T20:45:28Z', '17/04/1993', 'Mexico', 'Benito Juarez', 'Gender Nonconforming', 'Neutrois', 'Seminole', 'Short-term relationship', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',ARRAY['Play Computer Games','Badminton','Travel','Drink a coffee','Sleep','Walking','Gardening','Exercise','Play Board Game']);
insert into users (username, password, email, name, created_at, birthday, location, city, sex_identity, sex_pref, racial_pref, meeting_int, about_me,hobby) values ('tbegbie9', '63620dfcfc13ae6f74000296', 'tcumpsty9@japanpost.jp', 'Tracie', '2022-07-10T21:08:11Z', '21/11/1994', 'Iran', 'Bābol', 'Trans Person', 'Gender Variant', 'Taiwanese', 'FWB', 'Nulla ut erat id mauris vulputate elementum. Nullam varius.',ARRAY['Reading','Play Computer Games','Badminton','Travel','Drink a coffee','Play Board Game']);



