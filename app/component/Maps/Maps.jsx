'use client'

import React from 'react';
import './Maps.css'

function Maps(props) {
    return (
        <div className='Maps-container'>
            <h1 className='Bridge-title'>Location Maps</h1>
            <div className='Maps-wrap'>
                <iframe className='Maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6664670932855!2d106.8222818738022!3d-6.1753870445289625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1689130630467!5m2!1sid!2sid" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}

export default Maps;