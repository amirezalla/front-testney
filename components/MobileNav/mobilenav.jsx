import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Style from "./MobileNavbar.module.css"

const MobileNavbar = () => {
  return (
    <Menu
      className={Style.MenuMob}
      burgerButtonClassName="custom-burger-button"
      styles={menuStyles}
    >
      <nav>
      <div class={Style.menu}>
            <li class={Style.item} id="profile">
                <a href="#profile" class={Style.btn1}><i class="far fa-user" aria-hidden="true"></i> NFTs</a>
                <div class={Style.smenu}>
                    <a href="/explore">Explore</a>
                    <a href="/collection">Collection</a>
                </div>
            </li>
            <li class={Style.item} id="message">
                <a href="#message" class={Style.btn1}> <i class="far fa-envelope" aria-hidden="true"></i>Activity</a>
                <div class={Style.smenu}>
                    <a href="/ourToken">ICO</a>
                    <a href="/roadmap">Roadmap</a>
                    <a href="/">Blog</a>
                </div>
            </li>
            <li class={Style.item} id="Settings">
                <a href="#Settings" class={Style.btn1}><i class="fas fa-cog" aria-hidden="true"></i> contact</a>
                <div class={Style.smenu}>
                    <a href="/aboutus">About Us</a>
                    <a href="/contactus">Contact Us</a>
                    <a href="/HelpCenter">Help Center</a>
                </div>
            </li>
            <li class={Style.item} id="logout">
                <a href="#logout" class={Style.btn1}><i class="fas fa-sign-out-alt"></i> Event</a>
                <div class={Style.smenu}>
                    <a href="/ourEvent">Matera</a>
                    <a href="/Roma">Roma</a>
                    
                </div>
            </li>
        </div>
        </nav>


      
       {/* <nav>
        <ul class= {Style.menu}>
            <li><a href="#">NFTs</a>
            <ul class={Style.submenu}>
                    <li><a href="/explore">Explore</a></li>
                    <li><a href="/collection">Collection</a></li>
                    
                </ul>
            </li>
            <li>
                <a href="#">Activity</a>
                <ul class={Style.submenu}>
                    <li><a href="/ourToken">ICO</a></li>
                    <li><a href="/roadmap">Roadmap</a></li>
                    <li><a href="/">Blog</a></li>
                </ul>
            </li>
            <li><a href="#">contact</a>
            
            <ul class={Style.submenu}>
                    <li><a href="/aboutus">About Us</a></li>
                    <li><a href="/contactus">Contact Us</a></li>
                    <li><a href="/HelpCenter">Help Center</a></li>
                </ul>
            </li>
            <li><a href="#">event</a>
            <ul class={Style.submenu}>
                    <li><a href="/ourEvent">Matera</a></li>
                    <li><a href="/Roma">Roma</a></li>
                    
                </ul> 
            </li>
        </ul>
    </nav> */}
    </Menu>
  );
};

export default MobileNavbar;

const menuStyles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '20px',
    height: '20px',
    right:'30px',
    top:'45%',
    // right: '10%',
    // top: "calc(100% -92%)"
  },
  bmBurgerBars: {
    background: 'white', // Set the color of the burger menu icon
  },
};

