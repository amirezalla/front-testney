import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//INTERNAL IMPORT
import Style from "../styles/index.module.css";

import {
  HeroSection,
  Service,
  BigNFTSilder,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  AudioLive,
  FollowerTab,
  Slider,
  Brand,
  Video,
  Loader,
} from "../components/componentsindex";
import {NFTCardTwo} from '../collectionPage/collectionIndex';
import { getTopCreators } from "../TopCreators/TopCreators";

//IMPORTING CONTRCT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const Home = () => {
  const { checkIfWalletConnected, currentAccount } = useContext(
    NFTMarketplaceContext
  );
  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    if (currentAccount) {
      fetchNFTs().then((items) => {
        setNfts(items.reverse());
        setNftsCopy(items);
        console.log(nfts);
      });
    } 
  }, []);

  //CREATOR LIST

  const creators = getTopCreators(nfts);
  // console.log(creators);

  return (
    <div className={Style.homePage}>
      <HeroSection />
     
      
      <Service />
     
      <br/>
      
      {/* <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      /> */}
      {/*<NFTCardTwo NFTData={nfts} />*/}
       {/* <Filter />  */}
       {nfts.length == 0 ? <Loader /> : <NFTCardTwo NFTData={nfts} />}
       
       {/* <BigNFTSilder />
       <Collection  /> */}
      {/* <Title
        heading="Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      /> */}
      {/* <AudioLive /> */}
      {/* {creators.length == 0 ? (
        <Loader />
      ) : (<>
        <Title
        heading="Top Creators"
        paragraph="Top Collections sorted by value of their NFTs."
      />
        <FollowerTab TopCreator={creators} /></>
      )} */}

      {/* <Slider /> */}
      {/* <Title
        heading="Top Collections"
        paragraph="Top Collections sorted by their value."
      /> */}
      

      {/* <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories."
      />
      // <Category />
      <Subscribe /> */}
      {/* <Brand /> */}
      {/* <Video /> */}
      <Category />
    </div>
  );
};

export default Home;
