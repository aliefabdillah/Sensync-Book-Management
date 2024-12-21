import { Router } from 'express';

import books from './books.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/books', books);

export default router;
