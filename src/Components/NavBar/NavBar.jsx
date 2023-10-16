import { useState, useEffect } from 'react';

import "./navbar.css";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function NavBar() {
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
      <nav className="flex justify-end">
        <ul className='flex flex-row'>
          <li>
            <a href="#skills" className="menu p-3">Skills</a>
          </li>
          <li>
            <a href="#practica-qa" className="menu p-3">Practicas QA</a>
          </li>
          <li>
            <a href="#proyecto-front-end" className="menu p-3">Proyectos Front-End</a>
          </li>
          <li>
            <a href="#contacto" className="menu p-3">Contacto</a>
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

export default NavBar;