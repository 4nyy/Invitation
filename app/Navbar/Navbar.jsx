'use client'
import ScrollLink from '../component/Linkscroll/ScrollLink';
import React, { useState,useEffect } from 'react';
import './Navbar.css'
function Navbar(props) {
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
    return (
        <nav className={`nav-container ${props.togle}`}>
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
    );
}

export default Navbar;