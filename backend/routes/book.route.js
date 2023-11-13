import express from 'express';
import { deleteBook, getBooks, getOneBook, saveBook, updateBook } from '../controllers/book.controller.js';

const router = express.Router();

// Route for Saving a new Book
router.post('/', saveBook)

// Route for Getting All Books from database
router.get('/', getBooks)

// Route for Getting One Book from database by id
router.get('/:id', getOneBook)

// Route for Updating a Book
router.put('/:id', updateBook)

// Route for Deleting a Book
router.delete('/:id', deleteBook)

export default router;