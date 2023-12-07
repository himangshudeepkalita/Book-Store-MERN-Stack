import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoute from './routes/book.route.js';
import cors from 'cors';
import path from 'path';
dotenv.config();

const __dirname = path.resolve();

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: All All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//     cors({
//         origin: 'http://127.0.0.1:5173/',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type']
//     })
// )

app.get('/', (req, res) => {
    res.status(234).send('Welcome to MERN Stack');
})

app.use('/books', bookRoute);

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
})

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