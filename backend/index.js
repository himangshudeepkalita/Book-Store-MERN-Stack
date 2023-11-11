import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { getBooks, getOneBook, saveBook } from './controllers/book.controller.js';
dotenv.config();

const app = express();

// Middleware for parsing request body
app.use(express.json());

app.get('/', (req, res) => {
    res.status(234).send('Welcome to MERN Stack');
})

// Route for Saving a new Book
app.post('/books', saveBook)

// Route for Getting All Books from database
app.get('/books', getBooks)

// Route for Getting One Book from database by id
app.get('/books/:id', getOneBook)

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