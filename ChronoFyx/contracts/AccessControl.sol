// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract CustomAccessControl is AccessControl {
    // Define roles using keccak256 hashing
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant USER_ROLE = keccak256("USER_ROLE");

    constructor() {
        // Assign the deployer as the default admin
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
    }

    /**
     * @dev Grants ADMIN_ROLE to an account.
     * Only callable by the DEFAULT_ADMIN_ROLE.
     */
    function grantAdminRole(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _grantRole(ADMIN_ROLE, account);
    }

    /**
     * @dev Revokes ADMIN_ROLE from an account.
     * Only callable by the DEFAULT_ADMIN_ROLE.
     */
    function revokeAdminRole(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _revokeRole(ADMIN_ROLE, account);
    }

    /**
     * @dev Grants USER_ROLE to an account.
     * Only callable by an ADMIN_ROLE.
     */
    function grantUserRole(address account) external onlyRole(ADMIN_ROLE) {
        _grantRole(USER_ROLE, account);
    }

    /**
     * @dev Revokes USER_ROLE from an account.
     * Only callable by an ADMIN_ROLE.
     */
    function revokeUserRole(address account) external onlyRole(ADMIN_ROLE) {
        _revokeRole(USER_ROLE, account);
    }

    /**
     * @dev Checks if an account has the ADMIN_ROLE.
     */
    function isAdmin(address account) external view returns (bool) {
        return hasRole(ADMIN_ROLE, account);
    }

    /**
     * @dev Checks if an account has the USER_ROLE.
     */
    function isUser(address account) external view returns (bool) {
        return hasRole(USER_ROLE, account);
    }
}
