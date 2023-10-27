import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//INTERNAL IMPORT


//INTERNAL IMPORT
import Style from "../styles/author.module.css";
import { Banner, NFTCardTwo } from "../collectionPage/collectionIndex";
import { Brand, Title } from "../components/componentsindex";
import FollowerTabCard from "../components/FollowerTab/FollowerTabCard/FollowerTabCard";
import images from "../img";
import {
  AuthorProfileCard,
  AuthorTaps,
  AuthorNFTCardBox,
} from "../authorPage/componentIndex";

//IMPORT SMART CONTRACT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";
import { faFileAudio } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const author = () => {
  const followerArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
      seller: "7d64gf748849j47fy488444",
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      seller: "7d64gf748849j47fy488444",
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
      seller: "7d64gf748849j47fy488444",
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      seller: "7d64gf748849j47fy488444",
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      seller: "7d64gf748849j47fy488444",
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      seller: "7d64gf748849j47fy488444",
    },
  ];

  const [collectiables, setCollectiables] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);

  //IMPORT SMART CONTRACT DATA
  const { fetchMyNFTsOrListedNFTs, currentAccount } = useContext(
    NFTMarketplaceContext
  );

  const [nfts, setNfts] = useState([]);
//   const [myNFTs, setMyNFTs] = useState([]);


//   useEffect(() => {
//     fetchMyNFTsOrListedNFTs("fetchItemsListed").then((items) => {
//       setNfts(items);
//     });
//   }, []);

//   useEffect(() => {
//     fetchMyNFTsOrListedNFTs("fetchMyNFTs").then((items) => {
//       setMyNFTs(items);
//     });
//   }, []);
  const [myNFTs] = useState([]);

  return (
    <div className="container-fluid pt-120 code">
            {/* <!-- Author --> */}
  
    <div class="author-area sep-bottom">
    <Image src={images.creatorbackground1} class="svg" alt="" className="author-cover author-cover-edit" />
      
      
        <div class="author-info">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 d-flex justify-content-center justify-content-lg-start">
                        {/* <!-- Profile --> */}
                        <div class="author-profile text-center text-white d-inline-block pb-2 pb-lg-4">
                            <div class="user-avatar">
                                <Image src={images.user1} alt="" />
                              
                            </div>

                            <h5 class="user_name text-white">PicasoDefi</h5>
                            <p className="text-white">Joined December 2022</p>
                        </div>
                        {/* <!-- End Profile --> */}
                    </div>
                    <div class="col-lg-6">
                        <div
                            class="d-flex flex-wrap align-items-center mt-10 justify-content-center justify-content-lg-end mb-3 mb-lg-0">
                            {/* <!-- Copy Clipboard --> */}
                            <div class="copy-clipboard-wrap mr-10 mb-10 border-5">
                                <input class="form-control bg-transparent border-0" id="get-link" type="text" value="69b9ebde0178k7O7"
                                    readonly />

                                {/* <!-- Copy Button --> */}
                                <a href="#" id="copy-link-btn">
                                    <img src="assets/img/icons/copy-icon.svg" alt="" class="svg" />
                                </a>
                                {/* <!-- End Copy Button --> */}
                            </div>
                                       {/* <!-- Copy Clipboard --> */}
                                       <div class="copy-clipboard-wrap mr-10 mb-10 border-5">
                                <input class="form-control bg-transparent border-0" id="get-link" type="text" value="http://www.Picasodefi.com"
                                    readonly />

                                {/* <!-- Copy Button --> */}
                                <a href="#" id="copy-link-btn">
                                    <img src="assets/img/icons/copy-icon.svg" alt="" class="svg" />
                                </a>
                                {/* <!-- End Copy Button --> */}
                            </div>
                            {/* <!-- End Copy Clipboard --> */}

   


                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- End Author --> */}
    <div class="pt-120 pb-120 ">
        <div class="container">
            <div class="row mb-50">
                <div class="col-xl-9 order-1 order-xl-0">
                    {/* <!-- Tab Buttons --> */}
                    <ul class="nav tab-buttons justify-content-center justify-content-xl-start">
                        <li>
                            <button class="active select-rounded text-uppercase lg" data-bs-toggle="tab"
                                data-bs-target="#collected">Collected <span>3</span></button>
                        </li>
                        <li>
                            <button class="select-rounded text-uppercase lg" data-bs-toggle="tab"
                                data-bs-target="#created">Created <span>9</span></button>
                        </li>
                        <li>
                            <button class="select-rounded text-uppercase lg" data-bs-toggle="tab"
                                data-bs-target="#favorited">Favorited <span>6</span></button>
                        </li>
                        <li>
                            <button class="select-rounded text-uppercase lg" data-bs-toggle="tab"
                                data-bs-target="#hidden">Hidden <span>12</span></button>
                        </li>
                        <li>
                            <select class="select-rounded lg">
                                <option value="offers">Offers</option>
                                <option value="offers_received">Offers received</option>
                                <option value="offers_made">Offers made</option>
                            </select>
                        </li>
                    </ul>
                    {/* <!-- End Tab Buttons --> */}
                </div>
                <div class="col-xl-3 order-0 order-xl-1 mb-4 mb-xl-0">
                    {/* <!-- Search Form --> */}
                    <form class="search-form style--two" action="#">
                        <div class="form-group ms-auto me-auto me-xl-0 mw-100">
                            <input type="text" class="form-control mb-0" placeholder="Search item…" />
                            <button type="submit">
                                <img src="assets/img/icons/search.svg" class="svg" alt="" />
                            </button>
                        </div>
                    </form>
                    {/* <!-- End Search Form --> */}
                </div>
            </div>
            </div>
            </div>
            </div>


  );
};

export default author;
