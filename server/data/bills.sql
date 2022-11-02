create table bills (
	bill_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
	card_id INT REFERENCES cards(card_id) ON DELETE CASCADE,
	date_paid TIMESTAMPTZ NOT NULL,
	user_id INT REFERENCES users(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
	membership_id INT NOT NULL
);
insert into bills (card_id, date_paid, user_id, membership_id) values (1, '2022-07-20T16:50:19Z', 1, 1);
insert into bills (card_id, date_paid, user_id, membership_id) values (2, '2022-10-03T16:00:13Z', 2, 2);
insert into bills (card_id, date_paid, user_id, membership_id) values (3, '2021-11-08T08:10:15Z', 3, 3);
insert into bills (card_id, date_paid, user_id, membership_id) values (4, '2021-12-11T21:17:15Z', 4, 4);
insert into bills (card_id, date_paid, user_id, membership_id) values (5, '2022-01-14T02:01:02Z', 5, 5);
insert into bills (card_id, date_paid, user_id, membership_id) values (6, '2021-12-30T06:08:33Z', 6, 6);
insert into bills (card_id, date_paid, user_id, membership_id) values (7, '2022-03-21T01:13:57Z', 7, 7);
insert into bills (card_id, date_paid, user_id, membership_id) values (8, '2021-12-08T15:54:45Z', 8, 8);
insert into bills (card_id, date_paid, user_id, membership_id) values (9, '2022-05-17T16:41:22Z', 9, 9);
insert into bills (card_id, date_paid, user_id, membership_id) values (10, '2022-08-30T04:23:25Z', 10, 10);
