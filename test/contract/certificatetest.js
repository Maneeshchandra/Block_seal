// test/contract/certificatetest.js
const { expect } = require("chai");

describe("Certificate Contract", function () {
  it("Should mint a new certificate", async function () {
    const Certificate = await ethers.getContractFactory("Certificate");
    const certificate = await Certificate.deploy();

    await certificate.deployed();

    const owner = await certificate.owner();
    expect(owner).to.equal(ownerAddress); // Replace with the expected owner's address
  });

  // Other test cases
});
