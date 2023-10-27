import React from "react";
import Image from "next/image";
import Style from "../styles/ourToken.module.css";
import Head from 'next/head'
import Link from 'next/link'
import images from "../img";
import heroSection from "../components/HeroSection/HeroSection";
import { useState } from "react";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// let Web3 = require('web3')

var balance_;
var minPurchase_;
var maxPurchase_;
let bscscanTokenUrl_;
let bscscanContractUrl_;
let tokenImageUrl_;
let percentage_;


const ourToken = () => {
    let tokenData = {
        "id": "1",
        "token": "0xe1F8787b35f76C7C138c8330BE86ada000006c68",
        "presaleContract": "0x509e2AfCAF74E6Ad87A9bDD1a80a60Ee630Ae969",
        "contractABI": "",
        "tokenIconURL": "https://www.IDF.com/IDF-k.png",
        "tokenImageUrl_ ": "https://www.IDF.com/IDF-k.png",
        "tokenName": "IDF",
        "tokenSymbol": "IDF",
        "tokenForPresaleInitial": "2",
        "tokenForPresaleNumberOfZeros": "14",
        "totalSupplyInitial": "1",
        "totalSupplyNumberOfZeros": "15",
        "decimals": "4",
        "hardCap": "600",
        "rate": "2600000000",
        "type": "BEP20",
        "presaleRunning": "true",
        "kycVerified": "https://github.com/HireCA/audit/blob/main/IDFkyc.pdf",
        "smartContractAudit": "https://github.com/HireCA/audit/blob/main/IDFaudit.pdf",
    }
    const [web3, setWeb3] = useState(null)
    const [address, setAddress] = useState(null)
    const [contract, setContract] = useState(null)
    const [balance, setBalance] = useState(null)
    let abi = [
        {
            "inputs": [],
            "name": "buyTokens",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "beneficiary",
                    "type": "address"
                }
            ],
            "name": "collectLeftTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "beneficiary",
                    "type": "address"
                }
            ],
            "name": "collectOwnableAmount",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "OwnerCollectedBNB",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "tokens",
                    "type": "uint256"
                }
            ],
            "name": "OwnerCollectedTOKEN",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "startedBy",
                    "type": "address"
                }
            ],
            "name": "PresaleStarted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "stoppedBy",
                    "type": "address"
                }
            ],
            "name": "PresaleStoped",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "contract IERC20",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "tokenName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "tokenSymbol",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "rate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "weiRaised",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalSupply",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "minPurchase",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maxPurchase",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "endTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "hardCap",
                    "type": "uint256"
                }
            ],
            "name": "startPresale",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "stopPresale",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "buyer",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "beneficiary",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "TokensPurchased",
            "type": "event"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        },
        {
            "inputs": [],
            "name": "_admin",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_endTime",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_hardCap",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_maxPurchase",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_minPurchase",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_presaleStarted",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_rate",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_startTime",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_token",
            "outputs": [
                {
                    "internalType": "contract IERC20",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_tokenName",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_tokenSymbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_weiRaised",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "holders",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "TokenBalanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
    let contractAddress = tokenData.presaleContract;
    useEffect(() => {
        let endTime_;

        window.ethereum ?
            ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
                setAddress(accounts[0])
                let w3 = new Web3(ethereum)
                setWeb3(w3)

                let _balance = w3.eth.getBalance(accounts[0]).then((_balance) => {
                    document.getElementById("balance-text").innerHTML = (_balance / 10 ** 18).toString().slice(0, 7)
                    balance_ = _balance
                })

                let c = new w3.eth.Contract(abi, contractAddress)
                setContract(c)

                c.methods._totalSupply().call().then((_supply) => {
                    _supply = _supply / 10 ** 18
                    document.getElementById('total-supply').innerHTML = _supply;
                }).catch((err) => console.log(err))

                c.methods._rate().call().then((_rate) => {
                    document.getElementById('rate').innerHTML = _rate;
                }).catch((err) => console.log(err))

                c.methods._hardCap().call().then((_hardCap) => {
                    _hardCap = _hardCap / 10 ** 18;
                    document.getElementById('hard-cap').innerHTML = _hardCap;
                }).catch((err) => console.log(err))

                c.methods._weiRaised().call().then((_weiRaised) => {
                    let _bnb = _weiRaised / 10 ** 18;
                    document.getElementById('amount-raised').innerHTML = _bnb + " BNB";
                    let percentage = (_bnb / tokenData.hardCap) * 100
                    document.getElementById('bar-percentage').style.width = percentage.toString();
                    document.getElementById('target-percentage').innerHTML = percentage.toString().slice(0, 4) + " %"
                    localStorage.setItem("percentage", percentage);

                    percentage_ = percentage;
                }).catch((err) => console.log(err))

                c.methods._minPurchase().call().then((minAmount) => {
                    minPurchase_ = minAmount
                }).catch((err) => console.log(err))

                c.methods._maxPurchase().call().then((maxAmount) => {
                    maxPurchase_ = maxAmount
                }).catch((err) => console.log(err))

                c.methods._endTime().call().then((endTime) => {
                    endTime_ = endTime
                    const day = document.getElementById('days');
                    const hr = document.getElementById('hours');
                    const min = document.getElementById('minutes');
                    const sec = document.getElementById('seconds');

                    const eventDate = endTime * 1000;
                    const id = setInterval(() => {
                        const now = new Date().getTime();
                        const diff = eventDate - now;

                        const d = Math.floor(eventDate / (1000 * 60 * 60 * 24) - (now / (1000 * 60 * 60 * 24)));
                        const h = Math.floor((eventDate / (1000 * 60 * 60) - (now / (1000 * 60 * 60))) % 24);
                        const m = Math.floor((eventDate / (1000 * 60) - (now / (1000 * 60))) % 60);
                        const s = Math.floor((eventDate / (1000) - (now / (1000))) % 60);

                        if (diff > 0) {
                            day.innerHTML = d;
                            hr.innerHTML = h;
                            min.innerHTML = m;
                            sec.innerHTML = s;
                        }
                        else {
                            day.innerHTML = 0;
                            hr.innerHTML = 0;
                            min.innerHTML = 0;
                            sec.innerHTML = 0;
                        }
                    }, 1000);

                }).catch((err) => console.log(err))

                c.methods._presaleStarted().call().then((_status) => {
                    let status;
                    if (_status) {
                        status = "ACTIVE";
                    }
                    else {
                        status = "PAUSED";
                    }
                    document.getElementById("presale-status").innerHTML = status;

                }).catch((err) => console.log(err))

                document.getElementById("buy-button").disabled = true;
                document.getElementById("buy-button").style.background = "black"
                document.getElementById("buy-button").style.boxShadow = "none"
                document.getElementById("buy-button").style.cursor = "not-allowed"

                if (tokenData.instagram == "") {
                    document.getElementById('instagram').style.display = "none";
                }
                if (tokenData.facebook == "") {
                    document.getElementById('facebook').style.display = "none";
                }
                if (tokenData.website == "") {
                    document.getElementById('website').style.display = "none";
                }
                if (tokenData.whitepaper == "") {
                    document.getElementById('whitepaper').style.display = "none";
                }
                if (tokenData.telegram == "") {
                    document.getElementById('telegram').style.display = "none";
                }
                if (tokenData.twitter == "") {
                    document.getElementById('twitter').style.display = "none";
                }
                if (tokenData.email == "") {
                    document.getElementById('email').style.display = "none";
                }
                if (tokenData.smartContractAudit == "") {
                    document.getElementById('audited').style.display = "none";
                }
                if (tokenData.kycVerified == "") {
                    document.getElementById('verified').style.display = "none";
                }
                if (tokenData.youtube == "") {
                    document.getElementById('youtube').style.display = "none";
                }


            }).catch((err) => console.log(err))
            : console.log("Please install MetaMask")



    }, [])
    function buyToken(amount) {
        let _price = web3.utils.toWei(amount);

        let tx = {
            from: address,
            to: contractAddress,
            value: web3.utils.numberToHex(_price)
        }
        let txHash = ethereum.request({
            method: 'eth_sendTransaction',
            params: [tx],
        }).then((hash) => {
            alert("Transaction hash: " + hash)
        }).catch((err) => console.log(err))

        return txHash
    }
    function validateExchangeAmount(e) {
        document.getElementById("error-text").style.display = "none";
        document.getElementById("notice-text").style.display = "none";
        console.log(minPurchase_, maxPurchase_)
        let value = document.getElementById('quantity').value;
        let walletBalance = balance_ / 10 ** 18;
        let minPurchase = minPurchase_ / 10 ** 18;
        let maxPurchase = maxPurchase_ / 10 ** 18;
        var valid = true;
        if (value > walletBalance) {
            document.getElementById('quantity').value = Number(walletBalance.toString().slice(0, 6))
            value = document.getElementById('quantity').value;
            document.getElementById('notice-text').innerHTML = "You'll get ~ " + value * tokenData.rate + " " + tokenData.tokenSymbol
            document.getElementById('notice-text').style.display = "flex";
            validateExchangeAmount()
        }
        else if (value < minPurchase) {
            valid = false
            document.getElementById("error-text").innerHTML = "minimum exchnage amount is " + minPurchase + " BNB";
            document.getElementById("error-text").style.display = "flex";
            document.getElementById("buy-button").disabled = true;
            document.getElementById("buy-button").style.background = "black"
            document.getElementById("buy-button").style.boxShadow = "none"
            document.getElementById("buy-button").style.cursor = "not-allowed"
        }
        else if (value > maxPurchase) {
            valid = false;
            document.getElementById("error-text").innerHTML = "maximun exchnage amount is " + maxPurchase + " BNB";
            document.getElementById("error-text").style.display = "flex";
        }
        if (valid && walletBalance > minPurchase) {
            document.getElementById('notice-text').innerHTML = "You'll get ~ " + value * tokenData.rate + " " + tokenData.tokenSymbol
            document.getElementById('notice-text').style.display = "flex";
            document.getElementById("buy-button").disabled = false;
            document.getElementById("buy-button").style.background = "linear-gradient(to bottom, rgb(255,180,60),rgb(146, 90, 0))"
            document.getElementById("buy-button").style.boxShadow = "0px 0px 5px rgb(255,180,60)"
            document.getElementById("buy-button").style.cursor = "pointer"
            document.getElementById("buy-button").style.color = "black"
        }
    }

    function buyButtonPressed() {
        let value = document.getElementById('quantity').value;
        buyToken(value)
    }
    return (
        <>
        <Head>
            <title>IDF - Presale Sample</title>
            <link rel="Styleheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
            <meta name="description" content="GIDF is a decentralized launchpad that
       allows users to launch their token and create their initial
       token sale with staking benefits to their holders and they don't
       require any Coding Knowledge For this." />

            <link rel="apple-touch-icon" sizes="180x180" href="../img/ourtoken/icons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="../img/ourtoken/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="../img/ourtoken/icons/favicon-16x16.png" />
            <link rel="manifest" href="../img/ourtoken/icons/site.webmanifest" />
            <link rel="icon" href="../img/ourtoken/icons/favicon.ico" />
        </Head>

            {/*<Cover />*/}
            <section className={Style.cover}>


                <div className={Style.video}>
                    <Image src={images.globe} />
                </div>



                <div className={Style.particlesWrapper}>
                    <div id="particles-js"></div>
                </div>
                <div className={Style.tokenPresaleContainer}>
                    <div className={Style.tokenPresaleContainerInner} id="presale-container">
                        <div className={Style.cardHeader}>
                            <div className={Style.logoBlock}>
                                {/*<Image src={images.kredict} alt="token-image" className={Style.tokenImagePrime}/>*/}
                                {/*<img src={tokenImageUrl_} alt="token-image" className={Style.tokenImagePrime} />*/}
                            </div>

                            <div className={Style.primeBlock}>
                                <h2 className={Style.tokenNamePrime}>{tokenData.tokenName}</h2>
                                <p className={Style.exchangeMode}>{tokenData.tokenSymbol} / BNB</p>
                                <a target="_blank" href={bscscanTokenUrl_} rel="noreferrer">View on Bscscan</a>
                                {/*<a target="_blank" href={} rel="noreferrer">View on Bscscan</a>*/}
                            </div>
                            <div className={Style.badgeHeader}>
                                <a target="_blank" rel="noreferrer" href={tokenData.smartContractAudit} className={Style.auditedBadge} title="Smart Contract Audited" id='audited'><i className="las la-check-circle"></i>Audited</a>

                                <a target="_blank" rel="noreferrer" href={tokenData.kycVerified} className={Style.verifiedBadge} title="KYC Verified" id='verified'><i className="las la-shield-alt"></i>Verified</a>
                            </div>
                        </div>
                        <div className={Style.countdownContainer}>
                            <div className={Style.countdownWrapper}>
                                <p><span id='days'></span></p>:
                                <p><span id='hours'></span></p>:
                                <p><span id='minutes'></span></p>:
                                <p><span id='seconds'></span></p>
                            </div>
                        </div>
                        <div className={Style.actionBlockPrime}>
                            {/*<input type="number" className={Style.quantityInput} placeholder="Exchange Quantity" id='quantity' onChange={validateExchangeAmount}></input>*/}
                            <input type="number" className={Style.quantityInput} placeholder="Exchange Quantity" id='quantity' ></input>
                            <small className={Style.balanceText}>Balance: <small id="balance-text"></small> BNB</small>
                            <small id='notice-text' className={Style.noticeText}></small>
                            <small id='error-text' className={Style.errorText}></small>
                            <button className={Style.buyButton} onClick={buyButtonPressed} id='buy-button'>Buy</button>
                            {/*<button className={Style.buyButton}  id='buy-button'>Buy</button>*/}
                        </div>


                        <div className={Style.rateBlockPrime}>
                            <p className={Style.currencyToToken}>1 BNB = <span id="rate">1000</span> {tokenData.tokenSymbol}</p>
                        </div>
                        <div className={Style.barBlockPrime}>
                            <div className={Style.upperStatLine}>
                                <p className={Style.upperStatCode} id="presale-status"></p>
                                <p className={Style.upperStatPercentage} id="target-percentage"></p>
                            </div>
                            <div className={Style.barActualPrime}>
                                <div className="barRatePrime" id='bar-percentage'></div>
                            </div>
                            <style jsx>{`
                                .barRatePrime{
                                    height: 100%;
                                    width:0%;
                                
                                    border-radius: 10px;
                                    background: linear-gradient(to bottom, rgb(255,180,60),rgb(146, 90, 0));
                                }
                                `}
                            </style>
                            <div className={Style.lowerStatLine}>
                                <p className={Style.lowerStatCurrency} id="amount-raised"></p>
                                <p className={Style.lowerStatToken}>Hard Cap <span id="hard-cap">4000</span> BNB</p>
                            </div>
                        </div>
                        <div className={Style.leastDetailBlockPrime}>
                            {/*<a className={Style.leastDetailTagPrime} href={bscscanContractUrl_} rel="noreferrer" target="_blank">View Presale Smart Contract Address</a>*/}
                            {/*<a className={Style.leastDetailTagPrime} href={} rel="noreferrer" target="_blank">View Presale Smart Contract Address</a>*/}
                        </div>

                    </div>
                    <div className={Style.brandText}><Link href="https://www.ingressdefi.com"><a target="_blank" rel="noreferrer" id="host">Powered by Ingressdefi.com</a></Link></div>

                </div>



                <div className={Style.textSection}>

                    <h2 className={Style.header}>IDF ICO</h2>
                    <h4 className={Style.tag}>
                        IDF is a decentralized launchpad that allows users to launch
                        their token and create their initial token sale with staking benefits
                        to their holders and they don&apos;t require any Coding Knowledge For this.
                    </h4>

                    <div className={Style.actionWrapper}>
                        <Link href="#whitepaper"><a className={Style.actionBtn}>Whitepaper</a></Link>
                        <a className={Style.actionBtn} >Buy Now</a>
                    </div>
                </div>
            </section>
            <div className={Style.contractNoteSection}>
                <p className={Style.contractNote}>You can buy IDFalso by sending BNB directly to Presale Contract</p>
                <p id="contract-address" className={Style.contractAddress}>{tokenData.presaleContract}</p><br/>
                {/*<a className={Style.actionBtnCopy} onClick={copyAddress}>Copy Address</a>*/}
                <a className={Style.actionBtnCopy} >Copy Address</a>
            </div>
            {/*endcover*/}
            {/* feature-section-------- */}
            <section className={Style.featureSection}>
                <div className={Style.featureBlock}>

                    <div className={Style.featureCard}>
                        <p className={Style.featureIcon}><i className="las la-cube"></i></p>
                        <h4 className={Style.featureHead}>DECENTRALISED SYSTEM</h4>
                        <p className={Style.featureText}>
                            A technical failure can paralyze all affiliate networks on a centralized platfotrm,
                            until the cause is detected and rectified the system.
                        </p>
                    </div>
                    <div className={Style.featureCard}>
                        <p className={Style.featureIcon}><i className="las la-shield-alt"></i></p>
                        <h4 className={Style.featureHead}>BANKS PAYMENT SYSTEMS</h4>
                        <p className={Style.featureText}>
                            Up to 45% of a merchant&apos;s budget is spent on commissions charged by a number
                            of brokers, including banks, payment systems.
                        </p>
                    </div>
                    <div className={Style.featureCard}>
                        <p className={Style.featureIcon}><i className="las la-project-diagram"></i></p>
                        <h4 className={Style.featureHead}>CPA NETWORKS</h4>
                        <p className={Style.featureText}>
                            Affiliate networks have to pay for using existing platforms on a monthly basis or
                            spend money on developing proprietary platforms
                        </p>
                    </div>

                </div>
            </section>
            {/* feature-section-------- */}

            {/* about-section------ */}
            <section className={Style.aboutSection} id="about">
                <div className={Style.aboutImageSection}>
                    <Image src={images.about} />


                </div>
                <div className={Style.aboutTextSection}>
                    <h3 className={Style.aboutHeader}>Meet Future IDF</h3>
                    <p className={Style.aboutText}>
                        We will strive to make IDFChain as one of the prominent
                        way Blockchain will be used in different areas of business
                        and economy as well as social welfare and other major areas
                        of technology
                    </p>
                    <p className={Style.aboutText}><i className="las la-arrow-right"></i>IDFChain Blockchain</p>
                    <p className={Style.aboutText}><i className="las la-arrow-right"></i>Multicurrency Wallet</p>
                    <p className={Style.aboutText}><i className="las la-arrow-right"></i>Defi Exchange</p>
                </div>
            </section>
            <section className={Style.futureSection}>
                <h3>Future Products</h3>
                <div className={Style.futureItemBlock}>
                    <ul className={Style.futureColumn}>
                        <li><i className="las la-star"></i>IDFChain Blockchain</li>
                        <li><i className="las la-star"></i>Multicurrency Wallet</li>
                        <li><i className="las la-star"></i>Defi Exchange</li>
                        <li><i className="las la-star"></i>MultiVerse and MetaVerse</li>
                        <li><i className="las la-star"></i>Audit Platform for IDFChain</li>
                        <li><i className="las la-star"></i>NFT Marketplace</li>
                    </ul>
                    <ul className={Style.futureColumn}>
                        <li><i className="las la-star"></i>P2P Exchange</li>
                        <li><i className="las la-star"></i>Decentralized Marketplace for Products</li>
                        <li><i className="las la-star"></i>Social Networking Platform with Short videos feature</li>
                        <li><i className="las la-star"></i>Online Education Platform</li>
                        <li><i className="las la-star"></i>Dating App</li>
                        <li><i className="las la-star"></i>Browser</li>
                    </ul>
                    <ul className={Style.futureColumn}>
                        <li><i className="las la-star"></i>Financial and Insurance Services Platform</li>
                        <li><i className="las la-star"></i>Travel, Hotel and Holiday Booking Platform</li>
                        <li><i className="las la-star"></i>Payment Wallet</li>
                        <li><i className="las la-star"></i>Taxi, Bike and Vehicle Hailing Platform</li>
                        <li><i className="las la-star"></i>Asset Based Platform for Real State and other assets</li>
                        <li><i className="las la-star"></i>Services Platform</li>
                    </ul>
                </div>
            </section>
            <section className={Style.aboutSection}>
                <div className={Style.aboutTextSection}>
                    <h3 className={Style.aboutHeader}>Vision and Mission</h3>
                    <p className={Style.aboutText}>
                    </p>
                    <p className={Style.aboutText}><i className="las la-lock"></i>
                        <h2>Vision</h2>
                        To be at the forefront of new era of technology and innovations which serves next generation of human life , so they can live with more freedom and less fear.</p>
                    <p className={Style.aboutText}><i className="las la-lock"></i>
                        <h2>Mission</h2>
                        Is to give best products and services to users by exploring all possible frontiers in new technology and innovations, and also being socially responsible to our planet and our societies.</p>
                    <p className={Style.aboutText}><i className="las la-lock"></i>
                        <h2>Solution</h2>
                        We have planned a ecosystem of new solutions which will help users to save their assets as well as trade and use them for different services in the coming years. Also we will keep on researching on how we can reinvent the wheel in a way that blockchain can be used in most of the areas of day to day life and how it can be used for betterment of humankind and users of the technology.
                    </p>
                </div>
                <div className={Style.aboutImageSection}>
                    <Image src={images.vision} />

                </div>
            </section>
            {/* about-section------ */}
            {/* rail-section-- */}
            <section className={Style.railSection}>

                <div className={Style.railColumn}>
                    <div className={Style.railCard}>
                        <i className="las la-caret-left"></i>
                        <div>
                            <h3 className={Style.railHead}>HIGH SPEED AND LOW COSTS</h3>
                            <p className={Style.railText}>
                                Immediate funding without third-parties. Smart contracts autonomously
                                perform funding - collect and release payments
                            </p>
                        </div>
                    </div>
                    <div className={Style.railCard}>
                        <i className="las la-caret-left"></i>
                        <div>
                            <h3 className={Style.railHead}>FAIR DEALS ONLY</h3>
                            <p className={Style.railText}>
                                Open-source smart contract ensures fair and transparent deals between merchants and affiliates
                            </p>
                        </div>
                    </div>
                    <div className={Style.railCard}>
                        <i className="las la-caret-left"></i>
                        <div>
                            <h3 className={Style.railHead}>PROTECTION FROM HACKING</h3>
                            <p className={Style.railText}>
                                On a decentralized platform, all user accounts are independent; if one account is hacked, this won&apos;t breach the security of.
                            </p>
                        </div>
                    </div>
                    <div className={Style.railCard}>
                        <i className="las la-caret-left"></i>
                        <div>
                            <h3 className={Style.railHead}>COST EFFECTIVE</h3>
                            <p className={Style.railText}>
                                Scale economy through decentralization leading to significant decrease in transaction fees
                            </p>
                        </div>
                    </div>
                </div>
                <div className={Style.railColumn}>
                    <div className={Style.railCard}>
                        <i className="las la-caret-left"></i>
                        <div>
                            <h3 className={Style.railHead}>NO MORE MIDDLE MEN</h3>
                            <p className={Style.railText}>
                                Transactions are verified by distributed nodes, and anyone can join or leave the network as they please without disrupting the network&apos;s ability to form consensus on transactions.
                            </p>
                        </div>
                    </div>
                    <div className={Style.railCard}>
                        <i className="las la-caret-left"></i>
                        <div>
                            <h3 className={Style.railHead}>EASY ENTRY AND FAIR COMPETITION</h3>
                            <p className={Style.railText}>
                                Any one can join, and Fair for everyone without any partiality
                            </p>
                        </div>
                    </div>
                    <div className={Style.railCard}>
                        <i className="las la-caret-left"></i>
                        <div>
                            <h3 className={Style.railHead}>GLOBAL P2P TRADE FINANCING</h3>
                            <p className={Style.railText}>
                                The peer-to-peer architecture of blockchain allows all cryptocurrencies to be transferred worldwide, without the need of any middle-man or intermediaries or central server
                            </p>
                        </div>
                    </div>
                    <div className={Style.railCard}>
                        <i className="las la-caret-left"></i>
                        <div>
                            <h3 className={Style.railHead}>REAL-TIME DATABASE</h3>
                            <p className={Style.railText}>
                                Every Transaction and Updates are real time and directly pulled from Smart Contracts lying on Blockchain
                            </p>
                        </div>
                    </div>
                </div>

            </section>
            {/* rail-section-- */}

            {/* tokenomics-section-- */}
            <section className={Style.tokenomicsSection} id="token">
                <h2 className={Style.tokenomicsHeader}>Tokenomics</h2>
                <div className={Style.tokenomicsDetailsHolder}>
                    <div className={Style.tokenomicsColumn}>
                        <h4 className={Style.tokenDetailHead}>Token Name</h4>
                        <p className={Style.tokenDetailText}>IDF</p>
                        <h4 className={Style.tokenDetailHead}>Total Supply</h4>
                        <p className={Style.tokenDetailText}>500,000,000</p>
                        <h4 className={Style.tokenDetailHead}>Pre Sale Start Date</h4>
                        <p className={Style.tokenDetailText}>1st Oct 2022</p>
                        <h4 className={Style.tokenDetailHead}>Currencies Accepted</h4>
                        <p className={Style.tokenDetailText}>BNB</p>
                    </div>
                    <div className={Style.tokenomicsColumn}>
                        <h4 className={Style.tokenDetailHead}>ICO Pre- Sale IDF Supply Launch</h4>
                        <p className={Style.tokenDetailText}>1,000,000,000</p>
                        <h4 className={Style.tokenDetailHead}>ICO Supply OF IDF launch</h4>
                        <p className={Style.tokenDetailText}>1,000,000,000</p>
                        <h4 className={Style.tokenDetailHead}>Soft cap</h4>
                        <p className={Style.tokenDetailText}>4000 BNB</p>
                        <h4 className={Style.tokenDetailHead}>ICO Start Date</h4>
                        <p className={Style.tokenDetailText}>1st of Jan 2023</p>
                    </div>
                    <div className={Style.tokenomicsColumn}>
                        <h4 className={Style.tokenDetailHead}>Pre Sale - 1st Phase</h4>
                        <p className={Style.tokenDetailText}>1 BNB = 2,600,000,000 IDF</p>
                        <h4 className={Style.tokenDetailHead}>Pre Sale - 2nd Phase</h4>
                        <p className={Style.tokenDetailText}>1 BNB = 1,300,000,000 IDF</p>
                        <h4 className={Style.tokenDetailHead}>Pre Sale - 3rd Phase</h4>
                        <p className={Style.tokenDetailText}>1 BNB = 650,000,000 IDF</p>
                        <h4 className={Style.tokenDetailHead}>Pre Sale- 4th phase</h4>
                        <p className={Style.tokenDetailText}>	1 BNB = 325,000,000 IDF</p>
                    </div>
                </div>
                <p><small><i>*All above Data is only for Sample</i></small></p>
            </section>
            {/* tokenomics-section-- */}

            <section className={Style.chartSection}>
                <div>
                    <h3>Tokenomics</h3>
                    <Image src={images.tokenomics} />


                </div>
                <div>
                    <h3>Fund Allocation</h3>
                    <Image src={images.allocation} />

                </div>
            </section>

            {/* roadmap-section---------- */}
            <section className={Style.roadmapSection} id="roadmap">
                <h3>Roadmap</h3>

                <div className={Style.timeline}>
                    <div className={[Style.container, Style.left].join(" ")}>
                        <div className={Style.date}>April-June 2022</div>
                        <i className="icon ri-heart-line"></i>
                        <div className={Style.content}>
                            <p>
                                <ul>
                                    <li>Ideation of IDF Blockhain and IDF
                                    </li>
                                    <li>White paper, Future Goals and Road Map preparation.
                                    </li>
                                    <li>ICO Website Designing.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className={[Style.container, Style.right].join(" ")}>
                        <div className={Style.date}>July-Sept 2022</div>
                        <i className="icon ri-heart-line"></i>
                        <div className={Style.content}>
                            <p>
                                <ul>
                                    <li>ICO website Development For IDF
                                    </li>
                                    <li>Contract Deployment
                                    </li>
                                    <li>ICO website Launch
                                    </li>
                                    <li>
                                        Pre-Sale of IDF Stage-1
                                    </li>
                                    <li>
                                        Promotion through Partnerships and Affliates and Initial Buyers
                                    </li>
                                    <li>
                                        Building Team for Future Projects
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className={[Style.container, Style.left].join(" ")}>
                        <div className={Style.date}>Oct-Dec 2022</div>
                        <i className="icon ri-heart-line"></i>
                        <div className={Style.content}>
                            <p>
                                <ul>
                                    <li>Start IDF Chain Development
                                    </li>
                                    <li>Pre-Sale Stage 2
                                    </li>
                                    <li>InFluencer Promotion
                                    </li>
                                    <li>Start MultiCurrency crypto wallet development
                                    </li>
                                    <li>Pre-Sale Stage 3
                                    </li>
                                    <li>Pre-Sale Stage 4
                                    </li>
                                    <li>Team Expansion
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className={[Style.container, Style.right].join(" ")}>
                        <div className={Style.date}>Jan-March 2023</div>
                        <i className="icon ri-heart-line"></i>
                        <div className={Style.content}>
                            <p>
                                <ul>
                                    <li>IDF Launch to general Public
                                    </li>
                                    <li>dApp Wallet Launch
                                    </li>
                                    <li>Major Dex Listing
                                    </li>
                                    <li>
                                        Audit Solutions Platform Development
                                    </li>
                                    <li>
                                        Metaverse and Multiverse Platform Developmet Start
                                    </li>
                                    <li>
                                        Dex Platform Development Start
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className={[Style.container, Style.left].join(" ")}>
                        <div className={Style.date}>April-June 2023</div>
                        <i className="icon ri-heart-line"></i>
                        <div className={Style.content}>
                            <p>
                                <ul>
                                    <li>Blockchain Release Beta testing
                                    </li>
                                    <li>Dex Platform Launch and Integration in dApp
                                    </li>
                                    <li>Rvenue Sharing Staking Programme
                                    </li>
                                    <li>NFT marketplace Development Start
                                    </li>
                                    <li>P2P Exchange Development Start
                                    </li>
                                    <li>Blockchain Main net Release
                                    </li>
                                    <li>Smart Contract Integration support with Blockchain
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className={[Style.container, Style.right].join(" ")}>
                        <div className={Style.date}>July-Sept 2023</div>
                        <i className="icon ri-heart-line"></i>
                        <div className={Style.content}>
                            <p>
                                <ul>
                                    <li>IDF Exchange Beta Version Release
                                    </li>
                                    <li>Exchange and Wallet and Mobile Version Development
                                    </li>
                                    <li>Exchange Release
                                    </li>
                                    <li>
                                        Tier 1 listings on Exchange
                                    </li>
                                    <li>
                                        Invite Projects on our Blockcahin and Invite selected projects
                                    </li>
                                    <li>
                                        Finance and Lending Platform Development Start
                                    </li>
                                    <li>Multverse Metaverse Alpha Version
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className={[Style.container, Style.left].join(" ")}>
                        <div className={Style.date}>Oct-Dec 2023</div>
                        <i className="icon ri-heart-line"></i>
                        <div className={Style.content}>
                            <p>
                                <ul>
                                    <li>NFT Market Place Launch
                                    </li>
                                    <li>P2P Exchange launch
                                    </li>
                                    <li>DeFi platform launch
                                    </li>
                                    <li>Start Development of - Decentralised Market Place , Social App, Education App , Browser , Dating App
                                    </li>
                                    <li>Launch of Mobile version of Wallent and Exchange
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className={[Style.container, Style.right].join(" ")}>
                        <div className={Style.date}>Jan-March 2024</div>
                        <i className="icon ri-heart-line"></i>
                        <div className={Style.content}>
                            <p>
                                <ul>
                                    <li>Startup Studio and Launchapad Development
                                    </li>
                                    <li>New Partnerships
                                    </li>
                                    <li>Finance , Insurance and Lending Platform Launch
                                    </li>
                                    <li>
                                        Dervatives Platcorm Launch
                                    </li>
                                    <li>
                                        Payment wallet first version Launch
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className={[Style.container, Style.left].join(" ")}>
                        <div className={Style.date}>April-June 2024</div>
                        <i className="icon ri-heart-line"></i>
                        <div className={Style.content}>
                            <p>
                                <ul>
                                    <li>Social Networking and Short Video app Launch
                                    </li>
                                    <li>Education App launch
                                    </li>
                                    <li>Browser Launch
                                    </li>
                                    <li>Dating app Launch
                                    </li>
                                    <li>Travel booking Platform and app Launch
                                    </li>
                                    <li>Education App launch
                                    </li>
                                    <li>Dervatives Platform first version test
                                    </li>
                                    <li>Decentralised Market place Launch
                                    </li>
                                    <li>Payment App Launch
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className={[Style.container, Style.right].join(" ")}>
                        <div className={Style.date}>July-Sept 2024</div>
                        <i className="icon ri-heart-line"></i>
                        <div className={Style.content}>
                            <p>
                                <ul>
                                    <li>Online and Offline Services Platform Development start
                                    </li>
                                    <li>Taxi, Bike and Vehicle Hailing renting Platform Development start
                                    </li>
                                    <li>Asset Based Platform Development Start
                                    </li>
                                    <li>Game Platform development Start
                                    </li>
                                    <li>Matrimonial Platform Development Start
                                    </li>
                                    <li>Multiverse Metaverse and App Launch with NFT Integration
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className={[Style.container, Style.left].join(" ")}>
                        <div className={Style.date}>Oct-Dec 2024</div>
                        <i className="icon ri-heart-line"></i>
                        <div className={Style.content}>
                            <p>
                                <ul>
                                    <li>Start Development of Job Portal and app
                                    </li>
                                    <li>Start development of Real estate buy- sale and rental app
                                    </li>
                                    <li>Start R&amps;D in areas like Artificial intelligence, Machine Learning and Robotics
                                    </li>
                                    <li>
                                        Start R&amps;D in area of Hardware , computers , mobiles and and automobile Industry .
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className={[Style.container, Style.right].join(" ")}>
                        <div className={Style.date}>Jan-March 2025</div>
                        <i className="icon ri-heart-line"></i>
                        <div className={Style.content}>
                            <p>
                                <ul>
                                    <li>Derivatives Platform and app launch
                                    </li>
                                    <li>Services Platform and App Launch
                                    </li>
                                    <li>Multiverse Metaverse New Services Launch
                                    </li>
                                    <li>Taxi Hailing app and Platform launch
                                    </li>
                                    <li>Game Platform first version Launch
                                    </li>
                                    <li>Asset based platform First version launch
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className={[Style.container, Style.left].join(" ")}>
                        <div className={Style.date}>April-June 2025</div>
                        <i className="icon ri-heart-line"></i>
                        <div className={Style.content}>
                            <p>
                                <ul>
                                    <li>Matrimonial Website and app Launch
                                    </li>
                                    <li>Asset based Platform public version Launch
                                    </li>
                                    <li>Game platform final version launch
                                    </li>
                                    <li>
                                        JobPortal and app launch
                                    </li>
                                    <li>
                                        Real Estate app and website launch
                                    </li>

                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className={[Style.container, Style.right].join(" ")}>
                        <div className={Style.date}>July-Sept 2025</div>
                        <i className="icon ri-heart-line"></i>
                        <div className={Style.content}>
                            <p>
                                <ul>
                                    <li>Start Decentalied crowdfunding platform Development
                                    </li>
                                    <li>Start Decentralised Charity Platform Development
                                    </li>
                                    <li>Go be Continued -----------------
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* roadmap-section-------- */}


            {/* why-section-- */}
            <section className={Style.whySection}>
                <div className={Style.whyTextSection}>
                    <h2 className={Style.whyHeader}>Why choose us?</h2>
                    <p className={Style.whyAnswer}>
                        As we all know that any company thrives on its Mission and Vision and
                        can only become successful when it gets support of the people who believe
                        in their Mission and Vision. We have put forward our Vision of future in
                        front of you and we are very passionate to make a difference for current
                        and future generation of humanity.
                    </p>
                    <div className={Style.whyAnswerPoint}>
                        <h3>Authentic Brand</h3>
                        <p>
                            Our aim will be to be able to provide genuine value to the community
                            is the first step toward developing a meaningful products and services
                            and, as a result, a successful organisation.
                        </p>
                    </div>
                    <div className={Style.whyAnswerPoint}>
                        <h3>Comprehensive Platform</h3>
                        <p>
                            We prefer comprehensive platform for cryptocurrency enthusiasts rather
                            than having too many platforms to achieve their goal of growing funds
                            in the world of Blockchain
                        </p>
                    </div>
                    <div className={Style.whyAnswerPoint}>
                        <h3>Simple To Use</h3>
                        <p>
                            Our platform will be extremely simple to use, with only the necessary
                            options for users and other stakeholders.
                        </p>
                    </div>
                </div>
                <div className={Style.whyImageSection}>
                    <Image src={images.kredict} />

                </div>
            </section>
            {/* whitepaper-section------- */}
            <section className={Style.whitepaperSection} id="whitepaper">
                <div className={Style.whitepaperBlock}>
                    <div className={Style.whitepaperTextSection}>
                        <h2 className={Style.whitepaperHead}>Whitepaper</h2>
                        <p className={Style.whitepaperText}>
                            Total of 1 quadrillion (1,000,000,000,000,000) IDFs will be minted through
                            Smart contract and deployed through Binance Smart Chain . We will be selling 20% of the
                            tokens in presale which will be done in 4 phases which will run max for 92 days . 1st
                            presale for 45 days and rest 3 pre-sales for 15 days each. If the Pre-Sale phases goals
                            are reached before time, we will start next phase of pre sale within 24 hours. We have
                            kept the investment amount to minimum 0.1 BNB for our presale which will make easy for
                            most of the retail investors to invest.
                            We will not accept any FIAT currencies during the Pre-Sale as we firmly believe in digital
                            currencies and that&apos;s why working on building a ecosystem based on blockchain and
                            crypto assets and crypto currencies.
                        </p>
                    </div>
                    <div className={Style.whitepaperActionSection}>
                        <Link href="#"><a target="_blank" rel="noreferrer">Read Online</a></Link>
                        <Link href="#"><a target="_blank" rel="noreferrer" download>Download</a></Link>
                    </div>
                </div>
            </section>
            {/* whitepaper-section------- */}
        </>
    );
};

export default ourToken;
