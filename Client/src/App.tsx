import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import InputBar from './components/InputBox/InputBar';
import OutputBox from './components/OutputBox/OutputBox';
import axios from 'axios';

function App() {
  const [shortUrl, setShortUrl] = useState('');

  const handleCreateShortUrl = async (longUrl: string) => {
    try {
      const response = await axios.post('/URL/shorten', {
        url: longUrl,
      });

      if (response.data.url) {
        setShortUrl(response.data.url);
      }
    } catch (error) {
      console.error('Error creating short URL:', error);
      alert('Failed to shorten the URL. Please try again.');
    }
  };

  return (
    <>
      <Header />
      <div className='flex items-center flex-col justify-center h-screen'>
        <InputBar onCreateShortUrl={handleCreateShortUrl} />
        <OutputBox shortUrl={shortUrl} />
      </div>

      <Footer />
    </>
  );
}

export default App;
