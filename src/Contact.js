import { Typography } from 'antd';

const { Title, Paragraph, Text} = Typography;

const Contact = () => {
    return (
        <Typography style={{ margin: '30px' }}>
            <Title>About Us</Title>
            <Paragraph>
                The purpose of this project is to implement a web-based user interface as the frontend for a Scar
                Treatment Simulation System. The core functionalities include simulation parameter input interface,
                simulation result display interface and three-dimensional rendering of scar model..
            </Paragraph>
            <Title level={2}>Contact Us</Title>
            <Paragraph>
                The Scar Treatment Simulation System will be mainly used by medical researchers around the world to
                test various scar treatment combinations. A user might specify many parameters as input and the frontend
                should send a request to the simulation server. The user will be able to retrieve the simulation result
                once it is finished. To enhance the interpretabitliy of results, the frontend wil also render realistic
                scar models using data returned by the simulation server.
                <Text strong>
                    Since one simulation could be very expensive, a user should not expect instantaneous results to be
                    generated. We have a database system to store previous simulation results and a user can retrieve it
                    as many times as he or she may want.
                </Text>.
            </Paragraph>
        </Typography>
    );
}

export default Contact;