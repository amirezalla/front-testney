import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsImages } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./NFTDetailsImg.module.css";
import images from "../../img";
import Link from "next/link";

const NFTDetailsImg = ({ nft }) => {
  const [description, setDescription] = useState(true);
  const [details, setDetails] = useState(true);
  const [like, setLike] = useState(false);

  const openDescription = () => {
    if (!description) {
      setDescription(true);
    } else {
      setDescription(false);
    }
  };

  const openDetails = () => {
    if (!details) {
      setDetails(true);
    } else {
      setDetails(false);
    }
  };

  const likeNFT = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (

    <div className="col-xl-5 col-lg-6 order-0 order-lg-1">
    {/* <!-- Item Details IMG --> */}
    <div className="item-details-img mb-5 mb-lg-0 pt-120">
    <div className={Style.product_img_wrapper}>
                            <img src={nft.image} className={Style.images} alt="" />
                        </div>
        {/* <Image src={nft.image} alt="NFT Image" width={700} height={900}/> */}
    </div>
    {/* <!-- End Item Details IMG --> */}
</div>

    


  );
};

export default NFTDetailsImg;
