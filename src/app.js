import express from 'express';
import './db/connection';
import api from './api';

const app = express();

app.use(express.json());

app.use('/api', api);

export default app;
