// deployments/recordDeployments.js
const fs = require('fs');
const path = require('path');

const CONTRACTS_DIR = '../contracts'; // Path to the contracts directory
const DEPLOYMENTS_DIR = './deployments'; // Path to the deployments directory

function main() {
    // Get the list of contract artifacts from the contracts directory
    const contractArtifacts = fs.readdirSync(path.join(__dirname, CONTRACTS_DIR));

    // Create a deployments directory if it doesn't exist
    if (!fs.existsSync(DEPLOYMENTS_DIR)) {
        fs.mkdirSync(DEPLOYMENTS_DIR);
    }

    // Loop through each contract artifact and record deployment information
    contractArtifacts.forEach((contractArtifact) => {
        const contractName = contractArtifact.split('.')[0]; // Extract contract name
        const deploymentFile = path.join(__dirname, DEPLOYMENTS_DIR, `${contractName}Deployment.json`);

        // Replace this sample deployment object with actual deployment data
        const deploymentInfo = {
            contractName,
            deployedAt: new Date().toISOString(),
            network: process.env.NETWORK || 'development',
            contractAddress: '0x1234567890abcdef...', // Replace with the actual contract address
            transactionHash: '0xabcdef1234567890...', // Replace with the actual transaction hash
            otherField: 'otherValue', // Add any additional deployment-related data as needed
        };

        // Save the deployment information to a JSON file
        fs.writeFileSync(deploymentFile, JSON.stringify(deploymentInfo, null, 2));

        console.log(`Deployment information recorded for ${contractName}`);
    });
}

main();
