require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

const { LOCAL_URL, PRIVATE_KEY } = process.env;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.17',
  networks: {
    local_host: {
      url: LOCAL_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
