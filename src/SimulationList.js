import React from 'react';
import { createHashHistory } from "history";
import { Button, Table, Tag, Space, Drawer, Row, Col, Modal, Card, Image } from 'antd';
import {
    DeleteOutlined, CodeSandboxOutlined, SlidersOutlined, ManOutlined, ScanOutlined,
    CalendarOutlined, ClockCircleOutlined, EditFilled, DropboxOutlined
} from '@ant-design/icons';
import { input, output } from './Global.js';

import './SimulationList.css';

import Filter from './Filter.js'


const DescriptionItem = ({ title, content }) => (

    <p className="discription">{title}:{content}</p>


);

function Description(props) {
    const ss = [];
    for (let i = props.from; i <= props.to; i++) {
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
        bmi: 3.5 * i,
        weight: 67,

        wound_width: 34,
        wound_depth: 3 * i,
        wound_location: 'face',
        wound_infected: false,

        epidermal_laser_density: 32.3,
        dermal_laser_density: 32.3,
        laser_diameter: 22.2,
        laser_cross: 14.3,
        laser_inclination_angle: 80,
        duration: 2.3,
        betamethason_dosage: 11,

        pressure: 99,
        tension_reduction: 80.3,
        botulinum_toxin: 22.1,
        tgf_b1_antibody: 12.2,
        avastin_dosage: 32.2,
        inhibitor_dosage: 22.7,

        epidermal_thickness: 97.3,
        scar_thickness: 66.4,
        scar_width: 10,
        vessel_density: 89.5,
        type3_collagen_density: 12.5,
        type1_collagen_density: 90.3,
        color: 23,
        smoothness: 21,
        tenderness: 34,
        itchy_intensity: 12,
        painness: 90,
        nerve_ending_density: 14.4,
        tgf_b_concentration: 15.3,
        tnf_a_concentration: 19.3,
        inflammatory_cytokine: 90.3,
        inflamatory_cell: 90.3,
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
            i: 0,
        };

        this.showDrawer = this.showDrawer.bind(this);
    }

    showDrawer = (index) => {
        if (index < 0 || index >= data.length) {
            Modal.warning({
                title: 'System Tips',
                content: 'No More Item...',
            });
            return;
        }
        this.setState({
            visible: true,
            i: index,
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
                <Filter />
                <Table columns={columns} dataSource={data} />
                <Drawer
                    width={900}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    drawerStyle={{ background: "#011528" }}
                >
                    <Row>
                        <Col span={12}>
                            <h1 style={{ color: "white", marginTop: "-10px" }}><CodeSandboxOutlined style={{ marginRight: "8px", color: "#1890ff" }} /><strong>Simulation Result Preview</strong></h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={5} offset={1}>
                            <h3 className="discription-h3"><ScanOutlined style={{ color: "#eb2f96", marginRight: "4px" }} />
                                ID:<strong style={{ marginLeft: "6px" }}>{dataNow.id}</strong>
                            </h3>
                        </Col>
                        <Col span={6}>
                            <h3 className="discription-h3"><ManOutlined style={{ color: "#eb2f96", marginRight: "4px" }} />
                                Gender:<strong style={{ marginLeft: "6px" }}>{dataNow.gender}</strong>
                            </h3>
                        </Col>
                        <Col span={6}>
                            <h3 className="discription-h3"><ClockCircleOutlined style={{ color: "#eb2f96", marginRight: "4px" }} />
                                Age:<strong style={{ marginLeft: "6px" }}>{dataNow.age}</strong>
                            </h3>
                        </Col>
                        <Col span={6}>
                            <h3 className="discription-h3"><CalendarOutlined style={{ color: "#eb2f96", marginRight: "4px" }} />
                                Date:<strong style={{ marginLeft: "6px" }}>{dataNow.time}</strong>
                            </h3>
                        </Col>
                    </Row>

                    <h3 className="sub-title"><EditFilled style={{ marginRight: "4px", color: "#1890ff" }} />Input Parameters</h3>

                    <Row gutter={[0, 8]} style={{marginTop:"-15px"}}>
                        <Col span={4}>
                            <div class="shader-small shader-small1">
                                <h1>Patient</h1>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="div-small div-small1">
                                <p className="discription"><span className="label-blue">{input[0].title}:</span>{dataNow[input[0].key]}</p>
                                <p className="discription"><span className="label-blue">{input[1].title}:</span>{dataNow[input[1].key]}</p>
                                <p className="discription"><span className="label-blue">{input[2].title}:</span>{dataNow[input[2].key]}</p>
                                <p className="discription"><span className="label-blue">{input[3].title}:</span>{dataNow[input[3].key]}</p>
                            </div>
                        </Col>

                        <Col span={4}>
                            <div class="shader-small shader-small2">
                                <h1>Wound</h1>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="div-small div-small2">
                                <p className="discription"><span className="label-green">{input[4].title}:</span>{dataNow[input[4].key]}</p>
                                <p className="discription"><span className="label-green">{input[5].title}:</span>{dataNow[input[5].key]}</p>
                                <p className="discription"><span className="label-green">{input[6].title}:</span>{dataNow[input[6].key]}</p>
                                <p className="discription"><span className="label-green">{input[7].title}:</span>{dataNow[input[7].key]}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={[0, 8]}>
                        <Col span={4}>
                            <div class="shader-small shader-small3">
                                <h1>Laser</h1>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="div-small div-small3">
                                <p className="discription"><span className="label-purple">{input[8].title}:</span>{dataNow[input[0].key]}</p>
                                <p className="discription"><span className="label-purple">{input[9].title}:</span>{dataNow[input[1].key]}</p>
                                <p className="discription"><span className="label-purple">{input[10].title}:</span>{dataNow[input[2].key]}</p>
                                <p className="discription"><span className="label-purple">{input[11].title}:</span>{dataNow[input[3].key]}</p>
                                <p className="discription"><span className="label-purple">{input[12].title}:</span>{dataNow[input[1].key]}</p>
                                <p className="discription"><span className="label-purple">{input[13].title}:</span>{dataNow[input[2].key]}</p>
                                <p className="discription"><span className="label-purple">{input[14].title}:</span>{dataNow[input[3].key]}</p>
                            </div>
                        </Col>

                        <Col span={4}>
                            <div class="shader-small shader-small4">
                                <h1>Intervention</h1>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="div-small div-small4">
                                <p className="discription"><span className="label-pink">{input[15].title}:</span>{dataNow[input[15].key]}</p>
                                <p className="discription"><span className="label-pink">{input[16].title}:</span>{dataNow[input[16].key]}</p>
                                <p className="discription"><span className="label-pink">{input[17].title}:</span>{dataNow[input[17].key]}</p>
                                <p className="discription"><span className="label-pink">{input[18].title}:</span>{dataNow[input[18].key]}</p>
                                <p className="discription"><span className="label-pink">{input[19].title}:</span>{dataNow[input[19].key]}</p>
                                <p className="discription"><span className="label-pink">{input[20].title}:</span>{dataNow[input[20].key]}</p>
                            </div>
                        </Col>
                    </Row>

                    <h3 className="sub-title"><DropboxOutlined style={{ marginRight: "4px", color: "#1890ff" }} />Simulation Resualt</h3>
                    <Card style={{ background: "#d9d9d9", marginTop: "-10px" }}>
                        <Row>
                            <Col span={8} offset={1}>
                                <DescriptionItem title={output[0].title} content='12.5'></DescriptionItem>
                                <DescriptionItem title={output[1].title} content='12.5'></DescriptionItem>
                                <DescriptionItem title={output[2].title} content='12.5'></DescriptionItem>
                                <DescriptionItem title={output[3].title} content='12.5'></DescriptionItem>
                                <DescriptionItem title={output[4].title} content='12.5'></DescriptionItem>
                                <DescriptionItem title={output[5].title} content='12.5'></DescriptionItem>

                            </Col>
                            <Col span={7}>
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
                    </Card>

                    <Row style={{ marginTop: '20px' }}>
                        <Col span={8} style={{ textAlign: 'center' }}>
                            <Button type="primary" onClick={() => this.showDrawer(this.state.i - 1)}>Previous</Button>
                        </Col>
                        <Col span={8} style={{ textAlign: 'center' }}>
                            <Button type="primary" style={{ width: "200px" }} onClick={() => this.jump()}>More</Button>
                        </Col>
                        <Col span={8} style={{ textAlign: 'center' }}>
                            <Button type="primary" onClick={() => this.showDrawer(this.state.i + 1)}>Next</Button>
                        </Col>
                    </Row>

                </Drawer>
            </>
        );
    }
}

export default SimulationList;