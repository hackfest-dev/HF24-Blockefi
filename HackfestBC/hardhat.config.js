require("@nomicfoundation/hardhat-toolbox");
const SEPOLIA_URL='https://eth-sepolia.g.alchemy.com/v2/5o46hWSLePIuIwL3eMymmM122cbBQvc0';
const PRIVATE_KEY='a7344b5fdf865f3d28191d14dd2785313e5f3b7d910d396121ed2d0cb5b92823';
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks:{
    sepolia:{
      url:SEPOLIA_URL,
      accounts:[PRIVATE_KEY]
    }
  }
};
