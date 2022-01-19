import { Pool } from 'pg';

const connectionString = 'INSERT HERE YOUR CONNECTION URL';

const db = new Pool({connectionString});

export default db;