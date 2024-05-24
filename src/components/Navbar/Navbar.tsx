import { FaCartShopping } from 'react-icons/fa6';
import Darkmode from './Darkmode';
import Logo from '/food-logo.png';

function Navbar() {
  return (
    <div className="shadow-md bg-light dark:bg-dark text-light dark:text-dark duration-200">
      <div className="container py-3 sm:py-3">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className='flex items-center gap-2 text-2xl sm:text-3xl font-bold'>
              <img src={Logo} alt="Logo SkyAsia" className='w-25' />
            </a>
          </div>
          <div className='flex items-center gap-4'>
            <Darkmode />
            <ul className='hidden sm:flex gap-4'>
              <li>
                <a href="/home" className='inline-block py-4 px-4 hover:text-secondary'>Home</a>
              </li>
              <li>
                <a href="/about" className='inline-block py-4 px-4 hover:text-secondary'>Sobre</a>
              </li>
              <li>
                <a href="/contact" className='inline-block py-4 px-4 hover:text-secondary'>Contato</a>
              </li>
            </ul>
            <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-3'>
              Peça já
              <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
