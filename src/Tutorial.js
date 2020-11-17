import { Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const Tutorial = () => {
    return (
        <Typography style={{ margin: '30px' }}>
            <Title>Tutorial</Title>
            <Paragraph>
                <ul>
                    <li>
                        <Link href="">Quick Start</Link>
                    </li>
                    <li>
                        <Link href="">How to use the system</Link>
                    </li>
                    <li>
                        <Link href="">The parameters interpretation</Link>
                    </li>
                    <li>
                        <Link href="">The result interpretation</Link>
                    </li>
                    <li>
                        <Link href="">3D Rendering introduction</Link>
                    </li>
                    <li>
                        <Link href="">Contact us</Link>
                    </li>
                </ul>
            </Paragraph>
            <Paragraph>
                The purpose of this project is to implement a web-based user interface as the frontend for a Scar
                Treatment Simulation System. The core functionalities include simulation parameter input interface,
                simulation result display interface and three-dimensional rendering of scar model..
            </Paragraph>
            <Title level={2}>System Description</Title>
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
            <Title level={2}>Frontend Specification</Title>
            <Title level={3}>1.Simulation Task Initiation</Title>
            <Paragraph>
                A simulation task can be initiated by sending a POST request with parameters in request body. Parameters
                should be sent to the server in JSON form.
            </Paragraph>
            <Title level={3}>2.Simulation Listing</Title>
            <Paragraph>
                A simulation task can be initiated by sending a POST request with parameters in request body. Parameters
                should be sent to the server in JSON form.
            </Paragraph>
            <Title level={3}>3.Simulation Result Retrieval</Title>
            <Paragraph>
                Simulation result can be retrieved by sending a GET request with task id. All results will be returned back in JSON form.
            </Paragraph>
            <Title level={2}>3D renderingn</Title>
            <Paragraph>
                The ultimate geometry of a scar can also be retrieved from the server. It is represented in a mesh where points
                and normals are specified. Material parameters will also be embedded in the return result. Rendering can be achieved
                by using WebGL.
            </Paragraph>

            <Paragraph>
                Press <Text keyboard>Esc</Text> to exit...
    </Paragraph>

        </Typography>
    );
}

export default Tutorial;