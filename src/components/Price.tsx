import { Row, Typography } from "web3uikit";

type Props = {
    price: string;
};

const Price = ({ price }: Props) => {
    return (
        <div style={{ marginTop: "10px" }}>
            <Row alignItems="center" justifyItems="center">
                <Typography variant="h3" color="white">
                    Price: {price}$
                </Typography>
            </Row>
        </div>
    );
};

export default Price;
