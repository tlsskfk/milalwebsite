import { useState } from 'react'

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");
  return (
    <nav className="w-full flex py-5 justify-between items-center navbar">
      <img src={logo} alt="milal-logo" className="w-[188px] h-[52px] z-[1]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) =>(
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] z-[1] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} ${active === nav.title ? 'text-red-100' : 'text-dimColor1'}`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain z-[1]"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div 
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[1]`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1 z-[1]">
            {navLinks.map((nav, index) =>(
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} ${active === nav.title ? 'text-blue' : 'text-dimBlue'}`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar