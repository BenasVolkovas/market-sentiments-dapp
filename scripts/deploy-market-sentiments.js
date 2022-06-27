const hre = require("hardhat");

async function main() {
    const MarketSentiments = await hre.ethers.getContractFactory(
        "MarketSentiments"
    );
    const marketSentiments = await MarketSentiments.deploy();
    await marketSentiments.deployed();

    console.log("MarketSentiments deployed to:", marketSentiments.address);
    if (hre.network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY) {
        console.log("Waiting for block confirmations...");
        await simpleStorage.deployTransaction.wait(6);
        await verify(simpleStorage.address, []);
    }
}

const verify = async (contractAddress, args) => {
    console.log("Verifying contract...");
    try {
        await hre.run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        });
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!");
        } else {
            console.log(e);
        }
    }
};

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
