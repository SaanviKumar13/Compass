import Link from 'next/link';
import { useState } from 'react';

const links = [
  {
    title: 'Get Started',
    icon: '',
    link: '/events',
  },
  {
    title: 'Resume Builder',
    icon: '',
    link: '/#about',
  },
  {
    title: '',
    icon: '',
    link: '/#schedule',
  },
];

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="sm:flex sm:justify-between items-center mt-3 sm:mt-1 mx-auto fixed z-10 text-sm sm:text-base md:text-2xl font-heading-2 border-2 rounded-2xl p-2 top-12 w-5/6 md:w-11/12 left-0 inset-x-0 gap-3 md:gap-0">
      <div className="flex justify-between items-center">
        <Link href="/">
          <img src="/" className="max-w-[46px] self-start md:self-center " alt="logo" />
        </Link>
        <div className="sm:hidden mt-2">
          {nav ? (
            <button title="nav-collapsible" type="button" onClick={handleNav}>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          ) : (
            <button title="nav-collapsible" type="button" onClick={handleNav}>
              <svg
                xmlns="<http://www.w3.org/2000/svg>"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="hidden sm:block">
        <ul className="list-none flex items-center justify-center gap-2 md:gap-8">
          {links.map(({ title, link }, idx) => (
            <li key={idx}>
              <Link href={link} className="hover:text-">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ul
        className={
          nav
            ? 'block sm:hidden ease-in-out duration-1000 py-3 text-base px-1 text-center'
            : 'ease-in-out duration-1000 hidden'
        }
      >
        {links.map(({ title, link }, idx) => (
          <li key={idx} className="pt-1">
            <Link href={link} onClick={handleNav}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
