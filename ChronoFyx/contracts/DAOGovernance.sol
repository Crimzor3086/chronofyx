// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract DAOGovernance is Ownable {
    using Counters for Counters.Counter;
    
    struct Proposal {
        string description;
        uint256 votesFor;
        uint256 votesAgainst;
        bool executed;
    }
    
    Counters.Counter private _proposalIds;
    mapping(uint256 => Proposal) public proposals;
    mapping(address => mapping(uint256 => bool)) public hasVoted;
    
    event ProposalCreated(uint256 indexed proposalId, string description);
    event Voted(uint256 indexed proposalId, address indexed voter, bool support);
    event ProposalExecuted(uint256 indexed proposalId, bool success);
    
    function createProposal(string memory _description) external onlyOwner {
        _proposalIds.increment();
        uint256 proposalId = _proposalIds.current();
        proposals[proposalId] = Proposal(_description, 0, 0, false);
        emit ProposalCreated(proposalId, _description);
    }
    
    function vote(uint256 _proposalId, bool _support) external {
        require(!hasVoted[msg.sender][_proposalId], "Already voted");
        require(!proposals[_proposalId].executed, "Proposal already executed");
        require(proposals[_proposalId].votesFor + proposals[_proposalId].votesAgainst < type(uint256).max, "Vote count overflow");
        
        hasVoted[msg.sender][_proposalId] = true;
        if (_support) {
            proposals[_proposalId].votesFor++;
        } else {
            proposals[_proposalId].votesAgainst++;
        }
        emit Voted(_proposalId, msg.sender, _support);
    }
    
    function executeProposal(uint256 _proposalId) external onlyOwner {
        require(!proposals[_proposalId].executed, "Already executed");
        require(proposals[_proposalId].votesFor > proposals[_proposalId].votesAgainst, "Not enough votes");
        
        proposals[_proposalId].executed = true;
        emit ProposalExecuted(_proposalId, true);
    }
}

