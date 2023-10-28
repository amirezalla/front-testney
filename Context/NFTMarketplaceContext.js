import React, {useState, useEffect} from "react";
import Web3Modal, {local} from "web3modal";
import {ethers} from "ethers";
import {useRouter} from "next/router";




import axios from "axios";
// import {OBJModel} from 'react-3d-viewer'
import Swal from "sweetalert2";
// import 'sweetalert2/themes/dark/dark.scss';
import {create as ipfsHttpClient} from "ipfs-http-client";

// const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

const projectId = "2LgfAX8FhCBfZ5UmJymQh5FTcq2";
const projectSecretKey = "6b2582086ac5ea2d15891314e0462603";
const auth = `Basic ${Buffer.from(`${projectId}:${projectSecretKey}`).toString(
    "base64"
)}`;



const subdomain = "https://ingressdefi.infura-ipfs.io";
const Api = "https://apingressdefi.com/api";
// const client = create({
//   grpc: '/ip4/127.0.0.1/tcp/5003/ws',
//   http: '/ip4/127.0.0.1/tcp/5002/http'
// })
const client = ipfsHttpClient({
    host: "infura-ipfs.io",
    port: 5001,
    protocol: "https",
    apiPath: '/api/v0',
    headers: {
        authorization: auth,
    },
});

//INTERNAL  IMPORT
import {
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    transferFundsAddress,
    transferFundsABI,
} from "./constants";

//---FETCHING SMART CONTRACT
const fetchContract = (signerOrProvider) =>
    new ethers.Contract(
        NFTMarketplaceAddress,
        NFTMarketplaceABI,
        signerOrProvider
    );

//---CONNECTING WITH SMART CONTRACT


const connectingWithSmartContract1 = async () => {
    try {

        var ethers = require('ethers');
        var url = 'https://data-seed-prebsc-1-s1.binance.org:8545/';
        var customHttpProvider = new ethers.providers.JsonRpcProvider(url);
        const contract = fetchContract(customHttpProvider);
        console.log(contract);
        const data = await contract.fetchMarketItems();
        console.log(data);
        return contract;
    } catch (error) {
        console.log("Something went wrong while connecting with contract", error);
    }
};
const connectingWithSmartContract = async () => {
    try {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        console.log(provider);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        return contract;
    } catch (error) {
        console.log("Something went wrong while connecting with contract", error);
    }
};

export const NFTMarketplaceContext = React.createContext();

