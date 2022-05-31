import { useState } from "react";
import { Modal } from "web3uikit";
import { useSnapshot } from "valtio";
import Header from "./components/Header";
import Title from "./components/Title";
import Coin from "./components/Coin";
import { store } from "./State/Store";
import "./styles/App.css";

const App = () => {
    const [btc, setBtc] = useState<number>(50);
    const snap = useSnapshot(store);

    const removeModal = () => {
        store.modalVisible = false;
    };

    return (
        <>
            <Header />
            <Title />
            <div className="list">
                <Coin percentage={btc} setPercentage={setBtc} token={"BTC"} />
            </div>

            <Modal
                title={snap.modalToken}
                hasFooter={false}
                isVisible={snap.modalVisible}
                onCloseButtonPressed={() => removeModal()}
                children={<></>}
            />
        </>
    );
};

export default App;
