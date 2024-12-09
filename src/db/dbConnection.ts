import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { dbConfig } from '../config/dbConfig';
import fs from 'fs';

const pool = new Pool({
    host: dbConfig.host,
    port: dbConfig.port,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    ssl: { 
        rejectUnauthorized: true,
        ca: fs.readFileSync('/ca.pem').toString()
    }
});

export const db = drizzle({client:pool})