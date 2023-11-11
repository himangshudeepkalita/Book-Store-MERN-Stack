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