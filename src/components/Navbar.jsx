import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import style from './Navbar.module.css';
import mainLogo from '../assets/react.svg';

const links = [
  {
    label: 'About Me',
    href: '#about-me'
  },
  {
    label: 'Experience',
    href: '#experience'
  },
  {
    label: 'Projects',
    href: '#projects'
  },
  {
    label: 'Contact Me',
    href: '#contact-me'
  }
];

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <>
      <nav className={style.nav}>
        <div className={style.wrapper}>
          <div className="flex  justify-around flex-2 gap-x-6">
            <Link
              to="/"
              className="flex items-center"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            >
              <span className="self-center lg:text-2xl text-xl font-semibold whitespace-nowrap text-gray-600 hover:text-blue-600">
                jonslogar.dev
              </span>
            </Link>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto "
            id="navbar-sticky"
          >
            <ul className={style.link__ul}>
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={style.link__navlink}
                    // aria-current="page"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:flex hidden gap-2  ">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/jonslogar-arenque/"
              className="text-[25px] text-gray-700 hover:text-blue-800"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.facebook.com/jonwiths/"
              className="text-[25px] text-gray-700 hover:text-blue-800"
            >
              <FaFacebook />
            </a>
          </div>
          <button type="button" onClick={toggleMobileNav}>
            <HiMenuAlt3 className="text-[24px] text-gray-800 lg:hidden block" />
          </button>
        </div>
      </nav>

      {isMobileNavOpen && (
        <nav
          className={`p-4 font-poppins lg:hidden fixed top-0 left-0 z-30 h-screen w-full bg-gray-50 transition ease-in-out`}
        >
          <div className="absolute top-7 right-4">
            <button type="button" onClick={toggleMobileNav}>
              <AiOutlineClose className="text-2xl" />
            </button>
          </div>

          <div className="mt-14 flex flex-col items-center justify-center  text-lg">
            <Link
              to="/"
              className="flex items-center text-3xl"
              onClick={() => (window.location.href = '/')}
            >
              {/* <img
                src={mainLogo}
                className="lg:h-8 h-6 lg:mr-3 mr-1"
                alt="Meven-edu Logo"
              /> */}
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-800">
                jonslogar.dev
              </span>
            </Link>
            <div className="mt-5 flex items-center flex-col">
              {links.map((link) => (
                <div key={link.href}>
                  <a
                    href={link.href}
                    className={style.link__navlink_mobile}
                    aria-current="page"
                    // onClick={() => (window.location.href = link.href)}
                    onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-2 mb-6 border border-gray-300 w-full"></div>
            <div className="flex gap-2  ">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.linkedin.com/in/jonslogar-arenque/"
                className="text-[25px] text-gray-700 hover:text-blue-800"
              >
                <FaLinkedin />
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.facebook.com/jonwiths/"
                className="text-[25px] text-gray-700 hover:text-blue-800"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
