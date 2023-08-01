'use client'
import barcode from '../image/qr-code.png'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faX} from '@fortawesome/free-solid-svg-icons';
import React,{useState} from 'react';
import './GiftSend.css';
function GiftSend({ setGiftActive, setPosition }) {
    const[barcodeActive,setBarcodeActive]=useState(false)
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
                    <div className='Bank-wrapper'>
                        <button className={barcodeActive ? 'Bank-btn' : 'Bank-btn B-active'} onClick={() => setBarcodeActive(false)}>BANK ABC</button>
                        <button className={barcodeActive ? 'Bank-btn B-active' : 'Bank-btn'}onClick={() => setBarcodeActive(true)}>BANK BCD</button>
                    </div>
                    <div className='Bank-barcode'>
                        {barcodeActive ? 
                        <div className='barcode-wrapper'>
                            <Image  
                                src={barcode}
                                className='image-barcode'
                            />
                            <div>
                                <p className='barcode-desk'>Lorem - 298198298918</p>
                            </div>
                        </div>
                        : 
                        <div className='barcode-wrapper'>
                            <Image  
                                className='image-barcode'
                                src={barcode}
                            />
                            <div>
                                <p className='barcode-desk'>Ipsum - 2384159759757</p>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GiftSend;