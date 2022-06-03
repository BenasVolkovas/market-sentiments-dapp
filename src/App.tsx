import { useState, useEffect } from "react";
import { useSnapshot } from "valtio";
import {
    useMoralisWeb3Api,
    useMoralis,
    useMoralisQuery,
    useMoralisSubscription,
} from "react-moralis";
import Header from "./components/Header";
import Title from "./components/Title";
import Coin from "./components/Coin";
import { store, Token } from "./state/Store";
import "./styles/App.css";

const App = () => {
    const Web3Api = useMoralisWeb3Api();
    const { Moralis, isInitialized } = useMoralis();
    const snap = useSnapshot(store);

    const {
        data: tickersData,
        error: tickersError,
        isLoading: tickersIsLoading,
    } = useMoralisQuery("Tickers", (query) => query.descending("createdAt"));

    useMoralisSubscription("Votes", (q) => q, [], {
        onUpdate: async (data) => {
            const percentage = await getPercentageRatio(data.attributes.ticker);
            store.tokens[
                snap.tokens.findIndex(
                    (x: Token) => x.ticker === data.attributes.ticker
                )
            ].percentage = percentage;
        },
    });

    useEffect(() => {
        const createTokens = async () => {
            for (const token of tickersData) {
                const price = await fetchTokenPrice(
                    token.attributes.cryptoAddress
                );

                const percentage = await getPercentageRatio(
                    token.attributes.ticker
                );

                const newToken: Token = {
                    ticker: token.attributes.ticker,
                    address: token.attributes.address,
                    percentage: percentage,
                    price: price,
                };
                store.tokens.push(newToken);
            }
        };

        if (!tickersIsLoading && isInitialized && tickersError === null) {
            createTokens();
        }
    }, [tickersIsLoading, isInitialized]);

    const fetchTokenPrice = async (cryptoAddress: string): Promise<string> => {
        const options: {
            address: string;
            chain: "eth";
        } = {
            address: cryptoAddress,
            chain: "eth",
        };
        const price = await Web3Api.token.getTokenPrice(options);
        return price.usdPrice.toFixed(2);
    };

    const getPercentageRatio = async (ticker: string): Promise<number> => {
        const votes = Moralis.Object.extend("Votes");
        const votesQuery = new Moralis.Query(votes);
        votesQuery.equalTo("ticker", ticker);
        votesQuery.descending("createdAt");
        const results = await votesQuery.first();
        if (results === undefined) {
            return 50;
        } else {
            const up = parseInt(results.attributes.upCount);
            const down = parseInt(results.attributes.downCount);
            const ratio = Math.round((up / (up + down)) * 100);
            return ratio;
        }
    };

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
