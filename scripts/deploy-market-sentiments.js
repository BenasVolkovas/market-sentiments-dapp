const hre = require("hardhat");

async function main() {
    const MarketSentiments = await hre.ethers.getContractFactory(
        "MarketSentiments"
    );
    const marketSentiments = await MarketSentiments.deploy();
    await marketSentiments.deployed();

    console.log("MarketSentiments deployed to:", marketSentiments.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
