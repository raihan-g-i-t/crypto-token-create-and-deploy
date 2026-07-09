require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { SEPOLIA_RPC_URL, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;
const privateKey =
  PRIVATE_KEY && !PRIVATE_KEY.startsWith("0x") ? `0x${PRIVATE_KEY}` : PRIVATE_KEY;

/** @type import("hardhat/config").HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL || "",
      accounts: privateKey ? [privateKey] : [],
    },
    bsc: {
    url: process.env.BSC_RPC_URL || "https://bsc-dataseed.binance.org/",
    accounts: privateKey ? [privateKey] : [],
    chainId: 56,
}
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY || "",
  },
};
