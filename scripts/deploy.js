const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying RaihanToken with account:", deployer.address);
  console.log("Account balance:", hre.ethers.formatEther(await hre.ethers.provider.getBalance(deployer.address)), "ETH");

  const RaihanToken = await hre.ethers.getContractFactory("RaihanToken");
  const token = await RaihanToken.deploy(deployer.address);

  await token.waitForDeployment();

  const tokenAddress = await token.getAddress();
  console.log("RaihanToken deployed to:", tokenAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
