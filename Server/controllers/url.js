import ShortUniqueId from 'short-unique-id';
import URL from '../models/url.js';

async function handleCreateShortUrl(req, res) {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    const uid = new ShortUniqueId({ length: 8 });
    const shortUrl = uid();

    const newUrl = await URL.create({
      shortUrl,
      redirectUrl: url,
      visitHistory: [],
    });

    res.json({ url: shortUrl });
  } catch (error) {
    console.error('Error in handleCreateShortUrl:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default handleCreateShortUrl;
