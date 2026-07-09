const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("RaihanToken", function () {
  it("deploys with the expected owner balance", async function () {
    const [owner] = await ethers.getSigners();
    const RaihanToken = await ethers.getContractFactory("RaihanToken");

    const token = await RaihanToken.deploy(owner.address);

    expect(await token.name()).to.equal("Raihan Token");
    expect(await token.symbol()).to.equal("RAIHAN");
    expect(await token.owner()).to.equal(owner.address);
    expect(await token.balanceOf(owner.address)).to.equal(
      ethers.parseUnits("1000000", 18),
    );
  });
});
