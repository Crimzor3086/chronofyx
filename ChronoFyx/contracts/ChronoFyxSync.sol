// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract ChronoFyxSync is AccessControl {
    bytes32 public constant SYNC_ROLE = keccak256("SYNC_ROLE");

    event DataSynced(address indexed sender, bytes32 dataHash, uint256 timestamp);

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(SYNC_ROLE, msg.sender);
    }

    /**
     * @dev Grants SYNC_ROLE to an account.
     * Only callable by the DEFAULT_ADMIN_ROLE.
     */
    function grantSyncRole(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _grantRole(SYNC_ROLE, account);
    }

    /**
     * @dev Revokes SYNC_ROLE from an account.
     * Only callable by the DEFAULT_ADMIN_ROLE.
     */
    function revokeSyncRole(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _revokeRole(SYNC_ROLE, account);
    }

    /**
     * @dev Syncs data and emits an event.
     * Only callable by accounts with the SYNC_ROLE.
     */
    function syncData(bytes32 dataHash) external onlyRole(SYNC_ROLE) {
        emit DataSynced(msg.sender, dataHash, block.timestamp);
    }

    /**
     * @dev Checks if an account has the SYNC_ROLE.
     */
    function isSyncUser(address account) external view returns (bool) {
        return hasRole(SYNC_ROLE, account);
    }
}
