import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

//INTERNAL IMPORT
import Style from "../styles/connectWallet.module.css";
import images from "../img";

//IMPORT FROM SMART CONTRACT
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";
const connectWallet = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const { currentAccount, connectWallet } = useContext(NFTMarketplaceContext);
  const providerArray = [
    {
      provider: images.provider1,
      name: "Metamask",
    },
    {
      provider: images.provider2,
      name: "walletConnect",
    },
    {
      provider: images.provider3,
      name: "walletlink",
    },
    {
      provider: images.provider1,
      name: "Formatic",
    },
  ];
  return (

    // <!-- Create Collectible -->
    <section className="pt-120 pb-90 code">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    {/* <!-- Section Title --> */}
                    <div className="section-title text-center text-white">
                        <h2>Connect Wallet</h2>
                        <p>Choose "Single" if you want your collectibles to be one of a kinds or "Multiple" if you want
                            to sell by ones collectibles Upload your work likes Image, video, audio times for IngressDefi.
                        </p>
                    </div>
                    {/* <!-- End Section Title --> */}
                </div>
            </div>
            <div className="row">
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    {/* <!-- Wallet --> */}
                    <a href="https://metamask.io/" target="_blank" className="wallet style--two text-white text-center">
                        <div className="logo">
                            <Image src={images.metamask} alt="" width={100} height={90} />
                        </div>
                        <p>Metamask</p>
                    </a>
                    {/* <!-- End Wallet --> */}
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    {/* <!-- Wallet --> */}
                    <a href="https://walletconnect.com/" target="_blank" className="wallet style--two text-white text-center">
                        <div className="logo">
                            <Image src={images.provider3} alt="" width={100} height={90} />
                        </div>
                        <p>WalletConnect</p>
                    </a>
                    {/* <!-- End Wallet --> */}
                </div>

                <div className="col-xl-3 col-lg-4 col-sm-6">
                    {/* <!-- Wallet --> */}
                    <a href="https://fortmatic.com/" target="_blank" class="wallet style--two text-white text-center">
                        <div className="logo">
                            <Image src={images.Formatic} alt="" width={100} height={90}  />
                        </div>
                        <p>Formatic</p>
                    </a>
                    {/* <!-- End Wallet --> */}
                </div>
                
            </div>
        </div>
    </section>













































    // <div className={Style.connectWallet}>
    //   <div className={Style.connectWallet_box}>
    //     <h1>Connect your wallet</h1>
    //     <p className={Style.connectWallet_box_para}>
    //       Connect with one of our avaliabl wallet providers or create a new one
    //     </p>

    //     <div className={Style.connectWallet_box_provider}>
    //       {providerArray.map((el, i) => (
    //         <div
    //           className={`${Style.connectWallet_box_provider_item} ${
    //             activeBtn == i + 1 ? Style.active : ""
    //           }`}
    //           key={i + 1}
    //           onClick={() => (setActiveBtn(i + 1), connectWallet())}
    //         >
    //           <Image
    //             src={el.provider}
    //             alt={el.provider}
    //             width={50}
    //             height={50}
    //             className={Style.connectWallet_box_provider_item_img}
    //           />
    //           <p>{el.name}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default connectWallet;
