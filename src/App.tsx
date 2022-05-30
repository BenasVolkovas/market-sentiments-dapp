import { useState } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Coin from "./components/Coin";
import "./styles/App.css";
const App = () => {
    const [btc, setBtc] = useState<number>(50);

    return (
        <>
            <Header />
            <Title />
            <div className="list">
                <Coin percentage={btc} setPercentage={setBtc} token={"BTC"} />
            </div>
        </>
    );
};

export default App;
