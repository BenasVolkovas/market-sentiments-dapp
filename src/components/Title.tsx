import { Typography, Row } from "web3uikit";

const Title = () => {
    return (
        <div style={{ padding: "40px 20px 100px 20px" }}>
            <Row justifyItems="center">
                <Typography variant="h2" color="white">
                    Where do you think these tokens are going? To the moon or
                    not?
                </Typography>
            </Row>
        </div>
    );
};

export default Title;
