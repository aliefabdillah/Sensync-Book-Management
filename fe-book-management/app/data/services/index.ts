import { BooksService } from "./BooksService";

export const booksService = new BooksService(`${process.env.API_URL}/books/`);