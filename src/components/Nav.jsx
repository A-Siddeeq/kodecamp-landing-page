import React from 'react';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='flex items-center justify-around p-4'>
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
        </div>
 
    </div>
  )
}

export default Nav