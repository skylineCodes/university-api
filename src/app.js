import express from 'express';
import './db/connection';

const app = express();

app.use(express.json());

module.exports = app;
