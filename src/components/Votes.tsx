import { useWeb3ExecuteFunction, useMoralis } from "react-moralis";
import { Button, Row } from "web3uikit";
import abi from "../abi/contracts/MarketSentiments.sol/MarketSentiments.json";
import "../styles/App.css";

type Props = {
    token: string;
};

const Votes = ({ token }: Props) => {
    const contractProcessor = useWeb3ExecuteFunction();
    const { isAuthenticated } = useMoralis();

    const vote = async (isVoteUp: boolean) => {
        if (isAuthenticated) {
            let options = {
                contractAddress: process.env.VITE_CONTRACT_ADDRESS,
                functionName: "vote",
                abi: abi,
                params: {
                    _ticker: token,
                    _voteIsUp: isVoteUp,
                },
            };

            await contractProcessor.fetch({
                params: options,
                onSuccess: () => {
                    alert("Voted successfully!");
                },
                onError: (error: any) => {
                    console.log(error);
                    try {
                        alert(error.data.message);
                    } catch (e) {
                        alert(error);
                    }
                },
            });
        } else {
            alert("Authenticate to vote.");
        }
    };

    return (
        <div style={{ marginTop: "20px" }}>
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
