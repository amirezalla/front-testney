import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  MdVerified,
  MdCloudUpload,
  MdTimer,
  MdReportProblem,
  MdOutlineDeleteSweep,
} from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet, FaPercentage } from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { BiTransferAlt, BiDollar } from "react-icons/bi";

//INTERNAL IMPORT
import Style from "./NFTDescription.module.css";
import images from "../../img";
import { Button } from "../../components/componentsindex.js";
import { NFTTabs } from "../NFTDetailsIndex";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';
import LanguageSelector from "../../public/src/LanguageSelector"

//IMPORT SMART CONTRACT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const NFTDescription = ({ nft }) => {
  const { t } = useTranslation();
  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  const [history, setHistory] = useState(true);
  const [provanance, setProvanance] = useState(false);
  const [owner, setOwner] = useState(false);

  const router = useRouter();

  const historyArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
  ];
  const provananceArray = [
    images.user6,
    images.user7,
    images.user8,
    images.user9,
    images.user10,
  ];
  const ownerArray = [
    images.user1,
    images.user8,
    images.user2,
    images.user6,
    images.user5,
  ];

  const openSocial = () => {
    if (!social) {
      setSocial(true);
      setNFTMenu(false);
    } else {
      setSocial(false);
    }
  };

  const openNFTMenu = () => {
    if (!NFTMenu) {
      setNFTMenu(true);
      setSocial(false);
    } else {
      setNFTMenu(false);
    }
  };

  const openTabs = (e) => {
    const btnText = e.target.innerText;

    if (btnText == "Bid History") {
      setHistory(true);
      setProvanance(false);
      setOwner(false);
    } else if (btnText == "Provanance") {
      setHistory(false);
      setProvanance(true);
      setOwner(false);
    }
  };

  const openOwmer = () => {
    if (!owner) {
      setOwner(true);
      setHistory(false);
      setProvanance(false);
    } else {
      setOwner(false);
      setHistory(true);
    }
  };

  //SMART CONTRACT DATA
  const { buyNFT, currentAccount } = useContext(NFTMarketplaceContext);

  return (

    <div className="col-lg-6 order-1 order-lg-0">
    {/* <!-- Item Details Content --> */}
    <div className="item-details ">
        
        {nft.name == " Promessi Sposi" ? (
        <h2 className="product-title">I Promessi sposi</h2>
        ) : (
          <h2 className="product-title">{nft.name}</h2>
        )}






        {/* <!-- Favorite --> */}
        <div className="favorites">
            <h6 className="available">{t('Available')}</h6>
            {/* <div className="love-react-wrap d-flex align-items-center">
                <div className="love-react style--two"></div>
                <div className="love-count">13.6k</div>
            </div> */}
        </div>
        {/* <!-- End Favorite --> */}

        <p className="JustifyTexT">
        PicassoDeFi, è l’unione di due conoscenze con esperienze diverse che hanno dato vita al connubio perfetto tra tradizione e innovazione.L’arte tradizionale ha come obiettivo la valorizzazione e la tutela dell’investimento del collezionista che viene realizzata attraverso fiere, mostre e cataloghi internazionali.
            {/* <a href="#" className="read-more c1">read more...</a> */}
        </p>

        <div className="row pt-1">
            <div className="col-sm-6">
                {/* <!-- Price --> */}
                <div className="price mb-4 mb-sm-0">
                    <h6>{t('item price')}</h6>
                    <h3>{Number(nft.price).toFixed(3)} BNB</h3>
                </div>
                {/* <!-- End Price --> */}
            </div>
            <div className="col-sm-6">
                {/* <!-- Countdown --> */}
                {/* <div className="countdown-wrapper">
                    <h6>Countdown</h6>

                    <ul className="countdown">
                        <li>
                            <h3 className="hours">00</h3>
                        </li>
                        <li className="ms-1 me-1"> : </li>
                        <li>
                            <h3 className="minutes">00</h3>
                        </li>
                        <li className="ms-1 me-1"> : </li>
                        <li>
                            <h3 className="seconds">00</h3>
                        </li>
                    </ul>
                </div> */}
                {/* <!-- End Countdown --> */}
            </div>
        </div>

        <div className="row mb-4 mt-30 pt-2">
            <div className="col-sm-6">
                {/* <!-- Item Quantity --> */}
                <div className="item-quantity mb-4 mb-sm-0">
                    {/* <h6>Item Quantity</h6> */}

                    {/* <!-- Quantity --> */}
                    {/* <div className="quantity d-flex align-items-center justify-content-between">
                        <h6 className="mb-0">Quantity of</h6>
                        <div>
                            <input type="text" className="input-text qty text" value="1" />
                            <span className="plus">
                             
                                <i class="fa fa-caret-up"></i>
                            </span>
                            <span className="minus">
                                <i class="fa fa-caret-down"></i>
                            </span>
                        </div>
                    </div> */}
                    {/* <!-- End Quantity --> */}
                </div>
                {/* <!-- End Item Quantity --> */}
            </div>
            <div className="col-sm-6">
                {/* <!-- Item Price --> */}
                {/* <div className="item-price">
                    <h6>Item Price</h6>

                    <div className="item-price-inner align-items-center d-flex justify-content-between">
                        <h6 className="mb-0">Amount </h6>
                        <h6 className="mb-0">1.69 ETH</h6>
                    </div>
                </div> */}
                {/* <!-- End Item Price --> */}
            </div>
        </div>

        <div className="button-group style--two">
{/* 

        {currentAccount == nft.seller.toLowerCase() ? (
                <p>You can't buy your own NFT</p>
              ) : currentAccount == nft.owner.toLowerCase() ? (
                <Button
                  icon=<FaWallet />
                  btnName="List on Marketplace"
                  handleClick={() =>
                    router.push(
                      `/reSellToken?id=${nft.tokenId}&tokenURI=${nft.tokenURI}&price=${nft.price}`
                    )
                  }
                  classStyle={Style.button}
                />
              ) : (
                <Button
                  icon=<FaWallet />
                  btnName="Buy NFT"
                  handleClick={() => buyNFT(nft)}
                  classStyle={Style.button}
                />
              )} */}

                <Button
                  icon=<FaWallet />
                  btnName={t('buy nft')}
                  handleClick={() => buyNFT(nft)}
                  classStyle={Style.button}
                />
<a href={"https://bscscan.com/token/"+nft.owner+"?a="+nft.tokenId} className="btn btn-sm text-white">{t('see on bloackchain')}</a>























          
        {/* <a className="btn btn-border btn-sm" handleClick={() => buyNFT(nft)}>Buy Nft</a> */}
            {/* <a href="" class="btn btn-border btn-sm">
              <Image  src={images.buyNow} alt="" className="svg" /> Buy Now</a> */}



            {/* <a href="" class="btn btn-sm" >
              <Image src={images.judge}
                    alt="" className="svg" />
                    List on Marketplace</a> */}
        </div>

        <div className="row mb-4 mt-4 pt-1">
            <div className="col-sm-4">
                {/* <!-- Creator --> */}
                {/* <a href="profile.html" className="hz-profile creator media mb-4 mb-sm-0"> */}
                    <div className="avatar">
                        {/* <img src="assets/img/media/creator-avatar.png" alt=""> */}
                    </div>
                    
                    <div className="content media-body">
                    <h6>{t('creator')}</h6>
                    <h5>
                   <Link href={{ pathname: "/author", query: `${nft.seller}` }} className={Style.link}>
                  <span>
                   PicassoDefi <MdVerified />
                  </span>
                 </Link>
                 </h5>



                        
                        
                    </div>
                {/* </a> */}
                {/* <!-- End Creator --> */}
            </div>
            <div className="col-sm-8">
                {/* <!-- Owner --> */}
                {/* <a href="profile.html" className="hz-profile owner media"> */}
                    <div className="avatar">
                        {/* <img src="assets/img/media/owner-avatar.png" alt=""> */}
                    </div>
                    <div className="content media-body">
                        <h6>{t('owner')}</h6>
                        <h5>{nft.owner}</h5>
                    </div>
                {/* </a> */}
                {/* <!-- End Owner --> */}
            </div>
        </div>

        {/* <!-- Tab Buttons --> */}
        <ul className="nav tab-buttons style--two">
            <li>
                <button className="active" data-bs-toggle="tab" data-bs-target="#info">Info</button>
            </li>
            {/* <li>
                <button data-bs-toggle="tab" data-bs-target="#bids">Bids</button>
            </li> */}
        </ul>
        {/* <!-- End Tab Buttons --> */}

        <div className="tab-content mb-50">
            <div className="tab-pane fade show active" id="info">
                {/* <!-- Info List --> */}
                <ul className="info-list">
                    <li>
                        <h6>{t('nft id')}</h6>
                        <h3>{nft.tokenId}</h3>
                    </li>
                    <li>
                        <h6>{t('seller address')}</h6>
                        <h3>{nft.seller}</h3>
                    </li>
                    <li>
                        <h6>{t('owner address')}</h6>
                        <h3>{nft.owner}</h3>
                    </li>
                    <li>
                        <h6>{t('description')}</h6>
                        <h3>{nft.description}</h3>
                    </li>
                </ul>
                {/* <!-- End Info List --> */}
            </div>
            {/* <div className="tab-pane fade" id="bids">
                <p>No active bids yet. Be the first to make a bid!</p>
            </div> */}
        </div>
    </div>
    {/* <!-- End Item Details Content --> */}
</div>




// <div className={Style.content_text}>
//     <h2 className={Style.content_title}>
//     {nft.name}
//     </h2>
//     <h4 className={Style.content_subtitle}>
//     <Image
//                 src={images.user1}
//                 alt="profile"
//                 width={50}
//                 height={50}
//                 className={Style.NFTDescription_box_profile_box_left_img}
//               />
//     </h4>
//     <p className={Style.content_paragraph}>
 
//     <small>Creator</small> <br />
//                 <Link href={{ pathname: "/author", query: `${nft.seller}` }}>
//                  <span>
//                   Picasso Defi <MdVerified />
//                  </span>
//                 </Link>
//     </p>
//     <p className={Style.content_paragraph}>
//     <small>Owner</small>
//     <br />
//     {nft.seller}
//     </p>
//     <p className={Style.content_paragraph}>
//     <small>Contract address</small><br />
    
//     {nft.owner}
//     </p>
//     <p className={Style.content_paragraph}>
//     <small>Token ID:</small><br />
    
//     {nft.tokenId}
//     </p>
//     <p className={Style.content_paragraph}>
//     <small>Description:</small><br />
    
//     {nft.description}

   
//     </p>
//     <p className={Style.content_paragraph}>
//     <small>Collection</small> <br />
//                <span>
//                 Ingressdefi <MdVerified />
//                </span>
//     </p>
//     <p className={Style.content_paragraph}>
//     <small>price:</small> <br />
//     {nft.price} BNB
//     </p>
//     <a href={"https://bscscan.com/token/"+nft.owner+"?a="+nft.tokenId} class= {Style.btn}>See On Blockchain</a>
//     {/* <button className={Style.button}  handleClick={() => buyNFT(nft)}>Buy Nft<button> */}
//     <button className={Style.button} handleClick={() => buyNFT(nft)}>
//       Buy NFT
//       </button>
   
    
//   </div>



    // <div className={Style.NFTDescription}>
    //   <div className={Style.NFTDescription_box}>
        
    //     <div className={Style.NFTDescription_box_share}>
    //       <p>Virtual Worlds</p>
    //       <div className={Style.NFTDescription_box_share_box}>
    //         <MdCloudUpload
    //           className={Style.NFTDescription_box_share_box_icon}
    //           onClick={() => openSocial()}
    //         />

    //         {social && (
    //           <div className={Style.NFTDescription_box_share_box_social}>
    //             <a href="#">
    //               <TiSocialFacebook /> Facebooke
    //             </a>
    //             <a href="#">
    //               <TiSocialInstagram /> Instragram
    //             </a>
    //             <a href="#">
    //               <TiSocialLinkedin /> LinkedIn
    //             </a>
    //             <a href="#">
    //               <TiSocialTwitter /> Twitter
    //             </a>
    //             <a href="#">
    //               <TiSocialYoutube /> YouTube
    //             </a>
    //           </div>
    //         )}

    //         <BsThreeDots
    //           className={Style.NFTDescription_box_share_box_icon}
    //           onClick={() => openNFTMenu()}
    //         />

    //         {NFTMenu && (
    //           <div className={Style.NFTDescription_box_share_box_social}>
    //             <a href="#">
    //               <BiDollar /> Change price
    //             </a>
    //             <a href="#">
    //               <BiTransferAlt /> Transfer
    //             </a>
    //             <a href="#">
    //               <MdReportProblem /> Report abouse
    //             </a>
    //             <a href="#">
    //               <MdOutlineDeleteSweep /> Delete item
    //             </a>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //     {/* //Part TWO */}
    //     <div className={Style.NFTDescription_box_profile}>
    //       <h1>
    //         {nft.name} #{nft.tokenId}
    //       </h1>
    //       <div className={Style.NFTDescription_box_profile_box}>
    //         <div className={Style.NFTDescription_box_profile_box_left}>
    //           <Image
    //             src={images.user1}
    //             alt="profile"
    //             width={40}
    //             height={40}
    //             className={Style.NFTDescription_box_profile_box_left_img}
    //           />
    //           <div className={Style.NFTDescription_box_profile_box_left_info}>
    //             <small>Creator</small> <br />
    //             <Link href={{ pathname: "/author", query: `${nft.seller}` }}>
    //               <span>
    //                 Picasso Defi <MdVerified />
    //               </span>
    //             </Link>
    //           </div>
    //         </div>

    //         <div className={Style.NFTDescription_box_profile_box_right}>
    //           <Image
    //             src={images.creatorbackground1}
    //             alt="profile"
    //             width={40}
    //             height={40}
    //             className={Style.NFTDescription_box_profile_box_left_img}
    //           />

    //           <div className={Style.NFTDescription_box_profile_box_right_info}>
    //             <small>Collection</small> <br />
    //             <span>
    //               Ingressdefi <MdVerified />
    //             </span>
    //           </div>
    //         </div>
    //       </div>

    //       <div className={Style.NFTDescription_box_profile_biding}>
    //         <p>
    //           <MdTimer /> <span>Auction ending in:</span>
    //         </p>

    //         <div className={Style.NFTDescription_box_profile_biding_box_timer}>
    //           <div
    //             className={
    //               Style.NFTDescription_box_profile_biding_box_timer_item
    //             }
    //           >
    //             <p>2</p>
    //             <span>Days</span>
    //           </div>
    //           <div
    //             className={
    //               Style.NFTDescription_box_profile_biding_box_timer_item
    //             }
    //           >
    //             <p>22</p>
    //             <span>hours</span>
    //           </div>
    //           <div
    //             className={
    //               Style.NFTDescription_box_profile_biding_box_timer_item
    //             }
    //           >
    //             <p>45</p>
    //             <span>mins</span>
    //           </div>
    //           <div
    //             className={
    //               Style.NFTDescription_box_profile_biding_box_timer_item
    //             }
    //           >
    //             <p>12</p>
    //             <span>secs</span>
    //           </div>
    //         </div>

    //         <div className={Style.NFTDescription_box_profile_biding_box_price}>
    //           <div
    //             className={
    //               Style.NFTDescription_box_profile_biding_box_price_bid
    //             }
    //           >
    //             <small>Current Bid</small>
    //             <p>
    //               {Number(nft.price).toFixed(3)} BNB <span>( ≈ ${Number(Number(nft.price).toFixed(3)*326).toFixed(3)} )</span>
    //             </p>
    //           </div>

    //           {/* <span>[96 in stock]</span> */}
    //         </div>

    //         <div className={Style.NFTDescription_box_profile_biding_box_button}>
    //           {currentAccount == nft.seller.toLowerCase() ? (
    //             <p>You can't buy your own NFT</p>
    //           ) : currentAccount == nft.owner.toLowerCase() ? (
    //             <Button
    //               icon=<FaWallet />
    //               btnName="List on Marketplace"
    //               handleClick={() =>
    //                 router.push(
    //                   `/reSellToken?id=${nft.tokenId}&tokenURI=${nft.tokenURI}&price=${nft.price}`
    //                 )
    //               }
    //               classStyle={Style.button}
    //             />
    //           ) : (
    //             <Button
    //               icon=<FaWallet />
    //               btnName="Buy NFT"
    //               handleClick={() => buyNFT(nft)}
    //               classStyle={Style.button}
    //             />
    //           )}

    //           <Button
    //             icon=<FaPercentage />
    //             btnName="Make offer"
    //             handleClick={() => {}}
    //             classStyle={Style.button}
    //           />
    //         </div>

    //         <div className={Style.NFTDescription_box_profile_biding_box_tabs}>
    //           <button onClick={(e) => openTabs(e)}>Bid History</button>
    //           <button onClick={(e) => openTabs(e)}>Provanance</button>
    //           <button onClick={() => openOwmer()}>Owner</button>
    //         </div>

    //         {history && (
    //           <div className={Style.NFTDescription_box_profile_biding_box_card}>
    //             <NFTTabs dataTab={historyArray} />
    //           </div>
    //         )}
    //         {provanance && (
    //           <div className={Style.NFTDescription_box_profile_biding_box_card}>
    //             <NFTTabs dataTab={provananceArray} />
    //           </div>
    //         )}

    //         {owner && (
    //           <div className={Style.NFTDescription_box_profile_biding_box_card}>
    //             <NFTTabs dataTab={ownerArray} icon=<MdVerified /> />
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default NFTDescription;
