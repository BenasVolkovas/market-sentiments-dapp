import { ConnectButton, Row, Typography, Icon } from "web3uikit";
import "../styles/index.css";

const Header = () => {
    return (
        <div style={{ padding: "20px" }}>
            <Row alignItems="center" justifyItems="space-between">
                <Row alignItems="center">
                    <Icon fill="#ffffff" size={30} svg="pulse" />
                    <Typography variant="h1" color="white">
                        Market Sentiments
                    </Typography>
                </Row>
                <ConnectButton />
            </Row>
        </div>
    );
};

export default Header;
