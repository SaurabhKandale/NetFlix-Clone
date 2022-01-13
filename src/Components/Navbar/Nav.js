import React from 'react'
import './nav.css'

function Nav() {
    return (
        <div className="navbar" >
            <div >
                <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="Netflix-Logo" className="logo" />
            </div>
            <div>
                <span>Hi User,</span><span className="fa fa-user"></span>
            </div>
        </div>
    )
}

export default Nav;
