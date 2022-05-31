//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";

contract MarketSentiments is Ownable {
    struct Ticker {
        bool exists;
        uint256 upCount;
        uint256 downCount;
        address cryptoAddress;
        mapping(address => bool) voters;
    }

    string[] public tickersArray;
    mapping(string => Ticker) public tickers;

    event tickerAdded(string ticker, address cryptoAddress);

    event tickerUpdated(
        uint256 upCount,
        uint256 downCount,
        address voter,
        string ticker
    );

    function addTicker(string calldata _ticker, address _cryptoAddress)
        public
        onlyOwner
    {
        require(tickers[_ticker].exists == false, "Ticker already exists.");
        Ticker storage newTicker = tickers[_ticker];
        newTicker.exists = true;
        newTicker.cryptoAddress = _cryptoAddress;
        tickersArray.push(_ticker);

        emit tickerAdded(_ticker, _cryptoAddress);
    }

    function vote(string calldata _ticker, bool _voteIsUp) public {
        require(tickers[_ticker].exists, "This token does not exist.");
        require(
            tickers[_ticker].voters[msg.sender] == false,
            "You have already voted for this token"
        );

        Ticker storage t = tickers[_ticker];
        t.voters[msg.sender] = true;

        if (_voteIsUp) {
            t.upCount++;
        } else {
            t.downCount++;
        }

        emit tickerUpdated(t.upCount, t.downCount, msg.sender, _ticker);
    }

    function getVotes(string calldata _ticker)
        public
        view
        returns (uint256 up, uint256 down)
    {
        require(
            tickers[_ticker].exists,
            "This token is not defined in the database."
        );
        Ticker storage t = tickers[_ticker];
        return (t.upCount, t.downCount);
    }
}
