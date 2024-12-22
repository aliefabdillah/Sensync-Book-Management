// eslint-disable-next-line import/no-unresolved
import httpStatus from 'http-status';
import { Books } from '../models/books.js';
import Response from '../utils/Response.js';

async function getAll() {
  const booksData = await Books.findAll({
    attributes: ['id', 'title', 'year', 'author'],
    order: [
      ['createdAt', 'asc']
    ]
  });

  if (!booksData) {
    throw new Response.ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'GET BOOKS FAILED')
  }

  return new Response.ApiSuccess(httpStatus.OK, 'GET BOOKS SUCCESS', booksData);
}

async function getById(userId) {
  const bookData = await Books.findByPk(userId)
  if (!bookData) {
    throw new Response.ApiError(httpStatus.NOT_FOUND, 'BOOKS NOT FOUND')
  }

  return new Response.ApiSuccess(httpStatus.OK, 'GET BOOK SUCESS', bookData)
}

async function create(body) {
  try {
    const createdBook = await Books.create(body)
    return new Response.ApiSuccess(httpStatus.CREATED, 'CREATE BOOK SUCCESS', createdBook)
  } catch (error) {
    throw new Response.ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message)
  }
}

async function update(bookId, updateBody) {
  const updatedBook = await Books.findByPk(bookId);

  if (!updatedBook) {
    throw new Response.ApiError(httpStatus.NOT_FOUND, 'BOOK NOT FOUND')
  }

  Object.assign(updatedBook, updateBody)
  await updatedBook.save();

  return new Response.ApiSuccess(httpStatus.CREATED, 'UPDATE BOOK SUCCESS', updatedBook)
}

async function remove(bookId) {
  const deletedBook = await Books.findByPk(bookId);

  if (!deletedBook) {
    throw new Response.ApiError(httpStatus.NOT_FOUND, 'BOOK NOT FOUND')
  }

  await deletedBook.destroy()
  return new Response.ApiSuccess(httpStatus.OK, 'DELETE BOOK SUCCESS')
}

export default {
  getAll,
  getById,
  create,
  update,
  remove,
};
