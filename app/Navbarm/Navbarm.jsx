import React from 'react';
import ScrollLink from '../component/Linkscroll/ScrollLink';
import './Navbarm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRing, faImage, faCalendar } from '@fortawesome/free-solid-svg-icons';
function Navbarm(props) {
    return (
        <nav className="Navbar-m"  style={props.togle}>
            <ScrollLink to="bridge">
                <div className='Navbar-click'>
                    <FontAwesomeIcon className='icon' icon={faHeart} />
                    <p className='Navbarm-teks'>Bride & Groom</p>
                </div>
            </ScrollLink>
            <ScrollLink to="wedding">
                <div className='Navbar-click'>
                    <FontAwesomeIcon className='icon' icon={faRing} />
                    <p className='Navbarm-teks'>Wedding</p>
                </div>
            </ScrollLink>
            <ScrollLink to="moment">
                <div className='Navbar-click' >
                    <FontAwesomeIcon className='icon' icon={faImage} />
                    <p className='Navbarm-teks'>Our Moments</p>
                </div>
            </ScrollLink>
            <ScrollLink to="">
                <div className='Navbar-click'>
                    <FontAwesomeIcon className='icon' icon={faCalendar} />
                    <p className='Navbarm-teks' >RSVP</p>
                </div>
            </ScrollLink>
        </nav>
    );
}

export default Navbarm;