import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoute from './routes/book.route.js';
dotenv.config();

const app = express();

// Middleware for parsing request body
app.use(express.json());

app.get('/', (req, res) => {
    res.status(234).send('Welcome to MERN Stack');
})

app.use('/books', bookRoute);

mongoose
    .connect(process.env.mongoDBURL)
    .then(() => {
        console.log('Connected to Database!');
        app.listen(process.env.PORT, () => {
            console.log(`server is running at ${process.env.PORT} `);
        })
    })
    .catch((error) => {
        console.log(error);
    })