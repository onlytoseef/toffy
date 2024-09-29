import { toast } from 'react-toastify';
import { OutputComponentProps } from '../../types/Types';
import React, { useState } from 'react';

const OutputBox: React.FC<OutputComponentProps> = ({ shortUrl }) => {
  const [copySuccess, setcopySuccess] = useState<string>('');

  const handleCopyText = () => {
    const fullUrl = `http://toffy.vercel.app/${shortUrl}`;
    navigator.clipboard
      .writeText(fullUrl)
      .then(() => {
        setcopySuccess('Copied to clipboard!');
        toast.info('Link Copied to Clipboard', {
          position: 'top-center',
        });
      })
      .catch((err) => {
        setcopySuccess('Failed to copy!');
        console.error('Error copying text: ', err);
      });
  };

  return (
    <div className='text-center mt-5 p-1'>
      {shortUrl ? (
        <>
          <div className='flex justify-between items-center  bg-white box-shadow rounded-lg  md:w-[55vw] w-[85vw]'>
            <p className='output-box px-3'>
              <a
                href={`http://toffy.vercel.app/${shortUrl}`}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-900 hover:border-b-2 hover:border-blue-900'
              >
                {`tof.fy/${shortUrl}`}
              </a>
            </p>
            <button
              onClick={handleCopyText}
              className='copy-btn bg-blue-500 text-white rounded-lg  px-3 py-2  hover:bg-blue-600'
            >
              Copy Link
            </button>
          </div>
        </>
      ) : (
        <p> {copySuccess && <p>{copySuccess}</p>}</p>
      )}
    </div>
  );
};

export default OutputBox;
