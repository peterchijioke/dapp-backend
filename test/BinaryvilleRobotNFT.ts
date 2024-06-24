import { expect } from "chai";
import hre, { ethers } from "hardhat";
import { time } from "@nomicfoundation/hardhat-toolbox/network-helpers";

describe("MyNFT", function () {
  it("Should return the index or the minted NFT", async function () {
     
    
    const binaryvilleRobotNFT= await ethers.getContractFactory("BinaryvilleRobotNFT");
    
    const robotNFT=binaryvilleRobotNFT.deploy()
    const [signer]=await ethers.getSigners()
    const nftData = (await robotNFT).mintNFT(signer.address,"ipfs://test-url");
    await nftData
    console.log( nftData,"==========nftData========")

    expect( (await nftData).value).to.eq(0)
  });
});