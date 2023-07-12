import React from 'react';
import './Bridge.css'
function Bridge(props) {
    return (
        <div className='bridge-container' id={props.id}>
            <h1 className='Bridge-title'>The Groom And The Bride</h1>

            <div className='bridge-image'>
                <div className='bridge-wrapper-image'>
                    <div className='imgM'></div>

                    <div className='bridge-namecomplete'>
                        <p>Lorem lorem</p>
                    </div>

                    <div className='bridge-desk'>
                        <p>1rd Son of Mr. Amet and Mrs. Dolor</p>
                    </div>

                    <div className='bridge-call'>
                        <p>Lorem</p>
                    </div>
                </div>


                <div className='bridge-dan'>
                    <h1 className='Bridge-title-dan'>&</h1>
                </div>


                <div className='bridge-wrapper-image'>
                    <div className='imgW'></div>

                    <div className='bridge-namecomplete'>
                        <p>Ipsum ipsum</p>
                    </div>

                    <div className='bridge-desk'>
                        <p>2rd Daughter of Mr. Amet and Mrs. Dolor</p>
                    </div>

                    <div className='bridge-call'>
                        <p>Ipsum</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Bridge;