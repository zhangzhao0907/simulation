import React from 'react';
import { createHashHistory } from "history";
import { Button, Table, Tag, Space, Drawer, Row, Col, Divider, Modal} from 'antd';
import { DeleteOutlined, SlidersOutlined } from '@ant-design/icons';
import {input, output} from './Global.js';
import './SimulationList.css';


const DescriptionItem = ({ title, content }) => (
    <div className="discription-wrapper">
      <p className="discription-wrapper-p">{title}:</p>
      {content}
    </div>
  );

  function Description(props) {
    const ss = [];
    for(let i = props.from; i <= props.to; i++){
        ss.push(<DescriptionItem title={input[i].title} content={props.dataNow[input[i].key]}></DescriptionItem>);
    }
    return ss;
  }


const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
        render: gender => {
            let colors = (gender == 'male') ? 'blue' : 'red';
            return (
                <Tag color={colors} key={gender}>{gender}</Tag>
            );
        },
    },
    {
        title: 'Location',
        dataIndex: 'wound_location',
        key: 'location',
    },
    {
        title: 'Render',
        dataIndex: 'render',
        key: 'render',
        render: render => {
            let colors = (render == 'true') ? 'blue' : 'red';
            return (
                <Tag color={colors} key={render}>{render}</Tag>
            );
        },
    },
    {
        title: 'Time',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: 'Action',
        dataIndex: 'index',
    },
];

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        index: i,
        id: i,
        render: i % 2 == 0 ? 'true' : 'false',
        time: `2020-11-11`,
        
        age: 32,
        gender: i % 2 == 1 ? 'male' : 'female',
        wound_location: 'face',
        bmi: 3.5 * i,
        weight: 67,
        wound_width: 34,
        wound_depth: 3 * i,
        skin_tension: 98,
        tgf_b: 29,
        tnf_a: 22.5,
        inflammatory_cytokine: 12.4,
        inflammatory_cell: 22.1,
        macrophages_concentraion:22.7,
        wound_healing_time: '2020-10-11',
        wound_infected: false,
        epidermal_laser_density: 32.3,
        dermal_laser_density: 32.3,
        laser_diameter: 22.2,
        laser_cross: 14.3,
        laser_inclination_angle: 80,
        duration_laser: 2.3,
        betamethason_dosage: 11,
        pressure: 99,
        tension_reduction: 80.3,
        botulinum_toxin: 22.1,
        tgf_antibody: 12.2,
        avastin_dosage: 32.2,
        inhibitor_dosage: 22.7,

        epidermal_thickness: 97.3,
        scar_thickness: 66.4,
        scar_width: 10,
        vessel_density: 89.5,
        type3_collagen_density: 12.5,
        Type1_collagen_density: 90.3,
        color: 23,
        smoothness: 21,
        tenderness: 34,
        itchy_intensity: 12,
        painness: 90,
        nerve_ending_density: 14.4,
        tgf_concentration: 15.3,
        tnf_concentration: 19.3,
        inflammatory_cytokine: 90.3,
        inflamatory_cell_concentration: 90.3,
        macrophages_concentraion: 89.3,
    });
}

class SimulationList extends React.Component {
    constructor(props) {
        super(props);
        columns[6].render = (index) => (
            <Space size="middle">
                <Button type="primary" shape="circle" icon={<SlidersOutlined />} onClick={() => this.showDrawer(index)} />
                <Button type="primary" danger shape="circle" icon={<DeleteOutlined />} />
            </Space>
        );

        this.state = {
            visible: false,
            i:0,
        };

        this.showDrawer = this.showDrawer.bind(this);
    }

    showDrawer = (index) => {
        if(index < 0 || index >= data.length){
            Modal.warning({
                title: 'System Tips',
                content: 'No More Item...',
              });
            return;
        }
        this.setState({
            visible: true,
            i:index,
        });
    };

    jump = () => {
        let history = createHashHistory();
        history.push({
            pathname: "/result",
        });
        history.go();
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const dataNow = data[this.state.i];
        return (
            <>
                <Table columns={columns} dataSource={data} />
                <Drawer
                    title='Simulation Resualt PreView'
                    width={900}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <Row>
                        <Col span={6} offset={1}>
                            <DescriptionItem title='ID' content={<Tag color='red' >{dataNow.id}</Tag>}></DescriptionItem>
                        </Col>
                        <Col span={6}>
                            <DescriptionItem title='Gender' content={<Tag color='blue' >{dataNow.gender}</Tag>}></DescriptionItem>    
                        </Col>
                        <Col span={6}>
                            <DescriptionItem title='Age' content={dataNow.age}></DescriptionItem>
                        </Col>
                        <Col span={5}>
                            <DescriptionItem title='Time' content={dataNow.time}></DescriptionItem>
                        </Col>
                    </Row>
                    <p className="sub-title" style={{marginTop:'10px'}}>Input Parameters</p>
                    <Row>
                        <Col span={7} offset={1}>
                            <Description dataNow={dataNow} from={2} to={10}/>
                            {/* <DescriptionItem title={input[2].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={input[3].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={input[4].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={input[5].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={input[6].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={input[7].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={input[8].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={input[9].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={input[10].title} content='12.5'></DescriptionItem> */}
                        </Col>
                        <Col span={8}>
                            <Description dataNow={dataNow} from={11} to={19}/>
                            {/* <DescriptionItem title={input[11].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={input[12].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={input[13].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={input[14].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={input[15].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={input[16].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={input[17].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={input[18].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={input[19].title} content='12.5'></DescriptionItem> */}
                        </Col>
                        <Col span={8}>
                            <Description dataNow={dataNow} from={20} to={27}/>
                            {/* <DescriptionItem title={input[20].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={input[21].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={input[22].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={input[23].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={input[14].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={input[25].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={input[26].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={input[27].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={input[27].title} content='12.5'></DescriptionItem> */}
                        </Col>
                    </Row>
                    <Divider />

                    <p className="sub-title">Simulation Resualt</p>
                    <Row>
                        <Col span={7} offset={1}>
                            <DescriptionItem title={output[0].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={output[1].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={output[2].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={output[3].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={output[4].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={output[5].title} content='12.5'></DescriptionItem>
                            
                        </Col>
                        <Col span={8}>
                            <DescriptionItem title={output[6].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={output[7].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={output[8].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={output[9].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={output[10].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={output[11].title} content='12.5'></DescriptionItem>
                        </Col>
                        <Col span={8}>
                            <DescriptionItem title={output[12].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={output[13].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={output[14].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={output[15].title} content='12.5'></DescriptionItem>
                            <DescriptionItem title={output[16].title} content='12.5'></DescriptionItem>
                        </Col>
                    </Row>
                    <Divider />
                    <Row>
                        <Col span={8} style={{textAlign:'center'}}>
                            <Button type="primary" onClick={() => this.showDrawer(this.state.i - 1)}>Previous</Button>
                        </Col>
                        <Col span={8} style={{textAlign:'center'}}>
                            <Button type="primary" style={{width:"200px"}} onClick={() => this.jump()}>3D Rendering</Button>
                        </Col>
                        <Col span={8} style={{textAlign:'center'}}>
                            <Button type="primary" onClick={() => this.showDrawer(this.state.i + 1)}>Next</Button>
                        </Col>

                    </Row>
                </Drawer>
            </>
        );
    }
}

export default SimulationList;