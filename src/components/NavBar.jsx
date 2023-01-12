import { useState } from 'react'

import styles from '../style';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { useScrollPosition, useHover } from './hooks';
import NavRainbow from './NavRainbow';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");

  const scrollPosition = useScrollPosition();
  console.log(scrollPosition)

  return (
    <nav className={`md:${styles.paddingX} ${styles.boxWidth} bg-red-200 flex-1 flex p-5 justify-between items-center rounded-b-md fixed top-0 transiton shadow-sm z-[10] ${scrollPosition || hoverRef ? 'animate-fade-in-down' : 'animate-fade-in-up'} `}>
    <NavRainbow />
      <img src={logo} alt="milal-logo" className="w-[238px] h-[65px] cursor-pointer md:ml-8 lg:ml-28 lg:scale-125 z-[3]" />
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) =>(
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] z-[3] underline-offset-2 ${index === navLinks.length - 1 ? 'mr-0 bg-yellow-200 px-4 py-2 -my-2 rounded-full font-semibold drop-shadow-xl hover:scale-125' : 'mr-10 hover:underline'} ${active === nav.title ? 'text-bluePrimary' : index === 1 ? 'text-terracotta' : index === 2 ? 'text-secondary ' : index === 3 ? 'text-tertiary' : 'font-extrabold uppercase text-orange-700' }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}  
        </ul>
        <ul className="list-none sm:flex absolute right-0 hidden justify-end items-center mt-16 mr-32">
          {navLinks[1].content.map((nav, index) => (
            <li
              key={nav.id} 
              className={`font-poppins px-4 my-2 text-terracotta hover:border-x hover:-mx-[1px]  cursor-pointer border-terracotta ${index === 0 ? 'border-l-none' : ''}`}
            >{nav.title}</li>
          ))}
        </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain z-[5]  cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div 
          className={`${toggle ? 'flex' : 'hidden'} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[5]`}
        >
          <ul className={`list-none flex flex-col justify-end flex-1 z-[1] bg-primary ${active}`}>
            {navLinks.map((nav, index) =>(
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] z-[2] bg-primary place-self-stretch -my-4 py-6 shadow-xl rounded-md border-double border-1 min-w-[30vw] ${index === navLinks.length - 1 ? 'mb-0 ' : 'mb-5'} ${active === nav.title ? 'text-bluePrimary bg-pBlue ' : index === 1 ? 'bg-pYellow text-purple-800' : index === 2 ? 'text-secondary bg-pOrange': index === 3 ? 'text-tertiary bg-pGreen px-4' : 'text-purple-800 font-extrabold shadow-xl bg-pRed' }`}
              >
                <p className={`${active === nav.title ? 'border-1 border-black rounded-full' : 'hidden'}`}></p>
                
                <a href={`#${nav.id}`} className='flex justify-center'>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar