import express from 'express';
import connectDB from './db/connection';
import api from './api';

connectDB();

const app = express();

app.use(express.json());

app.use('/api', api);

export default app;
