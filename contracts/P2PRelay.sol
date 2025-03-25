// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract P2PRelay is AccessControl {
    bytes32 public constant VERIFIER_ROLE = keccak256("VERIFIER_ROLE");

    event DataRelayed(address indexed sender, bytes data, uint256 timestamp);

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(VERIFIER_ROLE, msg.sender);
    }

    /**
     * @dev Grants VERIFIER_ROLE to an account.
     * Only callable by the DEFAULT_ADMIN_ROLE.
     */
    function grantVerifierRole(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _grantRole(VERIFIER_ROLE, account);
    }

    /**
     * @dev Revokes VERIFIER_ROLE from an account.
     * Only callable by the DEFAULT_ADMIN_ROLE.
     */
    function revokeVerifierRole(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _revokeRole(VERIFIER_ROLE, account);
    }

    /**
     * @dev Relays data and emits an event.
     * Only callable by accounts with the VERIFIER_ROLE.
     */
    function relayData(bytes memory data) external onlyRole(VERIFIER_ROLE) {
        emit DataRelayed(msg.sender, data, block.timestamp);
    }

    /**
     * @dev Checks if an account has the VERIFIER_ROLE.
     */
    function isVerifier(address account) external view returns (bool) {
        return hasRole(VERIFIER_ROLE, account);
    }
}
