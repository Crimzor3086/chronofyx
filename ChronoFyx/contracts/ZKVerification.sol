// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract ZKVerification is AccessControl {
    bytes32 public constant VERIFIER_ROLE = keccak256("VERIFIER_ROLE");

    event ProofVerified(address indexed verifier, bytes32 proofHash, bool isValid);

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
     * @dev Verifies a Zero-Knowledge proof.
     * Only callable by accounts with the VERIFIER_ROLE.
     */
    function verifyProof(bytes32 proofHash, bool isValid) external onlyRole(VERIFIER_ROLE) {
        emit ProofVerified(msg.sender, proofHash, isValid);
    }

    /**
     * @dev Checks if an account has the VERIFIER_ROLE.
     */
    function isVerifier(address account) external view returns (bool) {
        return hasRole(VERIFIER_ROLE, account);
    }
}
