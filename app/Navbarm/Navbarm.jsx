import React from 'react';
import ScrollLink from '../component/Linkscroll/ScrollLink';
import './Navbarm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faRing,faImage,faCalendar} from '@fortawesome/free-solid-svg-icons';
function Navbarm(props) {
    return (
        <nav className='Navbar-m'>
            <ScrollLink className='Navbar-click'href="#bridge">
                <FontAwesomeIcon className='icon' icon={faHeart}/>
                <p className='Navbarm-teks'>Bride & Groom</p>
            </ScrollLink>
            <ScrollLink className='Navbar-click' href="#wedding">
                <FontAwesomeIcon className='icon' icon={faRing}/>
                <p className='Navbarm-teks'>Wedding</p>
            </ScrollLink>
            <ScrollLink className='Navbar-click' href="#moment">
                <FontAwesomeIcon className='icon' icon={faImage}/>
                <p className='Navbarm-teks'>Our Moments</p>
            </ScrollLink>
            <ScrollLink className='Navbar-click' href="">
                <FontAwesomeIcon className='icon' icon={faCalendar}/>
                <p className='Navbarm-teks' >RSVP</p>
            </ScrollLink>
        </nav>
    );
}

export default Navbarm;