import React from "react";
import { Button } from "web3uikit";
import "../styles/App.css";

type Props = {
    setPercentage: React.Dispatch<React.SetStateAction<number>>;
};

const Votes = ({ setPercentage }: Props) => {
    return (
        <div className="votes">
            <Button
                onClick={() => setPercentage((perc) => perc + 1)}
                text="Up"
                theme="status"
                type="button"
                icon="chevronUp"
                color="blue"
            />
            <Button
                onClick={() => setPercentage((perc) => perc - 1)}
                text="Down"
                theme="status"
                type="button"
                icon="chevronDown"
                color="blue"
            />
        </div>
    );
};

export default Votes;
