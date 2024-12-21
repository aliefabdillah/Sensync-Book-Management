import booksService from '../services/books.service.js';
import Response from '../utils/Response.js';
import httpStatus from 'http-status'

async function getAllBooks(req, res, next) {
  try {
    const booksResult = await booksService.getAll();
    res.status(booksResult.statusCode).send(booksResult);
  } catch (error) {
    next(error)
  }
}

async function getBooksById(req, res, next) {
  try {
    const bookResult = await booksService.getById(req.params.id)
    res.status(bookResult.statusCode).send(bookResult);
  } catch (error) {
    next(error)
  }
}

export default {
  getAllBooks,
  getBooksById
}