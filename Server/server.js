import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/index.js';
import urlRoute from './routes/url.js';
import URL from './models/url.js';

dotenv.config({});
connectDB();

const app = express();

// Middlewares
app.use(express.json());
app.use('/URL', urlRoute);
app.get('/', async (req, res) => {
  await res.send('<h1>Server is working fine<h1>');
});

app.get('/:shortUrl', async (req, res) => {
  const shortUrl = req.params.shortUrl;
  const entry = await URL.findOneAndUpdate(
    {
      shortUrl,
    },
    {
      $push: {
        timestamp: Date.now(),
      },
    },
  );
  res.redirect(entry.redirectUrl);
});
app.listen(process.env.PORT, () => {
  console.log(`App is runing on ${process.env.PORT}`);
});
