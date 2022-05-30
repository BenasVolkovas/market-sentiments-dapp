import { useState } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Coin from "./components/Coin";

import "./styles/index.css";

const App = () => {
    const [btc, setBtc] = useState<number>(50);

    return (
        <>
            <Header />
            <Title />
            <Coin percentage={btc} setPercentage={setBtc} token={"BTC"} />
        </>
    );
};

export default App;
