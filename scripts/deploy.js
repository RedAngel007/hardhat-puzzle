require('dotenv').config();
const ethers = require('ethers');

async function main(){
  // const url = process.env.LOCAL_URL
  // const privateKey = process.env.PRIVATE_KEY;

  // let artifacts = await hre.artifacts.readArtifact('Game1');

  // const provider = new ethers.providers.JsonRpcProvider(url)

  // let wallet = new ethers.Wallet(privateKey, provider);

  // let factory = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet)

  const factory = await hre.ethers.getContractFactory('Game1')
  const game1 = await factory.deploy();

  console.log('Game1 address', game1.address);

  await game1.deployed();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });