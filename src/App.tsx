import {useEffect} from "react";
import {useSnapshot} from "valtio";
// import {
//     useMoralisWeb3Api,
//     useMoralis,
//     useMoralisQuery,
//     useMoralisSubscription,
// } from "react-moralis";
import Header from "./components/Header";
import Title from "./components/Title";
import Coin from "./components/Coin";
import {store} from "./helpers/Store";
import type {Token} from "./helpers/Types";
import "./styles/App.css";

interface Token {
    cryptoAddress: string;
    ticker: string;
    address: string;
    percentage: number;
    price: string;
}

const App = () => {
    // const Web3Api = useMoralisWeb3Api();
    // const { Moralis, isInitialized } = useMoralis();
    const snap = useSnapshot(store);

    const tickersData: Token[] = [
        // Create 3 random tokens
        {
            cryptoAddress: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
            ticker: "MKR",
            address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
            percentage: 87,
            price: "1455.86",
        },
        {
            cryptoAddress: "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
            ticker: "AAVE",
            address: "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
            percentage: 38,
            price: "68.83",
        },
        {
            cryptoAddress: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
            ticker: "UNI",
            address: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
            percentage: 51,
            price: "4.52",
        },
    ];
    const tickersError = null;
    const tickersIsLoading = false;

    // const {
    //     data: tickersData,
    //     error: tickersError,
    //     isLoading: tickersIsLoading,
    // } = useMoralisQuery("Tickers", (query) => query.descending("createdAt"));

    // useMoralisSubscription("Votes", (q) => q, [], {
    //     onUpdate: async (data) => {
    //         const percentage = await getPercentageRatio(data.attributes.ticker);
    //         store.tokens[
    //             snap.tokens.findIndex(
    //                 (x: Token) => x.ticker === data.attributes.ticker
    //             )
    //         ].percentage = percentage;
    //     },
    // });

    useEffect(() => {
        const createTokens = async () => {
            for (const token of tickersData) {
                const newToken: Token = {
                    cryptoAddress: token.cryptoAddress,
                    ticker: token.ticker,
                    address: token.address,
                    percentage: token.percentage,
                    price: token.price,
                };
                store.tokens.push(newToken);
            }
        };

        if (!tickersIsLoading && tickersError === null) {
            createTokens();
        }
    }, [tickersIsLoading]);

    return (
        <>
            <Header />
            <Title />
            <div className="list">
                {snap.tokens.map((token: Token, index: number) => {
                    return (
                        <Coin
                            key={index}
                            token={token.ticker}
                            percentage={token.percentage}
                            price={token.price}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default App;
