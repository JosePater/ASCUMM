import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavLinks = () => {
  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');

  const links = [
    {
      name: 'Inicio',
      link: '/',
    },
    {
      name: 'Quiénes somos',
      isSubmenu: true,
      sublinks: [
        {
          Head: 'Nosotros',
          sublink: [
            { name: 'Misión', link: '/nosotros/mision' },
            { name: 'Visión', link: '/nosotros/vision' },
          ],
        },
      ],
    },
    {
      name: 'Proyectos',
      isSubmenu: true,
      sublinks: [
        {
          Head: 'Nuestros Proyectos',
          sublink: [
            { name: 'Piscicultura', link: '/proyecto/piscicultura' },
            { name: 'Pollo', link: '/proyecto/pollos' },
            { name: 'Cerdo', link: '/proyecto/cerdo' },
          ],
        },
      ],
    },
    {
      name: 'Contacto',
      link: '/contacto',
    },
  ];

  return (
    <>
      {links.map((item, i) => (
        <div key={i}>
          <div className="px-3 text-left cursor-pointer group">
            <h1
              className="py-3 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== item.name ? setHeading(item.name) : setHeading('');
                setSubHeading('');
              }}
            >
              {/* Head */}
              {item.link ? (
              <NavLink to={item.link} className="hover:text-primary">
                {item.name}
              </NavLink>
              ) : item.name}

              {/* icon up: chevron-up */}
              {item.isSubmenu && (
                <>
                  {/*  Icon for Mobile*/}
                  <span className="text-xl md:hidden inline">
                    <ion-icon
                      name={`${
                        heading === item.name ? 'chevron-up' : 'chevron-down'
                      }`}
                    ></ion-icon>
                  </span>

                  {/* Icon for web */}
                  <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2 duration-100">
                    <ion-icon name="chevron-down"></ion-icon>
                  </span>
                </>
              )}
            </h1>

            {item.isSubmenu && (
              <div>
                {/* ____________ Submenu Web____________ */}
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div>
                    <div className="bg-gray-200 w-6 h-6 left-3 absolute -mt-9 rotate-45"></div>
                  </div>
                  <div className="bg-gray-200 p-5 grid grid-cols-1 gap-10 -mt-6">
                    {item.sublinks.map((mysublinks, j) => (
                      <div key={j}>
                        <h1 className="text-lg font-semibold flex item">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((submenu, k) => (
                          <div key={k}>
                            <li className="text-sm text-gray-600 my-2.5">
                              <Link
                                to={submenu.link}
                                className="hover:text-primary hover:font-bold"
                              >
                                {submenu.name}
                              </Link>
                            </li>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ____________ Mobile menus ____________ */}
          <div
            className={` ${heading === item.name ? 'md:hidden' : 'hidden'} `}
          >
            {/* Submenus */}
            {item.isSubmenu &&
              item.sublinks.map((submenus, l) => (
                <div key={l}>
                  <div>
                    <h1
                      onClick={() =>
                        subHeading !== submenus.Head
                          ? setSubHeading(submenus.Head)
                          : setSubHeading('')
                      }
                      className="py-1 pl-7 font-semibold flex justify-between items-center md:pr-0 pr-8"
                    >
                      {submenus.Head}
                      {item.isSubmenu && (
                        <span className="text-xl md:mt-1 md:ml-2 inline">
                          <ion-icon
                            name={`${
                              subHeading === submenus.Head
                                ? 'chevron-up'
                                : 'chevron-down'
                            }`}
                          ></ion-icon>
                        </span>
                      )}
                    </h1>
                    <div
                      className={`${
                        subHeading === submenus.Head ? 'md:hidden' : 'hidden'
                      }`}
                    >
                      {submenus.sublink.map((submenu, n) => (
                        <li key={n} className="py-2 pl-14">
                          <Link
                            to={submenu.link}
                            className="hover:text-primary"
                          >
                            {submenu.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};
