import React from 'react';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
import { useState } from "react"; 

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-gray-400 py-8">
      <a href="/">
       <img src={logo} alt="logo" height={42} width={69} className='ml-12'/>
      </a>
      <nav className='py-4 px-6'>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 p3x-8 py-8"
              onClick={() => setIsNavOpen(false)} >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
            <li className='hover:border-t-2 hover:border-b-2'>
            <Link to="/">Main</Link>
        </li>
        <li className='hover:border-t-2 hover:border-b-2'>
            <Link to="/gallery">Gallery</Link>
        </li>
        <li className='hover:border-t-2 hover:border-b-2'>
            <Link to="/projects">Projects</Link>
        </li>
        <li>Certifications</li>
        <li>Contact</li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
        <li className='hover:border-t-2 hover:border-b-2'>
            <Link to="/">Main</Link>
        </li>
        <li className='hover:border-t-2 hover:border-b-2'>
            <Link to="/gallery">Gallery</Link>
        </li>
        <li className='hover:border-t-2 hover:border-b-2'>
            <Link to="/projects">Projects</Link>
        </li>
        <li>Certifications</li>
        <li>Contact</li>
        </ul>
        </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: max-content;
        top: 5;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}

{/* <div className='flex items-center justify-around p-4'>
<div>
    <img src={logo} alt="logo" height={42} width={69}/>
</div>

<div>
    <ul className='flex gap-x-4 font-normal'>
        <li className='hover:border-t-2 hover:border-b-2'>
            <Link to="/">Main</Link>
        </li>
        <li className='hover:border-t-2 hover:border-b-2'>
            <Link to="/gallery">Gallery</Link>
        </li>
        <li className='hover:border-t-2 hover:border-b-2'>
            <Link to="/projects">Projects</Link>
        </li>
        <li>Certifications</li>
        <li>Contact</li>
    </ul>
</div> */}