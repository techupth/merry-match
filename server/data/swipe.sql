create table swipe (
	swipe_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
	swiper INT REFERENCES users(user_id) ON DELETE CASCADE,
	swipe_type BOOLEAN NOT NULL,
	swipee INT REFERENCES users(user_id),
	swipe_at TIMESTAMPTZ NOT NULL
);


-- DROP TABLE swipe CASCADE;