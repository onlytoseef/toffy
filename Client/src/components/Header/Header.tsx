import { useState } from 'react';
import logo from '../../assets/images/toFFy.png';
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='  mx-auto bg-white shadow-lg p-4'>
      <div className='container mx-auto flex   justify-between items-center'>
        <div className='text-white  item-left sm:text-[2.3rem] text-[1.3rem] font-bold'>
          <img src={logo} width={120} className='text-ht sm:ml-3' alt='' />
        </div>
        <button className='text-black  block lg:hidden' onClick={toggleMenu}>
          ☰
        </button>
        <nav
          className={`lg:flex ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto`}
        >
          <ul className='lg:flex lg:space-x-4 text-black '>
            <li>
              <a
                href='#'
                className='block head py-2 px-4  hover:text-white hover:bg-[#0573E1]'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block head py-2 px-4  hover:text-white hover:bg-[#0573E1]'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block head py-2 px-4  hover:text-white hover:bg-[#0573E1]'
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block head py-2 px-4  hover:text-white hover:bg-[#0573E1]'
              >
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
