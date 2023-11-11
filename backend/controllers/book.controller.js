import { Book } from "../models/book.model.js";

export const saveBook = async (req, res) => {
    try {
        if( !req.body.title || !req.body.author || !req.body.publishYear ) {
            return res.status(400).send({ message: 'Send all required fields: title, author, publishYear'});
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }

        const book = await Book.create(newBook);

        return res.status(201).send(book);
    } catch (error) {
        console.log(error);
    }
}

export const getBooks = async (req, res) => {
    try {
        const books = await Book.find({});

        return res.status(200).json(books);
    } catch (error) {
        console.log(error);
    }
}

export const getOneBook = async (req, res) => {
    try {
        const { id } = req.params;

        const book = await Book.findById(id);

        return res.status(200).json(book);
    } catch (error) {
        console.log(error);
    }

}

export const updateBook = async (req, res) => {
    try {
        if( !req.body.title || !req.body.author || !req.body.publishYear ) {
            return res.status(400).send({ message: 'Send all required fields: title, author, publishYear'})
        }
        
        const { id } = req.params;
        
        const result = await Book.findByIdAndUpdate(id, req.body);
        
        if(!result) {
            return res.status(404).json({ message: 'Book not found!' });
        }
        
        return res.status(200).json({ message: 'Book updated successfully!' });
    } catch (error) {
        console.log(error);
    }
}