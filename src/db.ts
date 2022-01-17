import { Pool } from 'pg';

const connectionString = 'INSERT HERE YOUR URL CONNECTION';

const db = new Pool({connectionString});

export default db;