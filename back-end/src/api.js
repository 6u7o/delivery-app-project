import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/error.middleware';
import appRouter from './routes';

const app = express();

app.use(express.json());

app.use(appRouter);
app.use(errorMiddleware);

export default app;
