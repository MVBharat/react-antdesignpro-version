import React, { useState } from 'react';
import './Navbar.css';
import user from '../../images/bharat.jpg';
import notification from '../../images/notification.png'
import search from '../../images/search.png'

function Navbar() {
    const [show, setshow] = useState(false)

    return (
        <header className="navbar">
            <nav>
                <div>
                    <ul className="nav-items">
                        <li  >
                            <img src={search} alt="search" className="serach-icon" onClick={() => setshow(!show)} />
                            {show ?
                                <input type="text" className="serach" />
                                : ''}
                        </li>
                        <li>1</li>
                        <li> <img src={notification} alt="notification" className="userprofile" /></li>
                        <li>
                            <span className="user-profile-details">
                                <img src={user} alt="user" className="userprofile" />
                            </span>
                        </li>
                        <li>Bharat</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
