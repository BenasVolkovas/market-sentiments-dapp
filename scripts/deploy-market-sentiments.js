const hre = require("hardhat");

async function main() {
    const MarketSentiments = await hre.ethers.getContractFactory(
        "MarketSentiments"
    );
    const marketSentiments = await MarketSentiments.deploy();
    await marketSentiments.deployed();

    console.log("MarketSentiments deployed to:", marketSentiments.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
