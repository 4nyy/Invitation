'use client'
import Image from 'next/image';
import imgGift from '../image/gift.png'
import './Gift.css';
import { useState } from 'react';
import GiftSend from './GiftSend';
function Gift({setPosition}) {
    const[giftActive,setGiftActive] = useState(false)
    return (
        <div className='Gift-container'>
            <div className='Gift-bg'>
                <div className='Gift-content'>
                    <div className='Gift-1'>
                    </div>
                    <div className='Gift-2'>
                        <h1 className='gift-title'>Wedding Gift</h1>
                        <p className='Gift-desk'>For family and friends who want to send gift,<br/>
                            you can send it through this button below.</p>
                        <button className='Gift-btn' onClick={() =>{
                            setGiftActive(true);
                            setPosition(true);
                        }}>send gift</button>
                    </div>
                    <div className='Gift-1'>
                        <Image src={imgGift} width={180} height={180}/>
                    </div>
                    {giftActive ? 
                    <GiftSend setGiftActive={setGiftActive} setPosition={setPosition} giftActive={giftActive}/>
                    : ""}
                </div>
            </div>
        </div>
    );
}

export default Gift;