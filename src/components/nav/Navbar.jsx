// import React from 'react';
import { Link } from 'react-router-dom';
import { NavLinks } from './NavLinks';
import Logo from '../../assets/favicon.png';
import { useState } from 'react';

export const Navbar = () => {
  const [openMenu, setopenMenu] = useState(false);

  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 pt-1 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-20" />

          <div className="text-5xl md:hidden m-2">
            <ion-icon
              name={openMenu ? 'close' : 'menu'}
              onClick={() => setopenMenu(!openMenu)}
            ></ion-icon>
          </div>
        </div>

        <ul className="md:flex hidden items-center uppercase gap-8 ">
          <li>
            <Link to={'/'} className="py-5 px-3 inline-block">
              Inicio
            </Link>
          </li>
          <NavLinks />
        </ul>

        {/* Mobile nav */}
        <ul
          className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 
          duration-500 ${openMenu ? 'left-0' : 'left-[-100%]'}`}
        >
          <li>
            <Link to={'/'} className="py-5 px-3 inline-block">
              Inicio
            </Link>
            <NavLinks />
          </li>
        </ul>
      </div>
    </nav>
  );
};
