import { useState } from 'react';
import { InputBarProps } from '../../types/Types.ts';

export default function InputBar({ onCreateShortUrl }: InputBarProps) {
  const [longUrl, setLongUrl] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (longUrl) {
      onCreateShortUrl(longUrl);
    } else {
      alert('Please enter a URL to shorten.');
    }
  };

  return (
    <div>
      <div className='mx-auto flex justify-center flex-col items-center'>
        <h1 className='md:text-[2.5rem] text-[1.5rem] pb-8 font-bold text-[#6e6817]'>
          Paste your URL to be shorted
        </h1>

        <form className='flex flex-row ' onSubmit={handleSubmit}>
          <input
            type='text'
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder='Paste your Link Here '
            className=' outline-none cursor-[#6e6817] bg-[#0E2A47] md:w-[50vw] w-[70vw] text-white font-thin text-center h-[6vh] border-4 border-[#6e6817]     placeholder:text-center placeholder:'
          />
          <button className='border-4 bg-[#0E2A47] hover:bg-[#6e6817] text hover:text-[#0E2A47] border-[#6e6817] md:px-4 px-2 text-white'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
