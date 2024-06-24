

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BinaryvilleRobotNFTModule = buildModule("BinaryvilleRobotNFTModule", (m) => {

  const robotNFT = m.contract("BinaryvilleRobotNFT");
console.log(robotNFT)
  return { robotNFT };
});

export default BinaryvilleRobotNFTModule;
