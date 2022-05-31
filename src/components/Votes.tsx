import React from "react";
import { Button, Row } from "web3uikit";
import "../styles/App.css";

type Props = {
    setPercentage: React.Dispatch<React.SetStateAction<number>>;
};

const Votes = ({ setPercentage }: Props) => {
    return (
        <div style={{ marginTop: "20px" }}>
            <Row alignItems="center" justifyItems="center">
                <Button
                    onClick={() => setPercentage((perc) => perc + 1)}
                    text="UP"
                    theme="status"
                    type="button"
                    icon="chevronUp"
                    color="blue"
                />
                <Button
                    onClick={() => setPercentage((perc) => perc - 1)}
                    text="DOWN"
                    theme="status"
                    type="button"
                    icon="chevronDown"
                    color="blue"
                />
            </Row>
        </div>
    );
};

export default Votes;
