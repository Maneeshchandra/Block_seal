require('@nomiclabs/hardhat-waffle');
require('dotenv').config(); // Load environment variables from a .env file if needed

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      forking: {
        url: 'https://eth-mainnet.alchemyapi.io/v2/your-alchemy-api-key', // Replace with your Alchemy API key or Ethereum node URL for forking
      },
    },
    // Add more network configurations as needed (e.g., Rinkeby, mainnet)
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`, // Replace with your Infura Project ID or Ethereum node URL
      accounts: [`0x${process.env.RINKEBY_PRIVATE_KEY}`], // Replace with your Rinkeby account private key
    },
    // Add other networks as required
  },
  solidity: {
    version: '0.8.0', // Specify the Solidity compiler version
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
