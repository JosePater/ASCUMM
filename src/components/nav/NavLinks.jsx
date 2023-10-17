import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavLinks = () => {
  const [heading, setHeading] = useState('');

  const links = [
    {
      name: 'Quiénes somos',
      submenu: true,
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
      submenu: true,
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
  ];
  // Quedé por const subHeadin | min 46
  return (
    <>
      {links.map((item, i) => (
        <div key={i}>
          <div className="px-3 text-left cursor-pointer group">
            <h1
              className="py-5"
              onClick={() =>
                heading !== item.name ? setHeading(item.name) : setHeading('')
              }
            >
              {item.name}
            </h1>

            {item.submenu && (
              <div>
                {/* ____________ Submenú Web____________ */}
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block border-r-50">
                  <div className="py-3">
                    <div className="w-6 h-6 left-3 absolute mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-1 gap-10">
                    {item.sublinks.map((mysublinks, j) => (
                      <div key={j}>
                        <h1 className="text-lg font-semibold flex item">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((submenu, k) => (
                          <div key={k}>
                            <li className="text-sm text-gray-600 my-2.5">
                              <NavLink
                                to={submenu.link}
                                className="hover:text-primary"
                              >
                                {submenu.name}
                              </NavLink>
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
            {item.submenu &&
              item.sublinks.map((submenus, l) => (
                <div key={l}>
                  <div>
                    <h1 className="py-1 pl-7 font-semibold md:pr-0 pr-5">
                      {submenus.Head}
                    </h1>
                    <div>
                      {submenus.sublink.map((submenu, n) => (
                        <li key={n} className="py-2 pl-14">
                          <Link to={submenu.link}>{submenu.name}</Link>
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
