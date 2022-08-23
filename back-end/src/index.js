import app from './api';
import 'dotenv/config';

const PORT = process.env.APP_PORT || 3001;

new app().start(PORT);
