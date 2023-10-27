import React from "react";
import Image from "next/image";
import { DiJqueryLogo } from "react-icons/di";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";

//INTERNAL IMPORT
import Style from "./Footer.module.css";
import images from "../../img";
import { useTranslation } from 'react-i18next';
import LanguageSelector from "../../public/src/LanguageSelector"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import { Discover, HelpCenter } from "../NavBar/index";

const Footer = () => {
  const { t } = useTranslation();
  return (

<footer className="footer footer-overlay" data-bg-img="assets/img/bg/footer-bg.png">
    <div className="footer-main pb-3 bg-transparent">
      <div className="container">
      <div className="row">
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="widget widget_about text-white style--two">
          <Image src={images.logosefid} className="footer-logo" />
        
          <p>{t('desFooter')}</p>
          <div className="socials d-flex align-items-center">
              <a href="https://www.twitter.com/" className={Style.link} target="_blank">
              <Image src={images.twitterRound} alt="" class="svg" />
              </a>
              <a href="https://www.instagram.com/" className={Style.link} target="_blank">
              <Image src={images.instagramRound} alt="" class="svg" /></a>
              <a href="https://www.pinterest.com/" className={Style.link} target="_blank">
              <Image  src={images.pint} alt="" className="svg" />
              </a>
              <a href="https://www.whatsapp.com/" className={Style.link} target="_blank">
              <Image  src={images.whatsapp} alt="" className="svg" />
              </a>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-lg-4 col-sm-6 ">
        <div className="widget widget_nav_menu">
            <h4 className="widget_title">Marketplace</h4>
            <ul>
                <li><a href="" className={Style.link}>{t('explore')}</a></li>
                <li><a href="" className={Style.link}>{t('collection')}</a></li>
                <li><a href="" className={Style.link}>ICO</a></li>
                <li><a href="" className={Style.link}>White Paper</a></li>
                
            </ul>
        </div>
      </div>
      {/* sevomin soton */}
      <div className="col-xl-2 col-lg-4 col-sm-6">
        <div className="widget widget_nav_menu">
          <h4 className="widget_title">Resource</h4>
          <ul>
          <li><a href="/blog" className={Style.link}>Blog</a></li>
          <li><a href="" className={Style.link}>Road Map</a></li>
          <li><a href="explore.html" className={Style.link}>{t('about us')}</a></li>
          <li><a href="explore.html" className={Style.link}>Partners</a></li>
          
          </ul>
        </div>
                        
      </div>
      {/* 4omin */}
      <div className="col-xl-2 col-lg-4 col-sm-6">
      {/* <!-- Widget Nav Menu --> */}
        <div className="widget widget_nav_menu">
          <h4 class="widget_title">{t('event')}</h4>
          <ul>
          <li><a href="" className={Style.link}>Matera</a></li>
          <li><a href="" className={Style.link}>Roma</a></li>
          
          </ul>
        </div>
      {/* <!-- End Widget Nav Menu --> */}
      </div>
      {/* 50min */}
      <div className="col-xl-3 col-lg-4 col-sm-8">
      {/* <!-- Widget Newsletter --> */}
      <div className="widget widget_newsletter text-white">
      <h4 className="widget_title">{t('stay with us')}</h4>
      <p>{t('desfoot2')}</p>

      <form
      action=""
      className="newslatter-form style--two sm ">
      <div className="theme-input-group">
      <input className="form-control border-0" type="email" placeholder="Email here…" />
      <button type="submit" className="submit-btn btn">
        <Image src={images.mailimp}
      alt="" className="svg"/> Subscribe</button>
      </div>
      </form>
      </div>
      {/* <!-- End Widget Newsletter --> */}
      </div>

      </div>
      </div>
    </div>
    {/* <div className="footer-middle sep-top">

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <!-- logo Wrap -->
                    <div
                    className="logo-wrap d-flex justify-content-center justify-content-xl-between flex-wrap align-items-center">
                    <Image src={images.flogo1} alt="" />
                    <Image src={images.flogo2}  alt="" />
                    <Image src={images.flogo3}  alt="" />
                    <Image  src={images.flogo4} alt="" />
                    <Image  src={images.flogo5} alt=""/>
                    </div>
                        <!-- End logo Wrap -->
                    </div>
                </div>
            </div>

    </div> */}
    <div className="footer-bottom sep-top">
    <div className="container">
                <div className="row">
                    <div class="col-md-6">
                        {/* <!-- CopyRight Content --> */}
                        <div className="copyright-content text-center text-md-start text-white">
                            © 2022 - <span class="currentYear">2023</span> <a href="www.fintechcoin.info"
                                className={Style.link}  target="_blank">Fintechcoin L.T.D</a>
                             , England
                        </div>
                        {/* <!-- End CopyRight Content --> */}
                    </div>
                    <div className="col-md-6">
                        <ul className="footer-menu justify-content-center justify-content-md-end">
                            <li><a href="/privacyPolicy" className={Style.link}>Privacy Policy</a></li>
                            <li><a href="/termOfServices" className={Style.link}>Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
    {/* <!-- Back to Top Button --> */}

    {/* <!-- End Back to Top Button --> */}

</footer>

    







    // <div className={Style.footer}>
    //   <div className={Style.footer_box}>
    //     <div className={Style.footer_box_social}>
    //       {/* <Image src={images.logo} alt="footer logo" height={100} width={100} /> */}
    //       <a href="/">
    //         <Image src={images.logo} className={Style.footer_box_social_logo} />
    //       </a>
    //       <p>
    //         The world’s first and largest digital marketplace for crypto
    //         collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
    //         exclusive digital items.
    //       </p>

    //       <div className={Style.footer_social}>
    //         <a href="#">
    //           <TiSocialFacebook />
    //         </a>
    //         <a href="#">
    //           <TiSocialLinkedin />
    //         </a>
    //         <a href="#">
    //           <TiSocialTwitter />
    //         </a>
    //         <a href="#">
    //           <TiSocialYoutube />
    //         </a>
    //         <a href="#">
    //           <TiSocialInstagram />
    //         </a>
    //       </div>
    //     </div>

    //     <div className={Style.footer_box_discover}>
    //       <h3>Discover</h3>
    //       <Discover />
    //     </div>

    //     <div className={Style.footer_box_help}>
    //       <h3>Help Center</h3>
    //       <HelpCenter />
    //     </div>

    //     <div className={Style.subscribe}>
    //       <h3>Subscribe</h3>

    //       <div className={Style.subscribe_box}>
    //         <input type="email" placeholder="Enter your email *" />
    //         <RiSendPlaneFill className={Style.subscribe_box_send} />
    //       </div>
    //       <div className={Style.subscribe_box_info}>
    //         <p>
    //           Discover, collect and sell extraordinary NFTs OpenSea is the
    //           world first and largest NFT marketplace
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Footer;
