import React, { useState,useEffect } from "react";
import Image from "next/image";
import images from "../../img";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import Link from "next/link";
// translation
import { useTranslation } from 'react-i18next';
import LanguageSelector from "../../public/src/LanguageSelector";

//INTERNAL IMPORT
import Style from "./NFTCardTwo.module.css";
import { LikeProfile } from "../../components/componentsindex";

const NFTCardTwo = ({ NFTData }) => {
    const [categories, setCategories] = useState([]);
    const [NFTS, setNFTS] = useState( NFTData );
    const [activeFilter, setActiveFilter] = useState('*'); // Track the currently selected filter



    useEffect(() => {
        // Make an API request to fetch categories
        fetch('https://apingressdefi.com/api/category/list')
          .then((response) => response.json())
          .then((data) => setCategories(data))
          .catch((error) => console.error('Error fetching categories:', error));
      }, []);

    const fetchNFTData = (category) => {
    // Make an API request to fetch NFT data based on the selected category
    fetch(`https://apingressdefi.com/api/nft/category/${category}`)
        .then((response) => response.json())
        .then((data) => {
            setNFTData(data);
            setActiveFilter(category); // Update the active filter
            }
        )
        .catch((error) => console.error('Error fetching NFT data:', error));
    };

    const { t } = useTranslation();
  const [like, setLike] = useState(false);
  const [likeInc, setLikeInc] = useState(21);

  const likeNFT = () => {
    if (!like) {
      setLike(true);
      setLikeInc(23);
    } else {
      setLike(false);
      setLikeInc(23 + 1);
    }
  };

  return (

    // <!-- Feeds -->
    <div className="container-fluid section-bg"> 
    <section className="pt-120 pb-90 ">
        <div className="container">
            <div className="row">
                <div className="col-xl-4">
                    {/* <!-- Section Title --> */}
                    <div className="section-title style--two d-md-flex d-sm-block align-items-center justify-content-between ">
                        <h2 className={Style.Feature} >{t('Featured NFTs')}</h2>

                        {/* <select className="select-rounded mt-1 me-xl-4">
                            <option value="Following">Following</option>
                            <option value="Meka_Verse">Meka_Verse</option>
                            <option value="Bored_YachtClub">Bored_YachtClub</option>
                            <option value="Bambooz_lers">Bambooz_lers</option>
                            <option value="The_Humanoids">The_Humanoids</option>
                            <option value="Stacked_Toadz">Stacked_Toadz</option>
                        </select> */}
                    </div>
                    {/* <!-- End Section Title --> */}
                </div>
                <div className="col-xl-8 mb-30 mb-xl-0">
                    <div
                        className="d-flex align-items-center flex-wrap justify-content-center justify-content-lg-between justify-content-xl-end">
                        <div id="filters" className="d-flex flex-wrap justify-content-center justify-content-xl-end">
                            
                            <button className="button is-checked" data-filter="*">{t('ALL')}</button>
                            {categories.map((category, i) => (
                                <button
                                    key={i}
                                    className={`button ${activeFilter === category.id ? 'is-checked' : ''}`}
                                    data-filter={category.id}
                                    onClick={() => fetchNFTData(category.Id)}
                                >
                                    {category.name}
                                </button>
                            ))}
                            
                        </div>
                        <a href="explore.html" className="btn d-flex btn-sm ms-4 d-none d-lg-inline-flex text-white">
                            <Image src={images.viewAll} alt="" className="svg" />
                            <span className={Style.svg1}>{t('see all')}</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="grid row justify-content-center ">
            {NFTS.map((el, i) => (
                
                <div className="col-xl-3 col-lg-4 col-md-6 element-item artwork memes">
                    {/* <!-- Single Product --> */}
                    <Link href={{ pathname: "/NFT-details", query: el }} key={i + 1} Style={Style.mainLink}>
                    <div className="single-product style--two mb-30">
                        <div className={Style.product_img_wrapper}>
                            <img src={el.image} className={Style.images} alt="" />
                        </div>

                        {/* <!-- Product Content --> */}
                        <div className="product-content">
                            {/* <!-- Owners --> */}
                            <div className="owners">
                                <a href="profile.html" title="mr. Jone">
                                    <Image src={images.user1} width={35} height={35} alt="" />
                                </a>
                                {/* <span class='owneraddress'>{el.owner.toLowerCase().slice(0,6)}...</span> */}
                                {/* <a href="profile.html" title="Laumi">
                                    <Image src={images.twitterRound} alt="" />
                                </a>
                                <a href="profile.html" title="Tom">
                                    <Image src={images.twitterRound} alt="" />
                                </a> */}
                                {/* <span class="user-status white">
                                    <Image src={images.twitterRound} className="svg" alt="" />
                                </span> */}
                            </div>
                            {/* <!-- End Owners --> */}

                            <div className="product-top">
                                {el.name == " Promessi Sposi" ? (
                                    <h5>I Promessi sposi</h5>
                                    ) : (
                                        <h5>{el.name}</h5>
                                    )}
                                
                                <div className="d-flex justify-content-between">
                                    <h6 className="c1"> {Number(el.price).toFixed(3)} BNB</h6>
                                    {/* <h6>3 to 100</h6> */}
                                </div>
                            </div>

                            <div className="product-bottom">
                                {/* <!-- Button Group --> */}
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center ml-n2">
                                        {/* <div className="love-react style--two"></div>
                                        <div className="love-count">13.6k</div> */}
                                    </div>
                                    <Link href={{ pathname: "/NFT-details", query: el }} key={i + 1} >
                                    <p className="btn btn-border btn-sm">
                                        {t('see more')}
                                    </p>
                                        {/* <Image src={images.judge} alt="" className="svg" /> */}
                                        {/* See More... */}
                                    
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                    </Link>
                    
                </div>


                ))}
                
                
            </div>
            <div className="row">
                <div className="col-12 d-lg-none text-center mb-30">
                    <a href="/explore" class="btn btn-sm ms-3">
                        {/* <img src={images.viewAll}  alt="" className="svg" /> */}
                        {/* زاشدلث */}
                        View All
                    </a>
                </div>
            </div>
            {/* <hr className="text-white" /> */}
        </div>
    </section>
    </div>
  



















































    
  );
};

export default NFTCardTwo;
