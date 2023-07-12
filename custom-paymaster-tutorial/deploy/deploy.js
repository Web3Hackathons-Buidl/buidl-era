const hre = require("hardhat");

async function deploy() {
  const MyPaymaster = await hre.ethers.getContractFactory("MyPaymaster");
  
  // Deploying the contract
  const myPaymaster = await MyPaymaster.deploy("ERC20_ADDRESS"); // Replace "ERC20_ADDRESS" with the actual ERC20 token address
  
  // Wait for the contract to be mined
  await myPaymaster.deployed();

  console.log("MyPaymaster contract deployed to:", myPaymaster.address);
}

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
