import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
// translation
import { useTranslation } from 'react-i18next';
import LanguageSelector from "../../public/src/LanguageSelector";
import MobileNavbar from '../MobileNav/mobilenav';
import { useMediaQuery } from 'react-responsive';


import { DiJqueryLogo } from "react-icons/di";
//----IMPORT ICON
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import {BsBoxArrowInDownRight} from "react-icons/bs"
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import {BsCaretDownFill} from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";






// const moralisConfig: MoralisConfig = {
//   apiKey: "MORALIS_API_KEY",
// };

// ReactDOM.render(
//   <MoralisProvider config={moralisConfig}>
//     <App />
//   </MoralisProvider>,
//   document.getElementById("root"),
// );

//INTERNAL IMPORT
import Style from "./NavBar.module.css";
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";
import { Button, Error } from "../componentsindex";
import images from "../../img";
import TranslationExample from "../translation/translation";

//IMPORT FROM SMART CONTRACT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";
// import { useTranslation } from "next-i18next";

const NavBar = () => {


  const [userName, setUserName] = useState('');
const [ethAddress,setEthAddress]=useState('');
const [profileUrl,setProfileUrl]=useState('');
// Retrieve user data from localStorage on the client side
useEffect(() => {
  const userData = JSON.parse(localStorage.getItem('user'));

  if (userData) {
    const userName = userData.name || 'IngressDefi User #'+userData.id;
    setUserName(userName);
    const eth = userData.eth_address || null;
    setEthAddress(eth);
    const profileUrl = userData.image_url || images.user1;
    setProfileUrl(profileUrl);
  }
}, []);

  const { t } = useTranslation();
// mobile nav
const isMobile = useMediaQuery({ maxWidth: 1199});

  //----USESTATE COMPONNTS
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const router = useRouter();

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText == "Help Center") {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openDiscover = () => {
    if (!discover) {
      setNotification(false);
      setDiscover(true);
      setHelp(false);
      setProfile(false);
    } else {
      setDiscover(false);
    }
  };
  const openHelp = () => {
    if (!help) {
      setNotification(false);
      setDiscover(false);
      setHelp(true);
      setProfile(false);
    } else {
      setHelp(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setHelp(false);
      setDiscover(false);
      setNotification(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

  //SMART CONTRACT SECTION
  const { currentAccount, connectWallet,disconnectWallet, openError } = useContext(
    NFTMarketplaceContext
  );

  return (



    
    <header className="header  ">
       


       

        <div className="header-main style--two love-sticky fixed-top code headerBorder">
            <div className="container">
                <div className="header-inner position-relative px-0 bg-transparent">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6 col-sm-9 col-6">
                            <div class="d-flex align-items-center">
                                {/* <!-- Start Logo --> */}
                                <div  className={Style.mainlogo}>
                                {/* <h1>{t('greeting', { name: 'John' })}</h1> */}
                                    <a href="/">
                                    <Image    src={images.logosefid} onClick={() => router.push("/")} />
                                    
                                        {/* <img src="assets/img/logo.svg" className="main-logo" alt="" />
                                        <img src="assets/img/sticky-logo.svg" className="sticky-logo" alt="" /> */}
                                    </a>
                                </div>
                                
                                {/* <!-- End of Logo --> */}

                                {/* <!-- Search Form --> */}
                                <form className="search-form d-none d-sm-block ms-4" action="#">
                                    <div className="form-group">
                                        <button type="submit" className="mr-3">
                                            <Image src={images.searchImg} className="svg " alt="" />
                                        </button>
                                        

                                        <input type="text" className="form-control text-white inputSearch w-100  mb-0 ml-4"  />
                                        
                                    </div>
                                    
                                </form>
                                {/* <!-- End Search Form --> */}
                                <LanguageSelector />
                            </div>
                        </div>

                        <div
                            className="col-lg-8 col-md-6 col-sm-3 col-6 d-flex align-items-center justify-content-end position-static">
                            <div className="nav-wrapper d-flex align-items-center">
                              
                                <div className="nav-wrap-inner">
                                    {/* <!-- Nav --> */}
                                    <ul className="nav">
                                    <li >
                                        <a className="text-wite">NFTs</a>
                                        <ul className="sub-menu">
                                            <li><a href="/explore" className={Style.link}>{t('explore')}</a></li>
                                            <li><a href="/collection" className={Style.link}>{t('collection')}</a></li>
                                        </ul>
                                    </li>
                                    {/* <li><a href="/" className={Style.link}>WhitePaper</a></li> */}
                                    {/* <li><a href="/ourToken" className={Style.link}>ICO</a></li> */}
                                    <li >
                                        <a className="text-white">{t('Activity')}</a>
                                        <ul className="sub-menu">
                                            <li><a href="/ourToken" className={Style.link}>ICO</a></li>
                                            <li><a href="/roadmap" className={Style.link}>{t('road map')}</a></li>
                                            <li ><a href="/" className={Style.link}>Blog</a>
                                            </li>
                                            
                                        </ul>
                                    </li>
                                    <li >
                                        <a className="text-wite">{t('contact')}</a>
                                        <ul className="sub-menu">
                                        <li ><a href="/aboutus" className={Style.link}>{t('about us')}</a>
                                            </li>
                                            <li><a href="/contactus" className={Style.link}>{t('contact us')}</a></li>
                                            <li><a href="/HelpCenter" className={Style.link}>{t('help center')}</a></li>
                                        </ul>
                                    </li>
                                    <li >
                                        <a className="text-wite">{t('event')}</a>
                                        <ul className="sub-menu">
                                        <li ><a href="/ourEvent" className={Style.link}>MATERA</a>
                                            </li>
                                            <li><a href="/Roma" className={Style.link}>ROMA</a></li>
                                            
                                        </ul>
                                    </li>
                                        
                                        {currentAccount != "" ?<li ><a className="text-wite"><span className="pr-4">Profile </span><BsBoxArrowInDownRight/></a>
                                        {/* { currentAccount.toString().substring(0,4)}...  */}
                                        
                                        <ul className="sub-menu">
  {/* <li> */}
    {/* <a href="/contactus" className={Style.link}> */}
  <div className={Style.profile}>
      <div className={Style.profile_account}>
        <Image
          src={profileUrl}
          alt="user profile"
          width={50}
          height={50}
          className={Style.profile_account_img}
        />

        <div className={Style.profile_account_info}>
        <p>{userName ? userName : "Unknown User"}</p>
        <small>{ethAddress ? ethAddress.slice(0, 6)+'...' : "ETH ADDRESS NOT FOUND"}</small>
        </div>
      </div>

      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            {/* <FaUserAlt /> */}
            <p>
            <a href="/author">My Profile</a>
              {/* <a href={{ pathname: "/author" }}>My Profile</a> */}
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            {/* <FaRegImage /> */}
            <p>
              <a href="/author">My Items</a>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            {/* <FaUserEdit /> */}
            <p>
              <a href= "/account">Edit Profile</a>
            </p>
          </div>
        </div>

        {/* <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
            <MdHelpCenter />
            <p>
              <Link href={{ pathname: "/contactus" }}>Help</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <TbDownload />
            <p>
              <Link href={{ pathname: "/aboutus" }}>About Us</Link>
            </p>
          </div>
        </div> */}
      </div>
    </div>
  {profile && <Profile currentAccount={currentAccount} />}
    {/* </a> */}
    {/* </li> */}

</ul>
                                        
                                        
                                        
                                        </li>
                                        :<li className="d-none hidden"><a >jhkhkjh</a>
                                        <ul className="d-none">
  hi
</ul>
                                        </li> }
                                        
            

                                        {/* <li>
                                            <a href="#">Blog</a>
                                            <ul class="sub-menu">
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="blog-details.html">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li className={Style.link}><a href="/connectWallet" className={Style.link}>Connect Wallet</a></li>
                                        <li><a href="/uploadNFT" className={Style.link}>Upload NFT</a></li>
                                        <li><a href="/explore" className={Style.link}>explore</a></li>
                                        <li><a href="/contactus" className={Style.link}>Contact</a></li> */}
                                        {/* <li><a href="/ourToken" className={Style.link}>Our Token</a></li> */}
                                    </ul>
                                    {/* <!-- End Nav --> */}
                                </div>

                                <div className="d-none d-md-flex align-items-center ms-4">
                                    {/* <a href="create.html" className="btn">
                                        <img src="assets/img/icons/create-icon.svg" alt="" className="svg" />
                                        Create
                                    </a> */}

              <div>
                    {currentAccount == '' ? (
                      <Button btnName={t('connect')} handleClick={() => connectWallet()} />
                    ) : (
                      <div>
                        <Button
                          btnName="Upload NFT"
                          handleClick={() => router.push("/uploadNFT")}
                        />
                        {/* <Button btnName={t('Disconnect')} handleClick={() => disconnectWallet()} /> */}
                        


                      </div>
                    )}
                  </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                {isMobile && <MobileNavbar className="text-white" />}
            </div>
            
        </div>
        
        {/* <!-- End Header Main --> */}
       
    </header>
   





































    
    
  );
};

export default NavBar;
