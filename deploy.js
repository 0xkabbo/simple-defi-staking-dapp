const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Replace these addresses with actual token addresses on your network
  const stakingTokenAddr = "0xYourStakingTokenAddress";
  const rewardTokenAddr = "0xYourRewardTokenAddress";

  const Staking = await hre.ethers.getContractFactory("Staking");
  const staking = await Staking.deploy(stakingTokenAddr, rewardTokenAddr);

  await staking.deployed();

  console.log("Staking Contract deployed to:", staking.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
