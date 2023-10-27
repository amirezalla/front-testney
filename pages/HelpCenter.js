import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/aboutus.module.css";
import { Brand } from "../components/componentsindex";
import images from "../img";
import "bootstrap/dist/css/bootstrap.min.css";
// import Image from "next/image";
// import images from "../img";

const HelpCenter = () => {
  const founderArray = [
    {
      name: "Niamh O'Shea",
      position: "Co-founder and Chief Executive",
      images: images.founder1,
    },
    {
      name: "Danien Jame",
      position: "Co-founder and Chief Executive",
      images: images.founder2,
    },
    {
      name: "Orla Dwyer",
      position: "Co-founder, Chairman",
      images: images.founder3,
    },
    {
      name: "Dara Frazier",
      position: "Co-Founder, Chief Strategy Officer",
      images: images.founder4,
    },
  ];

  const factsArray = [
    {
      title: "10 million",
      info: "Articles have been public around the world (as of Sept. 30, 2021)",
    },
    {
      title: "100,000",
      info: "Registered users account (as of Sept. 30, 2021)",
    },
    {
      title: "220+",
      info: "Countries and regions have our presence (as of Sept. 30, 2021",
    },
  ];
  return (
    // <!-- Create Collectible -->

    <section class=" container-fluid pt-120 pb-120 code">
        <div class="container pt-120">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    {/* <!-- Section Title --> */}
                    <div class="section-title text-center text-white">
                        <h2>Help Center</h2>
                    </div>
                    {/* <!-- End Section Title --> */}
                </div>
            </div>

            <div class="row pb-50">
                <div class="col-12">
                    <form class="search-form style--three" action="#" method="get">
                        <div class="form-group">
                            <input type="search" class="form-control mb-0 border-0" placeholder="I have a question about..."
                                required />
                            <button type="submit">
                                {/* <img src="assets/img/icons/btn-help.svg" alt="" class="svg" /> Get */}
                                Help</button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="row mt-60">
                <div class="col-12">
                    <ul class="nav faqs-tab-buttons mb-30">
                        <li class="nav-item">
                            <button class="active" data-bs-toggle="tab" data-bs-target="#getting-started">Getting
                                Started</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button data-bs-toggle="tab" data-bs-target="#create-sell">Create & Sell</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button data-bs-toggle="tab" data-bs-target="#faqs">FAQs</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button data-bs-toggle="tab" data-bs-target="#connect-wallet">Connect Wallet</button>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="getting-started">
                            <div class="tab-links getting-started-links">
                                <a href="blog-details.html">
                                    <img src="assets/img/icons/tab-icon.svg" alt="" class="svg" />
                                    Step 1: Set up an Ethereum Wallet.
                                    <img src="assets/img/icons/tab-arrow.svg" alt="" class="svg tab-arrow" />
                                </a>
                                <a href="blog-details.html">
                                    <img src="assets/img/icons/tab-icon.svg" alt="" class="svg" />Step 2: Purchase a small
                                    amount of Ethereum<img src="assets/img/icons/tab-arrow.svg" alt=""
                                        class="svg tab-arrow" /></a>
                                <a href="blog-details.html">
                                    <img src="assets/img/icons/tab-icon.svg" alt="" class="svg" />Step 3: Connect your
                                    wallet to an NFT Marketplace<img src="assets/img/icons/tab-arrow.svg" alt=""
                                        class="svg tab-arrow" /></a>
                                <a href="blog-details.html">
                                    <img src="assets/img/icons/tab-icon.svg" alt="" class="svg" />Step 4: Make a Digital
                                    Art File for your NFT<img src="assets/img/icons/tab-arrow.svg" alt=""
                                        class="svg tab-arrow" /></a>
                                <a href="blog-details.html">
                                    <img src="assets/img/icons/tab-icon.svg" alt="" class="svg" />Step 5: Price your Art
                                    and List it on a Marketplace<img src="assets/img/icons/tab-arrow.svg" alt=""
                                        class="svg tab-arrow"/></a>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="create-sell">
                            <div class="tab-links getting-started-links">
                                <a href="blog-details.html">
                                    <img src="assets/img/icons/tab-icon.svg" alt="" class="svg" />
                                    Pick your item.
                                    <img src="assets/img/icons/tab-arrow.svg" alt="" class="svg tab-arrow" />
                                </a>
                                <a href="blog-details.html">
                                    <img src="assets/img/icons/tab-icon.svg" alt="" class="svg" />How to Get in to
                                    Choose your blockchain.<img src="assets/img/icons/tab-arrow.svg" alt=""
                                        class="svg tab-arrow" /></a>
                                <a href="blog-details.html">
                                    <img src="assets/img/icons/tab-icon.svg" alt="" class="svg" />Set up your digital
                                    wallet.<img src="assets/img/icons/tab-arrow.svg" alt="" class="svg tab-arrow" /></a>
                                <a href="blog-details.html">
                                    <img src="assets/img/icons/tab-icon.svg" alt="" class="svg" />Select your NFT
                                    marketplace.<img src="assets/img/icons/tab-arrow.svg" alt=""
                                        class="svg tab-arrow" /></a>
                                <a href="blog-details.html">
                                    <img src="assets/img/icons/tab-icon.svg" alt="" class="svg" />Upload your file.<img
                                        src="assets/img/icons/tab-arrow.svg" alt="" class="svg tab-arrow" /></a>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="faqs">
                            <div class="accordion">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">
                                            How do NFTs work?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            At a very high level, most NFTs are part of the Ethereum blockchain.
                                            Ethereum is a cryptocurrency, like bitcoin or dogecoin, but its blockchain
                                            also supports these NFTs, which store extra information that makes them work
                                            differently from, say, an ETH coin. It is worth noting that other
                                            blockchains can implement their own versions of NFTs.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo">
                                            What’s worth picking up at the NFT supermarket?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                        aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            At a very high level, most NFTs are part of the Ethereum blockchain.
                                            Ethereum is a cryptocurrency, like bitcoin or dogecoin, but its blockchain
                                            also supports these NFTs, which store extra information that makes them work
                                            differently from, say, an ETH coin. It is worth noting that other
                                            blockchains can implement their own versions of NFTs.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                            aria-expanded="false" aria-controls="collapseThree">
                                            You mean, like, people buying my good tweets?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse"
                                        aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            At a very high level, most NFTs are part of the Ethereum blockchain.
                                            Ethereum is a cryptocurrency, like bitcoin or dogecoin, but its blockchain
                                            also supports these NFTs, which store extra information that makes them work
                                            differently from, say, an ETH coin. It is worth noting that other
                                            blockchains can implement their own versions of NFTs.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFour">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                            aria-expanded="false" aria-controls="collapseFour">
                                            Do people really think this will become like art collecting?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse"
                                        aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            At a very high level, most NFTs are part of the Ethereum blockchain.
                                            Ethereum is a cryptocurrency, like bitcoin or dogecoin, but its blockchain
                                            also supports these NFTs, which store extra information that makes them work
                                            differently from, say, an ETH coin. It is worth noting that other
                                            blockchains can implement their own versions of NFTs.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="connect-wallet">
                            <div class="tab-links getting-started-links">
                                <a href="blog-details.html">
                                    <img src="assets/img/icons/tab-icon.svg" alt="" class="svg" />
                                    What Exactly Are
                                    NFTs?
                                    <img src="assets/img/icons/tab-arrow.svg" alt="" class="svg tab-arrow" />
                                </a>
                                <a href="blog-details.html">
                                    <img src="assets/img/icons/tab-icon.svg" alt="" class="svg" />How to Get in to
                                    NFT Business and earn Money?<img src="assets/img/icons/tab-arrow.svg" alt=""
                                        class="svg tab-arrow" /></a>
                                <a href="blog-details.html">
                                    <img src="assets/img/icons/tab-icon.svg" alt="" class="svg" />What are Best
                                    Platforms for Creators to Get Featured?<img src="assets/img/icons/tab-arrow.svg"
                                        alt="" class="svg tab-arrow" /></a>
                                <a href="blog-details.html">
                                    <img src="assets/img/icons/tab-icon.svg" alt="" class="svg" />How it is That
                                    NFTs are Under Rated?<img src="assets/img/icons/tab-arrow.svg" alt=""
                                        class="svg tab-arrow" /></a>
                                <a href="blog-details.html">
                                    <img src="assets/img/icons/tab-icon.svg" alt="" class="svg" />How Many
                                    Artworks & Creators are There in Anefty?<img src="assets/img/icons/tab-arrow.svg"
                                        alt="" class="svg tab-arrow" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row pt-50">
                <div class="col-12 ">
                    {/* <!-- Help Center Contact --> */}
                    <div class="hc-contact media">
                        <div class="img">
                            <img src="assets/img/media/contact.png" alt="" />
                        </div>
                        <div class="content media-body ">
                            <h2>Unable to Find Your Answer?</h2>
                            <p>Anefty are non-fungible tokens. they are uniques items that you can't replace with
                                something else. for example, a one-of-a-kind trading card is an NFT – you can't just
                                replace it with any other card. If you trade your card for some other card.</p>
                            <a href="contact.html" class="btn"><img src="assets/img/icons/btn-contact.svg" alt=""
                                    class="svg" /> contact</a>
                        </div>
                    </div>
                    {/* <!-- End Help Center Contact --> */}
                </div>
            </div>
        </div>
    </section>
    
  );
};

export default HelpCenter;
