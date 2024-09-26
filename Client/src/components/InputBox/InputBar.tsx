import { useState } from 'react';
import { InputBarProps } from '../../types/Types.ts';
import { toast, ToastContainer } from 'react-toastify';

export default function InputBar({ onCreateShortUrl }: InputBarProps) {
  const [longUrl, setLongUrl] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (longUrl) {
      onCreateShortUrl(longUrl);
    } else {
      toast.error('Please Enter a URL', {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  return (
    <div>
      <div className='mx-auto flex justify-center flex-col items-center'>
        <h1 className='md:text-[2.5rem] text-[1.5rem] pb-8 font-bold text-black '>
          Paste your <span className='text-[#0573E1]'>URL</span> to be shorted
        </h1>

        <form
          className='flex flex-row border-2 rounded-lg border-[#0573E1] '
          onSubmit={handleSubmit}
        >
          <input
            type='text'
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            className=' outline-none p-4 cursor-[#6e6817] bg-transparent md:w-[50vw] w-[70vw] text-black font-thin text-center  h-[5vh] rounded-lg    placeholder:text-center placeholder:'
          />
          <button className=' bg-[#0573E1]  text-white   md:px-4 px-2 hover:p-4 hover:text-white'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
