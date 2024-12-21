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

export default {
  getAll,
};
