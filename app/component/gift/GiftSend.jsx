'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faX} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './GiftSend.css';
function GiftSend({ setGiftActive, setPosition }) {
    return (
        <div className='Giftsend-container'>
            <div className='Giftsend-opacity'></div>
            <div className="Giftsend-wrapper">
                <div className='Giftsend-top'>
                    <div className='Giftsend-top-1'></div>
                    <div className='Giftsend-top-2'>
                        <h1 className='Bridge-title'>Wedding Gift</h1>
                        <p className='Giftsend-desk color-1'>You can send the wedding gift in the following ways.</p>
                        <p className='Giftsend-desk'>Please scan the QR code or click copy the account number</p>
                    </div>
                    <div className='Giftsend-top-1'>
                        <button className='Giftsend-btn' onClick={() => {
                            setGiftActive(false);
                            setPosition(false);
                        }}><FontAwesomeIcon className='faX' icon={faX}/></button>
                    </div>
                </div>
                <div className='Giftsend-bottom'>
                    
                </div>
            </div>
        </div>
    );
}

export default GiftSend;