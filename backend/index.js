import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.status(234).send('Welcome to MERN Stack');
})

app.listen(process.env.PORT, () => {
    console.log(`server is running at ${process.env.PORT} `);
})