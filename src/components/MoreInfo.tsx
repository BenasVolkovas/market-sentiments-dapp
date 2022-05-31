import { Row, Button } from "web3uikit";
import { useSnapshot } from "valtio";
import { store } from "../State/Store";

type Props = {
    token: string;
};

const MoreInfo = ({ token }: Props) => {
    const openTokenModal = () => {
        store.modalToken = token;
        store.modalVisible = true;
    };

    return (
        <div style={{ marginTop: "15px" }}>
            <Row alignItems="center" justifyItems="center">
                <Button
                    onClick={() => openTokenModal()}
                    text="INFO"
                    theme="translucent"
                    type="button"
                    icon="book"
                    color="blue"
                />
            </Row>
        </div>
    );
};

export default MoreInfo;
