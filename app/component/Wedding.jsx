import React from 'react';
import './Wedding.css'
function Wedding(props) {
    return (
        <div className='Wedding-container' id={props.id}>
            <div className='Wedding-card'>
                <div className='Wedding-in'>
                    <h1 className='Bridge-title'>Holly Matrimony</h1>
                    <div className='ringpg'></div>
                    <div className='scheadule'>
                        <p>Sunday, 22 December 2022</p>
                        <p>08.00</p>

                    </div>
                </div>

                <div className='line'></div>

                <div className='Wedding-btm'>
                    <h1 className='Wedding-title'>Location</h1>
                    <p className='scheadule'>Metropolitan Tower</p>
                    <p className='wedding-desk'>Jalan R.A. Kartini TB Simatupang Kav. 14 Cilandak RT.10, RT.10/RW.4, Cilandak Barat, Cilandak, Jakarta Selatan, Jakarta 12310</p>
                </div>
            </div>

            <div className='Wedding-card'>
                <div className='Wedding-in'>
                    <h1 className='Bridge-title'>Reception</h1>
                    <div className='bird'></div>
                    <div className='scheadule'>
                        <p>Sunday, 22 December 2022</p>
                        <p>13.00</p>
                    </div>
                </div>

                <div className='line'></div>

                <div className='Wedding-btm'>
                    <h1 className='Wedding-title'>Location</h1>
                    <p className='scheadule'>Metropolitan Tower</p>
                    <p className='wedding-desk'>Jalan R.A. Kartini TB Simatupang Kav. 14 Cilandak RT.10, RT.10/RW.4, Cilandak Barat, Cilandak, Jakarta Selatan, Jakarta 12310</p>
                </div>
            </div>
        </div>
    );
}

export default Wedding;