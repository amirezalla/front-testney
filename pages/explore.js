import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from 'react-i18next';
//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import Image from "next/image";
import images from "../img";

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
import {NFTCardThree} from '../collectionPage/collectionIndex';

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
        console.log(items);
        setNfts(items.reverse());
        setNftsCopy(items);
        console.log(nfts);
      });
    } 
  }, []);

  //CREATOR LIST

  const creators = getTopCreators(nfts);
  // console.log(creators);
  const { t } = useTranslation();

  return (



    // <!-- Explore -->
    <section class="pt-120  pb-120 code">
              <div class="author-area mb-4">
      
      {/* <Image src={images.creatorbackground1} className="author-cover"  height={350} /> */}
    
</div>
        <div class="container">

            <div class="row mb-50">
                <div class="col-lg-8 order-1 order-lg-0">
                    {/* <!-- Filter Options --> */}
                    <div class="filter-options d-flex flex-wrap justify-content-center justify-content-lg-start">
                        <select class="select-rounded mb-10 lg me-4">
                            <option value="Following">{t('all category')}</option>
                            <option value="Meka_Verse">{t('picture')}</option>
                            <option value="music">{t('sculpture')}</option>
                            <option value="video_game_items">{t('books')}</option>
                            <option value="trading_cards">{t('photo')}</option>
                            <option value="memes">{t('real estate')}</option>
                        </select>

                        <select class="select-rounded mb-10 lg me-4">
                            <option value="buy_now">{t('Buy now')}</option>
                            <option value="sell">{t('Bid')}</option>
                            
                        </select>

                        {/* <select class="select-rounded mb-10 lg">
                            <option value="following">All items</option>
                            <option value="miscellaneous ">Miscellaneous </option>
                            <option value="virtual_fashion">Virtual Fashion</option>
                            <option value="domain_names">Domain Names</option>
                            <option value="sports_moments">Sports Moments</option>
                            <option value="memes">Memes</option>
                        </select> */}
                    </div>
                    {/* <!-- End Filter Options --> */}
                </div>
                <div class="col-lg-4 order-0 order-lg-1">
                    {/* <!-- Search Form --> */}
                    <form class="search-form style--two mb-4 mb-lg-2" action="#">
                        <div class="form-group ms-auto me-auto me-lg-0 mw-100">
                            <input type="text" class="form-control border-0 mb-0" placeholder={t('Search item')} />
                            <button type="submit">
                                {/* <img src="assets/img/icons/search.svg" class="svg" alt=""> */}
                            </button>
                        </div>
                    </form>
                    {/* <!-- End Search Form --> */}
                {/* </div> */}
            </div>

            <div class="row">
            <div class="col-12">
            {nfts.length == 0 ? <Loader /> : <NFTCardThree NFTData={nfts} />}
            </div>
              </div>
            </div>
        </div>
    </section>

  );
};

export default Home;
