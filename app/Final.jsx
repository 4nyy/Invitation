'use client'
import './page.css'
import ScrollLink from './component/Linkscroll/ScrollLink';
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
export default function Home() {
  const [isNavbar, setNavbar] = useState(false);
  const [isPosition, setPosition] = useState(false)
  const [opacity, setOpacity] = useState(0);
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
    <div className={isPosition ? 'container position' : 'container'}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Parisienne&display=swap" rel="stylesheet" />
      <body className={isPosition ? 'position':''}/>
      <div className="wrapper">
        {isNavbar ?
          <Navbarm togle={isNavbar ? {visibility:"visible"}:{visibility : "hidden"} }/>
          :
          <nav className="nav-container">
            <div className='nav-link'>
                <h1>Lorem & Ipsum by Tsch</h1>
                <div className='nav-linkto'>
                    <ScrollLink to="bridge">Bride & Groom</ScrollLink>
                    <ScrollLink to="wedding">Wedding</ScrollLink>
                    <ScrollLink to="moment">Our Moments</ScrollLink>
                    <ScrollLink to="">RSVP</ScrollLink>
                </div>
            </div>
            <div className='nav-scrol' style={{ opacity }}>
            </div>
        </nav>
        }
        <Audioplayer />
        <div className='landing'>
          <p className='title'>The Wedding Of</p>
          <p className='name-wed'>Lorem & Ipsum</p>
        </div>

        <div className='z-index'>
          <Bridge id='bridge' />
        </div>

        <div className='z-index'>
          <Wedding id='wedding' />
        </div>

        <div className='z-index'>
          <Maps />
        </div>

        <div className='z-index'>
          <Live id='live' />
        </div>

        <div className='z-incex'>
          <Day />
        </div>

        <div className='z-index'>
          <Moments id='moment' />
        </div>

        <Gift setPosition={setPosition} />
      </div>
    </div>
  )
}
