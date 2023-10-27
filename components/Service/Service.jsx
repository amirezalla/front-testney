import React from "react";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import LanguageSelector from "../../public/src/LanguageSelector";


import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./Service.module.css";
import images from "../../img";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons'

const Service = () => {
    const { t } = useTranslation();
  const router = useRouter();
  return (

    // <!-- Create & Sell NFTs  -->
    <section className="pt-5  pb-90">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {/* <!-- Section Title --> */}
                    <div className="section-title style--two">
                        <h2 className="text-white">{t('Upload & Sell Your NFTs')}</h2>
                    </div>
                    {/* <!-- End Section Title --> */}
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {/* <!-- Sell NFTs --> */}
                    <ul className="selling-process-list">
                        <li>
                            <div className="icon">
                                <Image src={images.sp1} alt="" />
                            </div>
                            <div className="content">
                                <h5>{t('Setup wallet')}</h5>
                            </div>
                        </li>
                        <li className="selling-sep">
                            <Image src={images.spSep} alt="" />
                        </li>
                        <li>
                            <div className="icon">
                                <Image src={images.sp2} alt="" />
                            </div>
                            <div className="content">
                                <h5>{t('Upload NFT')}</h5>
                            </div>
                        </li>
                        <li className="selling-sep">
                            <Image src={images.spSep} alt="" />
                        </li>
                        <li>
                            <div className="icon">
                                <Image src={images.sp3} alt="" />
                            </div>
                            <div className="content">
                                <h5>{t('Payment')}</h5>
                            </div>
                        </li>
                        <li className="selling-sep">
                            <Image src={images.spSep} alt="" />
                        </li>
                        {/* <li>
                            <div className="icon">
                                <Image src={images.sp4} alt="" />
                            </div>
                            <div className="content">
                                <h5>Payment Bill</h5>
                            </div>
                        </li>
                        <li className="selling-sep">
                            <Image src={images.spSep} alt="" />
                        </li> */}
                        <li>
                            <div className="icon">
                                <Image src={images.sp5} alt="" />
                            </div>
                            <div className="content">
                                <h5>{t('NFT Shipped')}</h5>
                            </div>
                        </li>
                    </ul>
                    {/* <!-- End Sell NFTs --> */}
                </div>
            </div>
        </div>
    </section>







    






























    // <div className={Style.container}>
        
    //     {/* <div className={Style.title}>
    //         <h1>Create and sell your NFTs</h1>
    //         <h6>Most popular phisical and digital nft market place</h6>
    //     </div> */}
    //     <div className={Style.services}>
           
    //         <div className={Style.servicebBox} >
    //             <div  className={Style.serviceImage} >
    //             <Image
    //         src={images.create1}
    //          alt="Filter & Discover"

    //       />
    //                 {/* <img url='../../img/aida.gif' alt="" /> */}
    //             </div>
    //             <h3>Set Up Your Wallet</h3>
    //             <p>Sed ut perspiciatis unde omnste natus error sit voluptate </p>
    //             <span><a href="https://metamask.io/download/"><FontAwesomeIcon icon={faArrowRight} /></a></span>
    //         </div>
    //         <div className={Style.servicebBox} >
    //             <div  className={Style.serviceImage} >
    //             <Image
    //         src={images.icon11}
    //          alt="Filter & Discover"

    //       />
    //                 {/* <img src="icon-11.svg" alt=""> */}
    //             </div>
    //             <h3>Create Your Collection</h3>
    //             <p>Sed ut perspiciatis unde omnste natus error sit voluptatem</p>
    //             <span><a href="/collection"><FontAwesomeIcon icon={faArrowRight} /></a></span>
    //         </div>
    //         <div className={Style.servicebBox} >
    //             <div className={Style.serviceImage}>
    //             <Image
    //         src={images.icon12}
    //          alt="Filter & Discover"

    //       />
    //             </div>
    //             <h3>Add Your NFTs</h3>
    //             <p>Sed ut perspiciatis unde omnste natus error sit voluptatem</p>
    //             <span><a href="/uploadNFT"><FontAwesomeIcon icon={faArrowRight} /></a></span>
    //         </div>
    //         <div className={Style.servicebBox}>
    //             <div className={Style.serviceImage}>
    //             <Image
    //         src={images.icon13}
    //          alt="Filter & Discover"

    //       />
    //             </div>
    //             <h3>List Them For Sale</h3>
    //             <p>Sed ut perspiciatis unde omnste natus error sit voluptatem</p>
    //             <span><a href="/collection"><FontAwesomeIcon icon={faArrowRight} /></a></span>
    //         </div>
    //     </div>
    // </div>






    // <div className={Style.service}>
    //   <div className={Style.service_box}>
    //     <div className={Style.service_box_item}>
    //       <Image
    //         src={images.metamask}
    //         alt="Filter & Discover"
    //         width={100}
    //         height={100}
    //       />
    //       <p className={Style.service_box_item_step}>
    //         <span>Step 1</span>
    //       </p>
    //       <h3>Install & Connect Metamask</h3>
    //       <p>
    //         Download <a className={Style.download} href="https://metamask.io/download/">Metamask</a> from 
    //       </p>
    //     </div>
    //     <div className={Style.service_box_item}>
    //       <Image
    //         src={images.create}
    //         alt="Filter & Discover"
    //         width={100}
    //         height={100}
    //       />
    //       <p className={Style.service_box_item_step}>
    //         <span>Step 2</span>
    //       </p>
    //       <h3>Create (optional) </h3>
    //       <p>
    //         You can <a className={Style.download} href="/uploadNFT">upload</a> your own Nft to be traded from 
    //       </p>
    //     </div>
    //     <div className={Style.service_box_item}>
    //       <Image
    //         src={images.discover}
    //         alt="Connect Wallet"
    //         width={100}
    //         height={100}
    //       />
    //       <p className={Style.service_box_item_step}>
    //         <span>Step 3</span>
    //       </p>
    //       <h3>Filter & Discover</h3>
    //       <p>
    //         You can <a className={Style.download}
    //              href="/searchPage">discover</a> lot of arts and own you favorite one.
    //       </p>
    //     </div>
    //     <div className={Style.service_box_item}>
    //       <Image
    //         src={images.trade}
    //         alt="Filter & Discover"
    //         width={100}
    //         height={100}
    //       />
    //       <p className={Style.service_box_item_step}>
    //         <span>Step 4</span>
    //       </p>
    //       <h3>Start trading</h3>
    //       <p>
    //         Now sell, buy and trade the <a className={Style.download} href="/searchPage">NFTs</a> and have fun.
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Service;
