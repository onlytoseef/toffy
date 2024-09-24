import express from 'express';
import hanldeCreateShortUrl from '../controllers/url.js';

const router = express.Router();

router.post('/shorten', hanldeCreateShortUrl);

export default router;
