import { useState, useEffect } from 'react';

import "./navbarPage.css";
import { Link } from 'react-router-dom';

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function NavBarPage() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="my-5">

      <nav className="flex flex-row justify-end">
        <ul>
          <li>
            <Link to={'/'} className='menu p-3'>Home</Link >
          </li>
        </ul>
      </nav>

      <div className="flex flex-row justify-end mr-12">
        <a id="scroll-up" className="scroll-up" href="#inicio" onClick={() => scrollToTop()} style={{ display: showArrow ? 'block' : 'none' }}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path fill="rgba(255,255,255,1)" d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z">
            </path>
          </svg>
        </a>
      </div>

    </main>
  );
}

export default NavBarPage;