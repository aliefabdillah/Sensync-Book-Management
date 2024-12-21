import { Router } from 'express';
import bookController from '../controllers/books.controller.js';
import middlewares from '../middlewares.js'

const router = Router();

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBooksById);
router.post('/', middlewares.validate('/create-book'), bookController.createBook)

export default router
