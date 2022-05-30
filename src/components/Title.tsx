import { Typography, Row } from "web3uikit";

type Props = {};

const Title = (props: Props) => {
    return (
        <div style={{ padding: "20px" }}>
            <Row justifyItems="center">
                <Typography variant="h2" color="white">
                    Where do you think thses tokens are going? To the moon or
                    not?
                </Typography>
            </Row>
        </div>
    );
};

export default Title;
