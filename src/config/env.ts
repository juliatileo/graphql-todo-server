import { config } from 'dotenv';
import path from 'path';

config({ path: path.resolve(__dirname, '..', '..', '.env') });

const { DB_URL } = process.env;

export { DB_URL };
