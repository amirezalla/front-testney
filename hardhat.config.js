require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
      hardhat: {},

    GOERLI: {
      // chainId: 80001,
      url: "https://eth-goerli.g.alchemy.com/v2/2rZDZybst0Ics4Z60CD6xLO0_R9mTidN",
      accounts: [`0x${"668ccce284d81c73f19f29491b80db6b1af23750374e78aa376a49e10e213c7e"}`],
    },

    bnb:{
      url:"https://bsc-dataseed.binance.org/",
      accounts:[`0x${"668ccce284d81c73f19f29491b80db6b1af23750374e78aa376a49e10e213c7e"}`],
    },

    bnb_test:{
      url:"https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts:[`0x${"64ea315d93a3d58b8e3e3ee01509e757ec17e7447da897e99a21d97f3fd4c5e7"}`],
    }

  },
};
