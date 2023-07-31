'use client'
import React, { useState } from 'react';
import './Live.css'
function Live(props) {
    const [toggle, setTogle] = useState(false);
    return (
        <div className='Live-container'>
            <h1 className='Bridge-title'>Live Streaming</h1>
            <div className='Live-wrapper'>
                <button className={toggle ? 'btn-Live' : 'btn-Live btn-active'} onClick={() => setTogle(false)}>Youtube</button>
                <button className={toggle ? 'btn-Live btn-active' : 'btn-Live '} onClick={() => setTogle(true)}>Zoom</button>
            </div>
            {toggle ?
                <div className='Live-live  Live-in'>
                    <div className='Live-desk'>
                        <p className='title' style={{ color: ' rgb(41, 41, 41)' }}>The Wedding Of</p>
                        <p className='name-wed'>Lorem & Ipsum</p>
                        <p className='Live-scheadule'>22 December 2022</p>
                    </div>
                    <a className='btn-zoom' href='https://pwa.zoom.us/wc/'>Go to Zoom</a>
                </div>
                :
                <iframe className='Live-in' src="https://www.youtube.com/embed/8ToWc3L3fIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            }
        </div>
    );
}

export default Live;