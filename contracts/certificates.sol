// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract Certificate is ERC721, AccessControl {
    uint256 private certificateId;

    mapping(uint256 => string) private certificateData;
    mapping(uint256 => bool) private certificateValidated;

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    event CertificateMinted(uint256 indexed tokenId, address indexed recipient);
    event CertificateValidated(uint256 indexed tokenId, bool isValid);

    constructor() ERC721("CertificateToken", "CERT") {
        certificateId = 1; // Initialize the first certificate ID

        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(MINTER_ROLE, msg.sender);
    }

    modifier onlyMinter() {
        require(hasRole(MINTER_ROLE, msg.sender), "Caller is not a minter");
        _;
    }

    // Mint a new certificate
    function mintCertificate(address recipient, string memory data) external onlyMinter {
        uint256 tokenId = certificateId++;
        certificateData[tokenId] = data;
        certificateValidated[tokenId] = false;
        _mint(recipient, tokenId);
        emit CertificateMinted(tokenId, recipient);
    }

    // Validate a certificate
    function validateCertificate(uint256 tokenId, bool isValid) external onlyMinter {
        require(_exists(tokenId), "Certificate does not exist");
        certificateValidated[tokenId] = isValid;
        emit CertificateValidated(tokenId, isValid);
    }

    // Get certificate data by token ID
    function getCertificateData(uint256 tokenId) external view returns (string memory) {
        require(_exists(tokenId), "Certificate does not exist");
        return certificateData[tokenId];
    }

    // Check if a certificate is validated
    function isCertificateValid(uint256 tokenId) external view returns (bool) {
        require(_exists(tokenId), "Certificate does not exist");
        return certificateValidated[tokenId];
    }
}
