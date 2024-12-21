import { Router } from 'express';
import bookController from '../controllers/books.controller.js';

const router = Router();

router.get('/', bookController.getAllBooks);

export default router
