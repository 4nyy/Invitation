'use client';
import React, { useState } from 'react';
import './Moments.css'
import Image from 'next/image';
import nol from '../image/0.jpg'
import satu from '../image/1.jpg'
import dua from '../image/2.jpg'
import tiga from '../image/3.jpg'
import empat from '../image/4.jpg'
import lima from '../image/5.jpg'
function Moments(props) {
    const image = [
        nol,
        satu,
        dua,
        tiga,
        empat,
        lima
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <div className='Moments-container' id={props.id}>
            <h1 className='Bridge-title'>Our Moments</h1>
            <div className='Moments-wrapper'>
                <div className='corusel'>

                    <Image
                        className='Image-moment-corusel image-active'
                        src={image[currentIndex]}
                    />
                    <div className='Btn-corusel-wrap'>
                        <button className='Btn-corusel' onClick={() => {
                            const prevIndex = currentIndex - 1 < 0 ? image.length - 1 : currentIndex - 1;
                            setCurrentIndex(prevIndex);
                        }}>Prev</button>
                        <button className='Btn-corusel' onClick={() => {
                            const nextIndex = currentIndex + 1 >= image.length ? 0 : currentIndex + 1;
                            setCurrentIndex(nextIndex);
                        }}>Next</button>
                    </div>
                </div>
                <div className='Moments-pick'>
                    <button
                        className={currentIndex === 0 ? 'pick active' : 'pick'}
                        onClick={() => setCurrentIndex(0)}
                    >
                        <Image
                            className='Image-moment-corusel'
                            src={nol}
                        />
                    </button>
                    <button
                        className={currentIndex === 1 ? 'pick active' : 'pick'}
                        onClick={() => setCurrentIndex(1)}
                    >
                        <Image
                            className='Image-moment-corusel'
                            src={satu}
                        />
                    </button>
                    <button
                        className={currentIndex === 2 ? 'pick active' : 'pick'}
                        onClick={() => setCurrentIndex(2)}
                    >
                        <Image
                            className='Image-moment-corusel'
                            src={dua}
                        />
                    </button>
                    <button
                        className={currentIndex === 3 ? 'pick active' : 'pick'}
                        onClick={() => setCurrentIndex(3)}
                    >
                        <Image
                            className='Image-moment-corusel'
                            src={tiga}
                        />
                    </button>
                    <button
                        className={currentIndex === 4 ? 'pick active' : 'pick'}
                        onClick={() => setCurrentIndex(4)}
                    >
                        <Image
                            className='Image-moment-corusel'
                            src={empat}
                        />
                    </button>
                    <button
                        className={currentIndex === 5 ? 'pick active' : 'pick'}
                        onClick={() => setCurrentIndex(5)}
                    >
                        <Image
                            className='Image-moment-corusel'
                            src={lima}
                        />
                    </button>
                </div>
            </div>
            <iframe className='Live-in' src="https://www.youtube.com/embed/8ToWc3L3fIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div >
    );
}

export default Moments;