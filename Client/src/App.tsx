import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import InputBar from './components/InputBox/InputBar';
import OutputBox from './components/OutputBox/OutputBox';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

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
      toast.error('Error creating short URL', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  return (
    <>
      <Header />
      <div className='flex items-center  main-section flex-col justify-center h-screen'>
        <InputBar onCreateShortUrl={handleCreateShortUrl} />
        <OutputBox shortUrl={shortUrl} />
      </div>

      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
