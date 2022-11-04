
 SET datestyle = dmy;
create table users (
	user_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
	username VARCHAR(50) UNIQUE NOT NULL,
	password VARCHAR(200) NOT NULL,
	email VARCHAR(50) UNIQUE NOT NULL,
	name VARCHAR(50)NOT NULL,
	birthday DATE NOT NULL,
	location VARCHAR(50) NOT NULL,
	city VARCHAR(50) NOT NULL,
	sex_identity VARCHAR(50) NOT NULL,
	sex_pref VARCHAR(50) NOT NULL,
	racial_pref VARCHAR(50) NOT NULL,
	meeting_int VARCHAR(23) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL,
	updated_at TIMESTAMPTZ NOT NULL,
	hobby TEXT [],
	profile_pics TEXT []
);
insert into users (username, password, email, name, birthday, location, city, sex_identity, sex_pref, racial_pref, meeting_int, created_at, updated_at,hobby,profile_pics) values ('mhusselbee0', '6362b745fc13ae547f000000', 'mgiovanizio0@addtoany.com', 'Marcie', '11/09/1996', 'Portugal', 'Vinha', 'Transsexual', 'Cisgender Man', 'Honduran', 'Short-term relationship', '2021-01-22T20:12:37Z', '2019-06-15T23:45:31Z',ARRAY['Reading','Play Computer Games'],ARRAY['http://dummyimage.com/166x100.png/dddddd/000000']);
insert into users (username, password, email, name, birthday, location, city, sex_identity, sex_pref, racial_pref, meeting_int, created_at, updated_at,hobby,profile_pics) values ('oreams1', '6362b745fc13ae547f000001', 'obrill1@vinaora.com', 'Octavius', '12/05/1992', 'Indonesia', 'Penanggapan', 'Transsexual', 'Transsexual', 'Polynesian', 'Friend', '2018-04-27T06:34:58Z', '2021-01-22T15:59:14Z',ARRAY['Gardening','Reading'],ARRAY['http://dummyimage.com/166x100.png/dddddd/000000']);
insert into users (username, password, email, name, birthday, location, city, sex_identity, sex_pref, racial_pref, meeting_int, created_at, updated_at,hobby,profile_pics) values ('bjendas2', '6362b745fc13ae547f000002', 'bcoules2@mac.com', 'Benny', '20/12/1997', 'China', 'Baoshui', 'Transgender Woman', 'Gender Nonconforming', 'Shoshone', 'Friend', '2019-10-18T16:08:42Z', '2018-09-27T10:06:19Z',ARRAY['Badminton','Exercise'],ARRAY['http://dummyimage.com/166x100.png/dddddd/000000']);
insert into users (username, password, email, name, birthday, location, city, sex_identity, sex_pref, racial_pref, meeting_int, created_at, updated_at,hobby,profile_pics) values ('qlutsch3', '6362b745fc13ae547f000003', 'qstuckford3@bing.com', 'Querida', '24/04/2000', 'China', 'Sujitan', 'Transgender Person', 'Transmasculine', 'Central American', 'ONS', '2021-03-30T20:43:05Z', '2019-01-03T13:30:09Z',ARRAY['Reading','Play Computer Games','Badminton','Travel','Drink a coffee','Sleep','Walking','Gardening','Exercise','Play Board Games'],ARRAY['http://dummyimage.com/166x100.png/dddddd/000000']);
insert into users (username, password, email, name, birthday, location, city, sex_identity, sex_pref, racial_pref, meeting_int, created_at, updated_at,hobby,profile_pics) values ('laumerle4', '6362b745fc13ae547f000004', 'lfurnival4@upenn.edu', 'Lucina', '13/06/1995', 'Russia', 'Solnechnyy', 'Agender', 'Transgender Person', 'Chamorro', 'Long-term relationship', '2018-11-11T20:03:25Z', '2020-02-04T03:44:47Z',ARRAY['Drink a coffee', 'Sleep','Walking','Gardening','Exercise','Play Board Games'],ARRAY['http://dummyimage.com/166x100.png/dddddd/000000']);
insert into users (username, password, email, name, birthday, location, city, sex_identity, sex_pref, racial_pref, meeting_int, created_at, updated_at,hobby,profile_pics) values ('rdurrant5', '6362b745fc13ae547f000005', 'rcowlam5@uiuc.edu', 'Raviv', '25/07/1997', 'Portugal', 'Carvalhais', 'Non-binary', 'Cis Woman', 'Dominican (Dominican Republic)', 'Friend', '2019-11-08T23:29:40Z', '2018-04-07T16:43:15Z',ARRAY['Sleep','Walking'],ARRAY['http://dummyimage.com/166x100.png/dddddd/000000']);
insert into users (username, password, email, name, birthday, location, city, sex_identity, sex_pref, racial_pref, meeting_int, created_at, updated_at,hobby,profile_pics) values ('ghof6', '6362b745fc13ae547f000006', 'gastling6@alibaba.com', 'Genvieve', '14/08/1998', 'Indonesia', 'Soko', 'Transgender Woman', 'Androgyne', 'Filipino', 'ONS', '2018-08-19T12:44:20Z', '2021-01-08T12:04:18Z',ARRAY['Exercise','Play Board Games'],ARRAY['http://dummyimage.com/166x100.png/dddddd/000000']);
insert into users (username, password, email, name, birthday, location, city, sex_identity, sex_pref, racial_pref, meeting_int, created_at, updated_at,hobby,profile_pics) values ('gmcgready7', '6362b745fc13ae547f000007', 'gschrieves7@wisc.edu', 'Guendolen', '21/06/1991', 'Indonesia', 'Baumata', 'Transsexual Male', 'Transsexual Person', 'Chinese', 'Long-term relationship', '2018-01-15T00:00:17Z', '2021-06-30T04:40:14Z',ARRAY['Reading','Drink a coffee','Sleep','Walking','Gardening','Exercise','Play Board Games'],ARRAY['http://dummyimage.com/166x100.png/dddddd/000000']);
insert into users (username, password, email, name, birthday, location, city, sex_identity, sex_pref, racial_pref, meeting_int, created_at, updated_at,hobby,profile_pics) values ('iboon8', '6362b745fc13ae547f000008', 'igerrels8@amazonaws.com', 'Inesita', '17/04/1993', 'Brazil', 'Braço do Norte', 'Agender', 'Transgender Person', 'Paiute', 'FWB', '2018-04-04T22:35:54Z', '2018-08-06T21:06:46Z',ARRAY['Play Computer Games','Badminton','Travel','Drink a coffee','Sleep','Walking','Gardening','Exercise','Play Board Games'],ARRAY['http://dummyimage.com/166x100.png/dddddd/000000']);
insert into users (username, password, email, name, birthday, location, city, sex_identity, sex_pref, racial_pref, meeting_int, created_at, updated_at,hobby,profile_pics) values ('hburk9', '6362b745fc13ae547f000009', 'hrubenczyk9@ca.gov', 'Hoebart', '04/05/1990', 'Brazil', 'Iracemápolis', 'FTM', 'Gender Questioning', 'Potawatomi', 'Friend', '2019-12-28T14:22:37Z', '2019-05-21T05:33:59Z',ARRAY['Reading','Play Computer Games','Badminton','Travel','Drink a coffee','Play Board Games'],ARRAY['http://dummyimage.com/166x100.png/dddddd/000000']);


ALTER TABLE users
ADD about_me varchar(255);