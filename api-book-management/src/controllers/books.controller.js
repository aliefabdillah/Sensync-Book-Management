import booksService from '../services/books.service.js';

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

async function createBook(req, res, next) { 
  try {
    const bookResult = await booksService.create(req.body)
    res.status(bookResult.statusCode).send(bookResult)
  } catch {
    next(error)
  }
}

async function updateBook(req, res, next) { 
  try {
    const bookResult = await booksService.update(req.params.id, req.body)
    res.status(bookResult.statusCode).send(bookResult)
  } catch(error) {
    next(error)
  }
}

async function deleteBook(req, res, next) {
  try {
    const result = await booksService.remove(req.params.id)
    res.status(result.statusCode).send(result)
  } catch (error) {
    next(error)
  }
}

export default {
  getAllBooks,
  getBooksById,
  createBook,
  updateBook,
  deleteBook,
}