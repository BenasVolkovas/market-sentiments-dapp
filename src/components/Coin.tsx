import React, { useState, useEffect } from "react";
import { Typography, Row } from "web3uikit";
import Votes from "./Votes";
import MoreInfo from "./MoreInfo";
import "../styles/App.css";

type Props = {
    percentage: number;
    setPercentage: React.Dispatch<React.SetStateAction<number>>;
    token: string;
};

const Coin = ({ percentage, setPercentage, token }: Props) => {
    const [color, setColor] = useState<string>("yellow");

    useEffect(() => {
        if (percentage >= 60) {
            setColor("#228B22");
        } else if (percentage < 60 && percentage > 40) {
            setColor("#CCCC00");
        } else if (percentage <= 40) {
            setColor("#B22222");
        }
    }, [percentage]);

    return (
        <div>
            <Row alignItems="center" justifyItems="center">
                <div style={{ marginBottom: "20px" }}>
                    <Typography variant="h3" color="white" weight="bold">
                        <div className="token">{token}</div>
                    </Typography>
                </div>
            </Row>
            <div
                className="circle"
                style={{
                    boxShadow: `0 0 10px ${color}`,
                }}
            >
                <div
                    className="wave"
                    style={{
                        marginTop: `${100 - percentage}%`,
                        boxShadow: `0 0 100px ${color}`,
                        backgroundColor: color,
                    }}
                ></div>
                <div className="percentage">
                    {percentage}
                    <span style={{ fontSize: "30px" }}>%</span>
                </div>
            </div>

            <Votes setPercentage={setPercentage} />
            <MoreInfo token={token} />
        </div>
    );
};

export default Coin;
