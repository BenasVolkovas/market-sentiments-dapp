import React from "react";
import { Typography, Row } from "web3uikit";

type Props = {
    percentage: number;
    setPercentage: React.Dispatch<React.SetStateAction<number>>;
    token: string;
};

const Coin = ({ percentage, setPercentage, token }: Props) => {
    return (
        <Typography variant="h3" color="white">
            Coin
        </Typography>
    );
};

export default Coin;
