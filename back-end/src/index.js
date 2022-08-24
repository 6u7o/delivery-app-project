import dotenv from 'dotenv/config';
import app from './api';

dotenv.config();

const PORT = process.env.APP_PORT || 3001;

app().start(PORT);
