import React, { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//INTRNAL IMPORT
import Style from "../styles/searchPage.module.css";
import { Slider, Brand, Loader } from "../components/componentsindex";
import { SearchBar } from "../SearchPage/searchBarIndex";
import { Filter } from "../components/componentsindex";

import { NFTCardTwo, Banner } from "../collectionPage/collectionIndex";
import images from "../img";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";
import { faFileAudio } from "@fortawesome/free-solid-svg-icons";

const searchPage = () => {
  const { fetchNFTs, setError, currentAccount } = useContext(
    NFTMarketplaceContext
  );
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    try {
      if (currentAccount) {
        console.log('ok')
        fetchNFTs().then((items) => {
          setNfts(items.reverse());
          setNftsCopy(items);
          console.log(nfts);
        });
      }
    } catch (error) {
      setError("Please reload the browser", error);
      setOpenError(true);
      console.log(error);
    }
  }, []);

  const onHandleSearch = (value) => {
    const filteredNFTS = nfts.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredNFTS.length === 0) {
      setNfts(nftsCopy);
    } else {
      setNfts(filteredNFTS);
    }
  };

  const onClearSearch = () => {
    if (nfts.length && nftsCopy.length) {
      setNfts(nftsCopy);
    }
  };

  // const collectionArray = [
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  // ];
  return (
    <div className="container-fluid code">
      <div className="row">
      <SearchBar
        onHandleSearch={onHandleSearch}
         onClearSearch={onClearSearch}
       />
      </div>
      {nfts.length == 0 ? <Loader /> : <NFTCardTwo NFTData={nfts} />}
      {/* <Slider /> */}
      {/* <Brand /> */}
    </div>
    // <div className={Style.searchPage}>
    //   <Banner bannerImage={images.creatorbackground2} />
    //   <SearchBar
    //     onHandleSearch={onHandleSearch}
    //     onClearSearch={onClearSearch}
    //   />
    //   {/* <Filter /> */}
      
    //   <Slider />
    //   <Brand />
    // </div>
  );
};

export default searchPage;
