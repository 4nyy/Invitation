'use client';
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
export default function Home() {
  const [opacity, setOpacity] = useState(0);
  const [isNavbar, setNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY * 10;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollPosition / maxScroll;
      const newOpacity = scrollPercentage.toFixed(2); // Menggunakan 2 desimal untuk opacity

      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <main className="container">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Parisienne&display=swap" rel="stylesheet" />
      {/* NAVBAR START */}
      {isNavbar ?
        <Navbarm />
        :
        <nav className='nav-container'>
          <div className='nav-link'>
            <h1>Lorem & Ipsum by Tsch</h1>
            <div className='nav-linkto'>
              <a href="#bridge">Bride & Groom</a>
              <a href="#wedding">Wedding</a>
              <a href="#moment">Our Moments</a>
              <a href="">RSVP</a>
            </div>
          </div>
          <div className='nav-scrol' style={{ opacity }}>
          </div>
        </nav>}

      {/* NAVBAR END */}
      {/* audio */}
        <Audioplayer />
      <div className="wrapper">
        <div className='landing'>
          <p className='title'>The Wedding Of</p>
          <p className='name-wed'>Lorem & Ipsum</p>
        </div>


        {/* audio end */}
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
      </div>
    </main>
  )
}