export const NFTMarketplaceProvider = ({children}) => {
    const titleData = "Discover, collect, and sell NFTs";

    //------USESTAT
    const [error, setError] = useState("");
    const [openError, setOpenError] = useState(false);
    const [currentAccount, setCurrentAccount] = React.useState([]);
    const [accountBalance, setAccountBalance] = useState("");
    const router = useRouter();

    //---CHECK IF WALLET IS CONNECTD

    const checkIfWalletConnected = async () => {
        try {

            // if (!window.ethereum)
            //   // return setOpenError(true), setError("Install MetaMask");
            //   console.log('install to MetaMask');

            //     const accounts = await window.ethereum.request({
            //       method: "eth_accounts",
            //     });
            //   }else{
            //     const accounts = await window.ethereum.request({
            //     method: "eth_accounts",
            // });
            //   }
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });
            if (accounts.length) {
                setCurrentAccount(accounts[0]);
                // console.log(accounts[0]);
            } else {
                // setError("No Account Found");
                // setOpenError(true);
                console.log("No account");
            }

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const getBalance = await provider.getBalance(accounts[0]);
            const bal = ethers.utils.formatEther(getBalance);
            setAccountBalance(bal);
        } catch (error) {
            // setError("Something wrong while connecting to wallet");
            // setOpenError(true);
            console.log("not connected");
        }
    };

    useEffect(() => {
        checkIfWalletConnected();
    }, []);

    let provider; // Declare the provider outside of the functions


    const [web3Modal, setWeb3Modal] = useState(null); // State to store the web3Modal instance

    useEffect(() => {
      // Check if we are on the client side before creating the web3Modal instance
      if (typeof window !== "undefined") {
        const modal = new Web3Modal({
          network: 'bsc',
          cacheProvider: true,
          providerOptions: {
            injected: {
              package: null,
            },
          },
        });
        setWeb3Modal(modal); // Store the web3Modal instance in state
      }
    }, []);


    const disconnectWallet = async () => {
        await web3Modal.clearCachedProvider();
        localStorage.removeItem('access_token');
        localStorage.removeItem('user');
        window.location.reload();
    };
    //---CONNET WALLET FUNCTION
    const connectWallet = async () => {
        try {
            const provider = await web3Modal.connect();
            const web3Provider = new ethers.providers.Web3Provider(provider);
            const signer = web3Provider.getSigner();
            const address = await signer.getAddress();
            axios.post('https://apingressdefi.com/api/user/signup',{eth_address:address},{
                headers: {
                  'Content-Type': 'application/json',
                }
              }).then(function (response) {
                localStorage.setItem('access_token', response.data.access_token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                window.location.reload();
              }).catch(function (error) {
                console.log(error);
              });
                } catch (error) {
                    console.log("error");
                    console.log(error);
                }
        /*try {

          if (!window.ethereum)
           console.log("Metamask not connected")
           if(window.ethereum.networkVersion !=56){
            const networks ={
              bsc:{
                chainId:`0x${Number(56).toString(16)}`,
                chainName:`Binance Smart Chain Mainnet`,
                nativeCurrency:{
                  name:'Binance Chain Native Token',
                  symbol:'BNB',
                  decimals:18
                },
                rpcUrls:[
                  "https://bsc-dataseed1.binance.org",
                  "https://bsc-dataseed2.binance.org",
                  "https://bsc-dataseed3.binance.org",
                  "https://bsc-dataseed4.binance.org",
                  "https://bsc-dataseed4.ninicoin.io",
                  "wss://bsc-ws-node.nariox.org"
                ],
                blockExplorerUrls:["https://bscscan.com"]
              }
            }
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params:[
                {
                  ...networks['bsc']
                }
              ]
            });
          }
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });

          console.log(accounts);
          setCurrentAccount(accounts[0]);
    //login
            axios.post(Api+'/nonce', {
                wallet_address: accounts[0],
            })
                .then(function (response) {
                    console.log(response);
                    console.log('success');
                })
                .catch(function (error) {
                    console.log(error);
                    console.log('error');
                });

          //
          connectingWithSmartContract();
          //window.location.reload();
        } catch (error) {
          console.log(error)
          // setError("Error while connecting to wallet");
          // setOpenError(true);
        }*/
    };

    //---UPLOAD TO IPFS FUNCTION
    const uploadToIPFS = async (file) => {
        try {
            const added = await client.add({content: file});
            const url = `${subdomain}/ipfs/${added.path}`;
            var obj = {"url": url, "type": file.type}
            return obj;
        } catch (error) {
            setError("Error Uploading to IPFS");
            setOpenError(true);
        }
    };

    //---CREATENFT FUNCTION
    const createNFT = async (name, price, image, description, router) => {
        // if (!name || !description || !price || !photo)
        //   return setError("Data Is Missing"), setOpenError(true);

        const data = JSON.stringify({name, description, image});
        console.log(data);
        try {
            const added = await client.add(data);
            const url = `${subdomain}/ipfs/${added.path}`;

            await createSale(url, price);
            router.push("/searchPage");
        } catch (error) {
            setError("Error while creating NFT");
            setOpenError(true);
        }
    };

    //--- createSale FUNCTION
    const createSale = async (url, formInputPrice, isReselling, id) => {
        try {
            console.log(url, formInputPrice, isReselling, id);
            const price = ethers.utils.parseUnits(formInputPrice, "ether");

            const contract = await connectingWithSmartContract();
            console.log(contract)

            const listingPrice = await contract.getListingPrice();
            console.log(listingPrice)

            const transaction = !isReselling
                ? await contract.createToken(url, price, {
                    value: listingPrice.toString(),
                })
                : await contract.resellToken(id, price, {
                    value: listingPrice.toString(),
                });

            await transaction.wait();
            console.log(transaction);
        } catch (error) {
            setError("error while creating sale");
            setOpenError(true);
            console.log(error);
        }
    };
    //--FETCHNFTS FUNCTION

    const fetchNFTs = async () => {
        try {
            const provider = new ethers.providers.JsonRpcProvider(
                "https://data-seed-prebsc-1-s1.binance.org:8545/"
            );
            

            const contract = fetchContract(provider);

            const data = await contract.fetchMarketItems();
            console.log(data);

            const items = await Promise.all(
                data.map(
                    async ({tokenId, seller, owner, price: unformattedPrice}) => {
                        const tokenURI = await contract.tokenURI(tokenId);

                        const {
                            data: {image, name, description},
                        } = await axios.get(tokenURI, {});
                        const price = ethers.utils.formatUnits(
                            unformattedPrice.toString(),
                            "ether"
                        );

                        return {
                            price,
                            tokenId: tokenId.toNumber(),
                            seller,
                            owner,
                            image,
                            name,
                            description,
                            tokenURI,
                        };
                    }
                )
            );
            return items;

            // }
        } catch (error) {
            // setError("Error while fetching NFTS");
            // setOpenError(true);
            console.log(error);
        }
    };

    useEffect(() => {
        fetchNFTs();
    }, []);

    //--FETCHING MY NFT OR LISTED NFTs
    const fetchMyNFTsOrListedNFTs = async (type) => {
        try {
            if (currentAccount) {
                const contract = await connectingWithSmartContract();

                const data =
                    type == "fetchItemsListed"
                        ? await contract.fetchItemsListed()
                        : await contract.fetchMyNFTs();

                const items = await Promise.all(
                    data.map(
                        async ({tokenId, seller, owner, price: unformattedPrice}) => {
                            const tokenURI = await contract.tokenURI(tokenId);
                            const {
                                data: {image, name, description},
                            } = await axios.get(tokenURI);
                            const price = ethers.utils.formatUnits(
                                unformattedPrice.toString(),
                                "ether"
                            );

                            return {
                                price,
                                tokenId: tokenId.toNumber(),
                                seller,
                                owner,
                                image,
                                name,
                                description,
                                tokenURI,
                            };
                        }
                    )
                );
                return items;
            }
        } catch (error) {
            // setError("Error while fetching listed NFTs");
            // setOpenError(true);
        }
    };

    // useEffect(() => {
    //   fetchMyNFTsOrListedNFTs();
    // }, []);

    //---BUY NFTs FUNCTION
    const buyNFT = async (nft) => {
        try {
            const contract = await connectingWithSmartContract();
            const price = ethers.utils.parseUnits(nft.price.toString(), "ether");

            const transaction = await contract.createMarketSale(nft.tokenId, {
                value: price,
            });

            await transaction.wait();
            router.push("/author");
        } catch (error) {
            setError("Error While buying NFT");
            setOpenError(true);
        }
    };

    //------------------------------------------------------------------

    //----TRANSFER FUNDS

    const fetchTransferFundsContract = (signerOrProvider) =>
        new ethers.Contract(
            transferFundsAddress,
            transferFundsABI,
            signerOrProvider
        );

    const connectToTransferFunds = async () => {
        try {
            const web3Modal = new Wenb3Modal();
            const connection = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            const signer = provider.getSigner();
            const contract = fetchTransferFundsContract(signer);
            return contract;
        } catch (error) {
            console.log(error);
        }
    };
    //---TRANSFER FUNDS
    const [transactionCount, setTransactionCount] = useState("");
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);

    const transferEther = async (address, ether, message) => {
        try {
            if (currentAccount) {
                const contract = await connectToTransferFunds();
                console.log(address, ether, message);

                const unFormatedPrice = ethers.utils.parseEther(ether);
                // //FIRST METHOD TO TRANSFER FUND
                await ethereum.request({
                    method: "eth_sendTransaction",
                    params: [
                        {
                            from: currentAccount,
                            to: address,
                            gas: "0x5208",
                            value: unFormatedPrice._hex,
                        },
                    ],
                });

                const transaction = await contract.addDataToBlockchain(
                    address,
                    unFormatedPrice,
                    message
                );

                console.log(transaction);

                setLoading(true);
                transaction.wait();
                setLoading(false);

                const transactionCount = await contract.getTransactionCount();
                setTransactionCount(transactionCount.toNumber());
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };
    // logout the transaction


    //FETCH ALL TRANSACTION
    const getAllTransactions = async () => {
        try {
            if (ethereum) {
                const contract = await connectToTransferFunds();

                const avaliableTransaction = await contract.getAllTransactions();

                const readTransaction = avaliableTransaction.map((transaction) => ({
                    addressTo: transaction.receiver,
                    addressFrom: transaction.sender,
                    timestamp: new Date(
                        transaction.timestamp.toNumber() * 1000
                    ).toLocaleString(),
                    message: transaction.message,
                    amount: parseInt(transaction.amount._hex) / 10 ** 18,
                }));

                setTransactions(readTransaction);
                console.log(transactions);
            } else {
                console.log("On Ethereum");
            }
        } catch (error) {
            console.log(error);
        }
    };




    return (
        <NFTMarketplaceContext.Provider
            value={{
                checkIfWalletConnected,
                connectWallet,
                disconnectWallet,
                uploadToIPFS,
                createNFT,
                fetchNFTs,
                fetchMyNFTsOrListedNFTs,
                buyNFT,
                createSale,
                currentAccount,
                titleData,
                setOpenError,
                openError,
                error,
                transferEther,
                getAllTransactions,
                loading,
                accountBalance,
                transactionCount,
                transactions,
              
            }}
        >
            {children}
        </NFTMarketplaceContext.Provider>
    );
};