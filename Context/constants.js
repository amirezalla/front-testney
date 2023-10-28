///0x5FbDB2315678afecb367f032d93F642f64180aa3
//0x5FbDB2315678afecb367f032d93F642f64180aa3

import nftMarketplace from "./NFTMarketplace.json";
import transferFunds from "./TransferFunds.json";

export const apiEndpoint="http://localhost:8000/api/";
//NFT MARKETPLACE
// export const NFTMarketplaceAddress =
//   "0xf1432fa56bbb5ed5620e2762f16243e2ad9463f9";
  // export const NFTMarketplaceAddress =
  // "0xEE2a0724fB89d64768198000E0020c84132a0Ba3";
    export const NFTMarketplaceAddress =
  "0xB4561a1Aa38cC86B46Ff86D5983C752547039638";
export const NFTMarketplaceABI = nftMarketplace.abi;

//TRANSFER FUNDS
export const transferFundsAddress =
  "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
export const transferFundsABI = transferFunds.abi;
