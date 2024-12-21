import { BooksService } from "./BooksService";

export const booksService = new BooksService(`http://localhost:3001/api/v1/books/`);