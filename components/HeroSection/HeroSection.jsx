import { useTranslation } from 'react-i18next';
import LanguageSelector from "../../public/src/LanguageSelector";


import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import PDFViewer from '../pdf/pdf';

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const HeroSection = () => {
    const { t } = useTranslation();
  const { titleData } = useContext(NFTMarketplaceContext);
  const router = useRouter();
  return (
   
    // <!-- Banner -->
    <div className="banner layer style--three overlay ov-hidden pb-5" data-bg-img="assets/img/bg/banner-bg4.png">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    {/* <!-- Banner Content --> */}
                    <div className="banner-content text-white mb-5 mb-lg-0">
                        <h5>{t('Another way to live the Art')}</h5>
                        <h1><span className="mr-4 text-white">Phygital</span> Art <span>NFTs</span></h1>
                        <p className='mb-3'>{t('descriptionHero')}</p>
                        {/* <p className='pt-0'>{t('desHero')}</p> */}
                        {/* <ul className="list-info text-white">
                            <li>
                                <h4><span className="counter">3</span>k<span className="c1">+</span></h4>
                                <h6>Artwork</h6>
                            </li>
                            <li>
                                <h4><span className="counter">9</span>k<span className="c1">+</span></h4>
                                <h6>Auction</h6>
                            </li>
                            <li>
                                <h4><span className="counter">6</span>k<span className="c1">+</span></h4>
                                <h6>Artist</h6>
                            </li>
                        </ul> */}
                        <div className="button-group flex-column flex-sm-row align-items-start align-items-sm-center">
                            {/* <a href="/explore" className="btn mb-3 mb-sm-0 text-white p-2">
                                <Image src={images.disc} alt="" className="svg " />
                                <span className={Style.explore}>{t('Explore NFT')}</span>
                            </a> */}
                            <PDFViewer />

                            {/* <button  onClick={handleViewPDF} className="btn text-white">
                            <Image src={images.disc} alt="" className="svg " />
                                <span className={Style.explore} >White Paper in English</span>
                            </button> */}
                        </div>
                    </div>
                    {/* <!-- End Banner Content --> */}
                </div>
                <div className="col-lg-6">
                    {/* <!-- Banner IMG --> */}
                    <div class="banner-img move-img">
                        {/* <!-- Vdo btn --> */}

                        {/* <!-- End Vdo btn --> */}

                        <Image src={images.digitalArt} className="ms-xl-2" alt="" />
                        {/* <div className="banner-small-img d-sm-block  d-md-block"> */}
                        {/* <a href="https://youtu.be/xxRAC09cWAU" > */}
           
            
                        {/* <Image src={images.play2} alt="" className="svg"  width={200} /> */}
                           {/* </a> */}
                        
                            {/* <Image src={images.coin} alt="" width={200} height={100} /> */}
                        {/* </div> */}
                    </div>
                    {/* <!-- End Banner IMG --> */}
                </div>
            </div>
        </div>
    </div>
    

































    // <div className={Style.heroBg}>
    // <div className={Style.heroSection}>
    //   <div className={Style.heroSection_box}>
    //     <div className={Style.heroSection_box_center}>

    //       <h1>{titleData} </h1>
    //       <p>
    //       At IngressDefi, we're excited about a brand new type of digital good called a non-fungible token, or NFT. NFTs have exciting new properties: they’re unique, provably rare, tradeable, and usable across multiple applications.
    //       </p>
    //       <Button
    //       classStyle={Style.amghazi}
    //         btnName="Start your search"
    //         handleClick={() => router.push("/searchPage")}
    //       />

    //     </div>
    //     <div className={Style.heroSection_box_right}>
    //       <Image
    //         src={images.hero}
    //         alt="Hero section"
    //         width={600}
    //         height={600}
    //       />
    //     </div>
    //   </div>
    // </div>
    //  </div>
  );
};

export default HeroSection;
