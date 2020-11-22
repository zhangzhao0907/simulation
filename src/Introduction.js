import { Typography } from 'antd';
import {Image} from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

const Introduction = () => {
    return (
        <Typography style={{ margin: '30px' }}>
            <Title>Introduction</Title>
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
            <Title level={2}>How to use the system</Title>
            <Paragraph>
                <p style={{marginTop:"10px"}}>click the left arrow to collopse the menu.</p>
                <Image src="tutorial/1.png"/>
                <p style={{marginTop:"10px"}}>it should be like this.</p>
                <Image src="tutorial/2.png"/>
                <p style={{marginTop:"10px"}}>click the Simulation item in the menu to initiate a simulation.</p>
                <p style={{marginTop:"10px"}}>When you have finished entering parameters. click the simulation button. In the development version, you can click the button directly without input any parameter.</p>
                <Image src="tutorial/3.png"/>
                <p style={{marginTop:"10px"}}>Wait a moment. the page will jump in several seconds.</p>
                <Image src="tutorial/4.png"/>
                <p style={{marginTop:"10px"}}>Now. you can see the simulation result. Including the 3D graph(replaced by a picture), the parameters your have input and the output index.</p>
                <Image src="tutorial/5.png"/>
                <p style={{marginTop:"10px"}}>you can click the simulation list item to see the simulation list page. In the top of the page, there are some filters. Behind it is the table.
                you can see the basic information of every simulation. There are two buttons in the right collum of the table. the right one is "delete", the left one is "more".</p>
                <Image src="tutorial/6.png"/>
                <p style={{marginTop:"10px"}}>A drawer page will pop up after you click the "more" button. It should looked like this.</p>
                <Image src="tutorial/7.png"/>
                <p style={{marginTop:"10px"}}>You can navigate to other simulations by the previous button and the next button. If you want to see more information such as the 3D graph, you
                can click the 3D Rendering button.</p>
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
                <ul>
                    <li>
                        <Link href="">How to use the system</Link>
                    </li>
                    <li>
                        <Link href="">the parameters interprete</Link>
                    </li>
                    <li>
                        <Link href="">contact us</Link>
                    </li>
                </ul>
            </Paragraph>

            <Paragraph>
                Press <Text keyboard>Esc</Text> to exit...
    </Paragraph>

        </Typography>
    );
}

export default Introduction;