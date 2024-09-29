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
const [loading, setLoading] = useState(false);
  
  const handleCreateShortUrl = async (longUrl: string) => {
     setLoading(true);
    const API_URL =
      import.meta.env.MODE === 'development'
        ? '/URL/shorten'
        : 'https://toffy.vercel.app/URL/shorten';

    try {
      const response = await axios.post(API_URL, {
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
      setLoading(false);
  };

  return (
    <>
      <Header />
      <div className='flex items-center  main-section flex-col justify-center h-screen'>
        <InputBar onCreateShortUrl={handleCreateShortUrl} />
        <OutputBox shortUrl={shortUrl} loading={loading} />
      </div>

      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
