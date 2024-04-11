'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import hamburger from '@/assets/icons/hamburger.svg';
import { useState } from 'react';
import Search from '@/assets/icons/search-icon.svg'
import axios from 'axios';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [SearchValue , setSearchValue] = useState("")
  const [open, setOpen] = useState(false);
  const Toggle = () => {
    setOpen((open) => !open);
  };

  const handleSearch = ()=>{
  Router.push()
}
  const navLinks = [
    { label: 'Cart', link: '/cart' },
    { label: 'Login', link: '/login' },
    { label: 'Profile', link: '/profile' },
  ];

  return (
    <div className='navbar_container'>
      <div className='navbar_logo'>
        <Link href={'/'} className=''>
          <Image height={100} width={42} src={logo} className='rounded-lg w-full' alt='logo' />
        </Link>
        <div className='flex flex-row mx-5'>
          <Image height={20} width={20} src={Search} className='rounded-lg mx-5' alt='logo' />
        <input className='text-black' type="text" placeholder="Search.." value={SearchValue} onChange={(e)=>{
          setSearchValue(e.target.value)
        }}></input>

          <input type='submit' onClick={handleSearch} className='mx-5'/>
 
  

        </div>

        
       
        <button onClick={Toggle}>
          <Image height={35} width={35} src={hamburger} alt='logo' className='md:hidden' />
        </button>
      </div>
      <div className={`${open ? 'flex ' : 'hidden'} md:flex navbar_menu`}>
        {navLinks.map((navLink, index) => {
          return (
            <Link key={index} href={navLink.link} className='navbar_links'>
              {navLink.label.toUpperCase()}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
