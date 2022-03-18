import React from "react";
import './Header.css';

function Header({open, set}) {
    return (
        <div className='topbar'>
            <div className='left'>
                <a href="/" className="title">Car Rental</a>
            </div>
            <div className="right">
                <div>
                    <a href="/display" className='link2'>Display</a>
                </div>

            </div>
            
        </div>
    )
};

export default Header;