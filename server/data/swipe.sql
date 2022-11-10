-- create table swipe (
-- swipe_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
-- swiper INT REFERENCES users(user_id),
-- swipe_type BOOLEAN NOT NULL,
-- swipee INT REFERENCES users(user_id),
-- swipe_at TIMESTAMPTZ NOT NULL
-- )


select * from swipe


-- insert into swipe (swiper,swipe_type,swipee,swipe_at) values(76,'true',52,'2021-01-22T20:12:37Z')