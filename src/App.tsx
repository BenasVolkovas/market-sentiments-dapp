import { useState, useEffect } from "react";
import { Modal } from "web3uikit";
import { useSnapshot } from "valtio";
import { useMoralisWeb3Api, useMoralis, useMoralisQuery } from "react-moralis";
import Header from "./components/Header";
import Title from "./components/Title";
import Coin from "./components/Coin";
import { store, Token } from "./State/Store";
import "./styles/App.css";

const App = () => {
    const Web3Api = useMoralisWeb3Api();
    const { Moralis, isInitialized } = useMoralis();
    const [btc, setBtc] = useState<number>(50);
    const [eth, setEth] = useState<number>(30);
    const snap = useSnapshot(store);

    const {
        data: tickersData,
        error: tickersError,
        isLoading: tickersIsLoading,
    } = useMoralisQuery("Tickers", (query) => query.descending("createdAt"));

    useEffect(() => {
        const createTokens = async () => {
            for (const token of tickersData) {
                const price = await fetchTokenPrice(
                    token.attributes.cryptoAddress
                );

                const newToken: Token = {
                    ticker: token.attributes.ticker,
                    address: token.attributes.address,
                    percentage: 50,
                    price: price,
                };
                store.tokens.push(newToken);
            }
        };

        if (!tickersIsLoading && isInitialized && tickersError === null) {
            createTokens();
        }
    }, [tickersIsLoading, isInitialized]);

    // useMoralisSubscription("Tickers", (q) => q, [], {
    //     onUpdate: (data) => alert(data.attributes.ticker),
    // });

    // useEffect(() => {fetchTokenPrice()}, [snap.modalToken]);

    // useEffect(() => {
    //     if (isInitialized) {
    //         // getRatio
    //     }
    // }, [isInitialized]);

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

    const removeModal = () => {
        store.modalVisible = false;
    };

    // const getPercentageRatio = async (
    //     ticker: string,
    //     setPercentage: (perc: number) => void
    // ) => {
    //     const votes = Moralis.Object.extend("Votes");
    //     const votesQuery = new Moralis.Query(votes);
    //     votesQuery.equalTo("_ticker", ticker);
    //     votesQuery.descending("createdAt");
    //     const results = await votesQuery.first();
    //     let ratio = 50;
    //     if (results !== undefined) {
    //         let up = parseInt(results.attributes._upCount);
    //         let down = parseInt(results.attributes._downCount);
    //         ratio = Math.round((up / (up + down)) * 100);
    //     }
    //     setPercentage(ratio);
    // };

    return (
        <>
            <Header />
            <Title />
            <div className="list">
                <Coin percentage={btc} setPercentage={setBtc} token={"BTC"} />
                <Coin percentage={eth} setPercentage={setEth} token={"ETH"} />
            </div>

            <Modal
                title={snap.modalToken}
                hasFooter={false}
                isVisible={snap.modalVisible}
                onCloseButtonPressed={() => removeModal()}
                children={<div></div>}
                isCentered={true}
            ></Modal>
        </>
    );
};

export default App;
