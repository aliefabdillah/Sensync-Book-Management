// eslint-disable-next-line import/no-unresolved
import httpStatus from 'http-status';
import { Books } from '../models/books.js';
import Response from '../utils/Response.js';

async function getAll() {
  const booksData = await Books.findAll({
    attributes: ['id', 'title', 'year', 'author'],
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

export default {
  getAll,
  getById,
};
