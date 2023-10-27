import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


//INTERNAL IMPORT
import { NFTDescription, NFTDetailsImg, NFTTabs } from "./NFTDetailsIndex";
import Style from "./NFTDetailsPage.module.css";
import Image from "next/image";
import images from "../img";

const NFTDetailsPage = ({ nft }) => {
  return (
    // <!-- Item Details -->
    <div className="pt-100">
    <section className=" code mt-4">
        <div className="container pt-120">
            <div className="row justify-content-between  ">

            <NFTDescription nft={nft} />
                <NFTDetailsImg nft={nft} />
            </div>
        </div>
    </section>
    </div>
    






      // <div className={Style.main}>
      // <div className={Style.section}>
      // <div className={Style.container}>
      // <div className={Style.content}>
      // <NFTDescription nft={nft} />
      // <NFTDetailsImg nft={nft} />
      
      // </div>

      // </div>
      // </div>
      // </div>


  );
};

export default NFTDetailsPage;
