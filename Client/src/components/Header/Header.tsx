import { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=' container mx-auto bg-[#0E2A47] p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-white head brand sm:text-[2.3rem] text-[1.3rem] font-bold'>
          Aksifyy
        </div>
        <button className='text-white block lg:hidden' onClick={toggleMenu}>
          ☰
        </button>
        <nav
          className={`lg:flex ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto`}
        >
          <ul className='lg:flex lg:space-x-4 text-white'>
            <li>
              <a href='#' className='block head py-2 px-4 hover:bg-[#6E6817]'>
                Home
              </a>
            </li>
            <li>
              <a href='#' className='block head py-2 px-4 hover:bg-[#6E6817]'>
                About
              </a>
            </li>
            <li>
              <a href='#' className='block head py-2 px-4 hover:bg-[#6E6817]'>
                Services
              </a>
            </li>
            <li>
              <a href='#' className='block head py-2 px-4 hover:bg-[#6E6817]'>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
