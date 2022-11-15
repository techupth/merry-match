import * as pg from "pg";

const { Pool } = pg.default;

const pool = new Pool({
  connectionString: `postgres://xjwnziwl:VMtz0smdJe0HejWpk00DUSjFuBp1Rei8@satao.db.elephantsql.com/xjwnziwl`,
});

export { pool };
