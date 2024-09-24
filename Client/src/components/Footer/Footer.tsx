import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div>
      <footer className='bg-[#0E2A47]'>
        <p className='text-center font-[400px] text-white '>
          {' '}
          &copy; {year}. All Rights Reserved with{' '}
          <a href='https://tossefrana.vercel.app/' target='_blank'>
            Toseef Rana
          </a>{' '}
        </p>
      </footer>
    </div>
  );
}
