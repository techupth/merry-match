-- create table complaints (
-- 	complaint_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
-- 	user_id INT REFERENCES users(user_id) NOT NULL,
-- 	name VARCHAR(50) NOT NULL,
-- 	issue TEXT NOT NULL,
-- 	description TEXT,
-- 	date_submitted DATE NOT NULL,
-- 	complaint_status VARCHAR(25) NOT NULL,
--   updated_at TIMESTAMPTZ,
--   resolved_by INT REFERENCES admins(admin_id) NOT NULL
-- );

-- select * from complaints

-- drop table complaints cascade

-- select * from complaints

-- drop table complaints cascade

-- ALTER TABLE complaints
-- ALTER COLUMN resolved_by drop not null;