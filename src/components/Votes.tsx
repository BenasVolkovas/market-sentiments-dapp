import {Button, Row} from "web3uikit";
import abi from "../abi/contracts/MarketSentiments.sol/MarketSentiments.json";
import "../styles/App.css";

type Props = {
    token: string;
};

const Votes = ({token}: Props) => {
    const vote = async (isVoteUp: boolean) => {
        console.log("voted");
    };

    return (
        <div style={{marginTop: "20px"}}>
            <Row alignItems="center" justifyItems="center">
                <Button
                    onClick={() => vote(true)}
                    text="UP"
                    theme="status"
                    type="button"
                    icon="chevronUp"
                    color="blue"
                />
                <Button
                    onClick={() => vote(false)}
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
