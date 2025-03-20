// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract IPFSStorage is Ownable {
    mapping(string => string) private ipfsHashes; // Maps unique IDs to IPFS hashes

    event FileStored(address indexed owner, string id, string ipfsHash);
    event FileUpdated(address indexed owner, string id, string newIpfsHash);
    event FileDeleted(address indexed owner, string id);

    constructor(address initialOwner) Ownable(initialOwner) {} // ✅ Passes initial owner to Ownable

    /**
     * @dev Stores an IPFS hash associated with a unique ID.
     * Only the owner can store files.
     */
    function storeFile(string calldata id, string calldata ipfsHash) external onlyOwner {
        require(bytes(ipfsHashes[id]).length == 0, "File already exists");
        ipfsHashes[id] = ipfsHash;
        emit FileStored(msg.sender, id, ipfsHash);
    }

    /**
     * @dev Updates an existing IPFS hash for a given ID.
     * Only the owner can update files.
     */
    function updateFile(string calldata id, string calldata newIpfsHash) external onlyOwner {
        require(bytes(ipfsHashes[id]).length > 0, "File does not exist");
        ipfsHashes[id] = newIpfsHash;
        emit FileUpdated(msg.sender, id, newIpfsHash);
    }

    /**
     * @dev Retrieves an IPFS hash by its unique ID.
     */
    function getFile(string calldata id) external view returns (string memory) {
        require(bytes(ipfsHashes[id]).length > 0, "File not found");
        return ipfsHashes[id];
    }

    /**
     * @dev Deletes an IPFS record by its ID.
     * Only the owner can delete files.
     */
    function deleteFile(string calldata id) external onlyOwner {
        require(bytes(ipfsHashes[id]).length > 0, "File does not exist");
        delete ipfsHashes[id];
        emit FileDeleted(msg.sender, id);
    }
}
