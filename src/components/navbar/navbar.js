import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    CodesandBots
                </div>
                <div className="searchbar">
                    <input type="text" name="search" id="searchbar" placeholder="What you want to learn today?" />
                    <i class="fa fa-search search_icon"></i>
                </div>
                <div className="navbar_options">
                    <div className="navbar_option">Home</div>
                    <div className="navbar_option">My Classes</div>
                </div>
                <div className="profile_image">
                    <img src="./profile_image.jpg" alt="No image found" />
                </div>
            </div>
        </>
    )
}

export default Navbar;