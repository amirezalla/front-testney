import React, { useState } from "react";
import Image from "next/image";
import images from "../../img";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

//INTERNAL IMPORT
import Style from "./NFTCardThree.module.css";
import { LikeProfile } from "../../components/componentsindex";

const NFTCardThree = ({ NFTData }) => {
  const [like, setLike] = useState(false);
  const [likeInc, setLikeInc] = useState(21);

  const [items, setItems] = useState([]);
  const { t } = useTranslation();
// <<<<<<< HEAD
  const [visibleItems, setVisibleItems] = useState(9);
// =======
//   const [visibleItems, setVisibleItems] = useState(6);
// >>>>>>> 9dea7bdaa18024b74fba708a22653487b8076ca8

  const loadMoreItems = () => {
    // Fetch additional items from your data source
    // For simplicity, we'll simulate the fetch with a delay
    setTimeout(() => {
      const additionalItems = ['Item 6', 'Item 7', 'Item 8','Item 9', 'Item 10', 'Item 11']; // Example additional items
      setItems([...NFTData, ...additionalItems]);
      setVisibleItems(visibleItems + additionalItems.length);
    }, 1000);
  };
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



<div className="container">
<div class="row  mt-10  my-4 "> 
{NFTData.slice(0, visibleItems).map((el, i) => (

    <div class="col-lg-4 col-md-6">
<div class="single-product ">

<div className={Style.product_img_wrapper}>
                            <img src={el.image} className={Style.images} alt="" />
                        </div>
{/* <!-- Product Content --> */}
                        <div class="product-content">
                            <div class="product-top">
                            {el.name == " Promessi Sposi" ? (
                                    <h5>I Promessi sposi</h5>
                                    ) : (
                                        <h5>{el.name}</h5>
                                    )}
                                {/* <div class="d-flex justify-content-between"> */}
                               
                                {/* <!-- Button Group --> */}
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center ml-n2">
                                        {/* <div className="love-react style--two"></div>
                                        <div className="love-count">13.6k</div> */}
                                    </div>
                                    <Link href={{ pathname: "/NFT-details", query: el }} key={i + 1} >
                                    <p className="btn btn-border border-white btn-sm">
                                        {t('see more')} 
                                    </p>
                                        {/* <Image src={images.judge} alt="" className="svg" /> */}
                                        {/* See More... */}
                                    
                                    </Link>
                                {/* </div> */}
                                
                            
                                </div>
                            </div>

                            
                        </div>
                        {/* <!-- End Product Content --> */}
                        
 
</div>

</div>


))}


               
                
                
           

    
  </div>
  {visibleItems < NFTData.length && (
    <div className="col-lg-12 d-flex justify-content-center mt-30">
        <button onClick={loadMoreItems} class="btn">Load More</button>
        </div>
      )}

</div>


















































    
  );
};

export default NFTCardThree;
