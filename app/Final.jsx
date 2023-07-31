'use client'
import './page.css'
import Bridge from './component/Bridge'
import React, { useState, useEffect } from 'react'
import Wedding from './component/Wedding';
import Live from './component/Live/Live';
import Moments from './component/moments/Moments';
import Day from './component/Day/Day';
import Maps from './component/Maps/Maps';
import Navbarm from './Navbarm/Navbarm';
import Audioplayer from './component/Audio/Audioplayer';
import Gift from './component/gift/Gift';
import Navbar from './Navbar/Navbar';
export default function Home() {
  const [isNavbar, setNavbar] = useState(false);
  const [isPosition, setPosition] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return (
    <div className={isPosition ? 'container position' : 'container'}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Parisienne&display=swap" rel="stylesheet" />
      <body className={isPosition ? 'position':''}/>
      <div className="wrapper">
        {/* NAVBAR START */}
        {isNavbar ?
          <Navbarm togle={isNavbar ? "":"hidden" }/>
          :
          <Navbar togle={isNavbar ? "hidden":"" }/>
        }
        {/* NAVBAR END */}
        {/* audio */}
        <Audioplayer />
        {/* audio end */}
        <div className='landing'>
          <p className='title'>The Wedding Of</p>
          <p className='name-wed'>Lorem & Ipsum</p>
        </div>


        {/* Bridge */}
        <div className='z-index'>
          <Bridge id='bridge' />
        </div>

        {/* Wedding */}
        <div className='z-index'>
          <Wedding id='wedding' />
        </div>

        {/* Maps */}
        <div className='z-index'>
          <Maps />
        </div>

        {/* Live */}
        <div className='z-index'>
          <Live id='live' />
        </div>

        {/* Day */}
        <div className='z-incex'>
          <Day />
        </div>

        {/* MOMENTS */}
        <div className='z-index'>
          <Moments id='moment' />
        </div>

        <Gift setPosition={setPosition} />
      </div>
    </div>
  )
}
