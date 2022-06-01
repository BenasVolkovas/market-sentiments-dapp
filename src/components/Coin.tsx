import { useState, useEffect } from "react";
import { Typography, Row } from "web3uikit";
import Votes from "./Votes";
import Price from "./Price";
import "../styles/App.css";

type Props = {
    token: string;
    percentage: number;
    price: string;
};

const Coin = ({ token, percentage, price }: Props) => {
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
            <div style={{ marginBottom: "20px" }}>
                <Row alignItems="center" justifyItems="center">
                    <Typography variant="h3" color="white" weight="bold">
                        <div className="token">{token}</div>
                    </Typography>
                </Row>
            </div>
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

            <Votes />
            <Price price={price} />
        </div>
    );
};

export default Coin;
