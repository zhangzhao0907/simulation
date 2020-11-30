import './Initiation.css';
import {
  Form,
  InputNumber,
  Radio,
  Button,
  Input,
  Select,
  Image,
  Row,
  Col,
} from 'antd';

import React from 'react';
import { useHistory } from "react-router-dom";

import axios from 'axios'


const formItemLayout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 14,
  },
};

const Initiation = () => {
  let history = useHistory();

  const onFinish = () => {
    axios.get('https://www.fitzcat.com:3000/findUser/oQ9bs4laMqVRFqcKhHpA1VM-IiYY', {
      firstName: 'test',
      lastName: 'test'
    }).then(function (response) {
      console.log(response);
    })
      .catch(function (error) {
        console.log(error);
      });
    history.push('/success');
  };

  return (
    <Form
      name="initiation"
      {...formItemLayout}
      onFinish={onFinish}
      size='small'
      initialValues={{
        ['age']: 25,
        ['bmi']: 18.5,
        ['weight']: 60,
      }}>
      <p className="banner">Initiate a Simulation</p>

      <Row gutter={[0, 16]}>
        <Col span={24} style={{ padding: 0, overflow: "hidden" }}>
          <Image width={300} height={220} src="init1.jpg" className="float-left"></Image>
          <div class="shader shader-blue" style={{ width: '300px', height: '220px' }}>
            <h1>Patient</h1>
          </div>

          <div className="div-style border-blue" style={{ height: "220px" }}>
            <Form.Item name="age" label='Age 年龄' style={{ color: "white" }}>
              <InputNumber min={1} max={100} />
            </Form.Item>

            <Form.Item name="gender" label="Gender 性别：">
              <Radio.Group>
                <Radio value="男">男</Radio>
                <Radio value="女">女</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item name="bmi" label="BMI：">
              <InputNumber min={1} max={300} />
              <span className="span-text">(BMI index)</span>
            </Form.Item>

            <Form.Item name="weight" label="Weight 体重：">
              <InputNumber min={1} max={150} />
              <span className="span-text">(kg)</span>
            </Form.Item>
          </div>
        </Col>
      </Row>


      <Row gutter={[0, 16]} style={{ marginTop: "25px" }}>
        <Col span={24} style={{ padding: 0, overflow: "hidden" }}>
          <Image width={300} height={220} src="init2.jpg" className="float-left"></Image>
          <div class="shader shader-green" style={{ width: '300px', height: '220px' }}>
            <h1>Wound</h1>
          </div>

          <div className="div-style border-green" style={{ height: "220px" }}>
            <Form.Item name="wound_width" label="Wound Width 疤痕宽度：">
              <InputNumber min={1} max={150} />
              <span className="span-text">(mm)</span>
            </Form.Item>

            <Form.Item name="wound_depth" label="Wound Depth 疤痕深度：">
              <InputNumber min={1} max={150} />
              <span className="span-text">(mm)</span>
            </Form.Item>

            <Form.Item name="wound_location" label="Wound Location 疤痕位置：">
              <Select defaultValue="1" style={{ width: 90 }}>
                <Select.Option value="1">Head</Select.Option>
                <Select.Option value="2">Face</Select.Option>
                <Select.Option value="3">Body</Select.Option>
                <Select.Option value="4">Hand</Select.Option>
                <Select.Option value="6">Foot</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item name="wound_infected" label="Wound Infected 伤口感染：">
              <Radio.Group>
                <Radio value="是">是</Radio>
                <Radio value="否">否</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
        </Col>
      </Row>

      <Row gutter={[0, 16]} style={{ marginTop: "25px" }}>
        <Col span={24} style={{ padding: 0, overflow: "hidden" }}>
          <Image width={300} height={315} src="init3.jpg" className="float-left"></Image>
          <div class="shader shader-purple" style={{ width: '300px', height: '315px' }}>
            <h1 style={{ marginTop: "120px" }}>Laser</h1>
          </div>

          <div className="div-style div-purple" style={{ height: "315px" }}>
            <Form.Item name="epidermal_laser_density" label="Epidermal Laser Density：">
              <InputNumber min={1} max={150} />
              <span className="span-text">(the discription of the parameter)</span>
            </Form.Item>

            <Form.Item name="dermal_laser_density" label="Dermal Laser Density：">
              <InputNumber min={1} max={150} />
              <span className="span-text">(the discription of the parameter)</span>
            </Form.Item>

            <Form.Item name="laser_diameter" label="Laser Diameter：">
              <InputNumber min={1} max={150} />
              <span className="span-text">(μm)</span>
            </Form.Item>

            <Form.Item name="laser_cross" label="Laser Cross Section Shape：">
              <Select defaultValue="1" style={{ width: 90 }}>
                <Select.Option value="1">Circle</Select.Option>
                <Select.Option value="2">Rect</Select.Option>
                <Select.Option value="3">Polygon</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item name="laser_inclination_angle" label="Laser Inclination Angle：">
              <InputNumber min={1} max={150} />
              <span className="span-text">(degree)</span>
            </Form.Item>

            <Form.Item name="duration_laser" label="Duration Between Laser Treatment：">
              <InputNumber min={1} max={150} />
              <span className="span-text">(days)</span>
            </Form.Item>
          </div>
        </Col>
      </Row>


      <Row gutter={[0, 16]} style={{ marginTop: "25px" }}>
        <Col span={24} style={{ padding: 0, overflow: "hidden" }}>
          <Image width={300} height={360} src="init4.jpg" className="float-left"></Image>
          <div class="shader shader-pink" style={{ width: '300px', height: '360px' }}>
            <h1 style={{ marginTop: "140px" }}>Intervention</h1>
          </div>

          <div className="div-style border-pink" style={{ height: "360px" }}>
            <Form.Item name="pressure" label="Pressure：">
              <InputNumber min={1} max={150} />
              <span className="span-text">(the discription of the parameter)</span>
            </Form.Item>

            <Form.Item name="tension_reduction" label="Tension Reduction：">
              <InputNumber min={1} max={150} />
              <span className="span-text">(the discription of the parameter)</span>
            </Form.Item>

            <Form.Item name="botulinum_toxin" label="Botulinum Toxin Type A Dosage：">
              <InputNumber min={1} max={150} />
              <span className="span-text">(the discription of the parameter)</span>
            </Form.Item>

            <Form.Item name="tgf_antibody" label="TGF-β1 Antibody Dosage：">
              <InputNumber min={1} max={150} />
              <span className="span-text">(the discription of the parameter)</span>
            </Form.Item>

            <Form.Item name="avastin_dosage" label="Avastin Dosage：">
              <InputNumber min={1} max={150} />
              <span className="span-text">(the discription of the parameter)</span>
            </Form.Item>

            <Form.Item name="inhibitor_dosage" label="Inhibitor Dosage：">
              <InputNumber min={1} max={150} />
              <span className="span-text">(the discription of the parameter)</span>
            </Form.Item>

            <Form.Item name="betamethason_dosage" label="Betamethason Dosage：">
              <InputNumber min={1} max={150} />
              <span className="span-text">(the discription of the parameter)</span>
            </Form.Item>
          </div>
        </Col>
      </Row>


      <Row style={{ marginTop: "10px" }}>
        <Col span={24}>
          <Button type="primary" htmlType="submit" style={{ width: '100%', height: '40px' }}>
            Simulation
            </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Initiation;