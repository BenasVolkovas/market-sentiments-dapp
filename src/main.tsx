import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { MoralisProvider } from "react-moralis";

const appId: string = process.env.VITE_MORALIS_APP_ID as string;
const serverUrl: string = process.env.VITE_MORALIS_SERVER_URL as string;
ReactDOM.createRoot(document.getElementById("root")!).render(
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </MoralisProvider>
);
