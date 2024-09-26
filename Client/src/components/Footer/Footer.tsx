export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div>
      <footer className='bg-white py-2 '>
        <p className='text-center  font-[600]  text-black '>
          {' '}
          &copy; {year}. All Rights Reserved with{' '}
          <a
            href='https://tossefrana.vercel.app/'
            className='text-[#0573E1]'
            target='_blank'
          >
            Toseef Rana
          </a>{' '}
        </p>
      </footer>
    </div>
  );
}
