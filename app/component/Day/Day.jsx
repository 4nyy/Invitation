import React from 'react';
import './Day.css'
function Day(props) {
    return (
        <div className='Day-container'>
            <div className='Day-wrap'>
                <p>days</p>
                <div className='Day-in-1'>
                    <div className='Day-in-2'>
                        <p className='name-scheadule'>0</p>
                    </div>
                    <div className='Day-in-2'>
                        <p className='name-scheadule'>1</p>
                    </div>
                </div>
            </div>

            <div className='Day-wrap'>
                <p>hours</p>
                <div className='Day-in-1'>
                    <div className='Day-in-2'>
                        <p className='name-scheadule'>2</p>
                    </div>
                    <div className='Day-in-2'>
                        <p className='name-scheadule'>4</p>
                    </div>
                </div>
            </div>

            <div className='Day-wrap'>
                <p>minutes</p>
                <div className='Day-in-1'>
                    <div className='Day-in-2'>
                        <p className='name-scheadule'>6</p>
                    </div>
                    <div className='Day-in-2'>
                        <p className='name-scheadule'>0</p>
                    </div>
                </div>
            </div>

            <div className='Day-wrap'>
                <p>seconds</p>
                <div className='Day-in-1'>
                    <div className='Day-in-2'>
                        <p className='name-scheadule'>6</p>
                    </div>
                    <div className='Day-in-2'>
                        <p className='name-scheadule'>0</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Day;