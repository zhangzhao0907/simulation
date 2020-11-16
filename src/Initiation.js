import './Initiation.css';
import {
  Form,
  InputNumber,
  Radio,
  Button,
  Input,
  DatePicker,
  Divider,
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
      history.push('/simulations');
  };

  return (
    <Form
      name="initiation"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{
        ['age']: 25,
        ['bmi']: 18.5,
        ['weight']: 60,
      }}>
      <p className="banner">Initiate a Simulation</p>
      <Divider style={{ margin: "0 0 50px" }} />
      <Form.Item name="age" label="Age 年龄：">
        <InputNumber min={1} max={100} />
      </Form.Item>

      <Form.Item name="gender" label="Gender 性别：">
        <Radio.Group>
          <Radio value="男">男</Radio>
          <Radio value="女">女</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item name="wound_location" label="Wound Location 伤疤位置：">
        <Input placeholder="please enter your wound location" style={{ width: "400px" }} />
      </Form.Item>

      <Form.Item name="bmi" label="BMI：">
        <InputNumber min={1} max={300} />
        <span className="span-text">(BMI index)</span>
      </Form.Item>

      <Form.Item name="weight" label="Weight 体重：">
        <InputNumber min={1} max={150} />
        <span className="span-text">(kg)</span>
      </Form.Item>

      <Form.Item name="wound_width" label="Wound Width 伤疤宽度：">
        <InputNumber min={1} max={150} />
        <span className="span-text">(mm)</span>
      </Form.Item>

      <Form.Item name="wound_depth" label="Wound Depth 伤疤深度：">
        <InputNumber min={1} max={150} />
        <span className="span-text">(mm)</span>
      </Form.Item>

      <Form.Item name="skin_tension" label="Skin Tension 皮肤张力：">
        <InputNumber min={1} max={150} />
        <span className="span-text">(the discription of the parameter)</span>
      </Form.Item>

      <Form.Item name="tgf" label="TGF-β Concentraion：">
        <InputNumber min={1} max={150} />
        <span className="span-text">(the discription of the parameter)</span>
      </Form.Item>

      <Form.Item name="tnf" label="TNF-ɑ Concentraion：">
        <InputNumber min={1} max={150} />
        <span className="span-text">(the discription of the parameter)</span>
      </Form.Item>

      <Form.Item name="inflammatory_cytokine" label="Inflammatory Cytokine Concentraion：">
        <InputNumber min={1} max={150} />
        <span className="span-text">(the discription of the parameter)</span>
      </Form.Item>

      <Form.Item name="inflammatory_cell" label="Inflammatory Cell Concentraion：">
        <InputNumber min={1} max={150} />
        <span className="span-text">(the discription of the parameter)</span>
      </Form.Item>

      <Form.Item name="macrophages_concentraion" label="Macrophages Concentraion：">
        <InputNumber min={1} max={150} />
        <span className="span-text">(the discription of the parameter)</span>
      </Form.Item>

      <Form.Item name="wound_healing_time" label="Wound Healing Time 治疗时间：">
        <DatePicker />
        <span className="span-text">(Please select a date)</span>
      </Form.Item>

      <Form.Item name="wound_infected" label="Wound Infected 伤口感染：">
        <Radio.Group>
          <Radio value="是">是</Radio>
          <Radio value="否">否</Radio>
        </Radio.Group>
      </Form.Item>

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
        <span className="span-text">(mm)</span>
      </Form.Item>

      <Form.Item name="laser_cross" label="Laser Cross Section Shape：">
        <Input placeholder="please describe your Laser Cross Section Shape" />
        <span className="span-text">(the discription of the parameter)</span>
      </Form.Item>

      <Form.Item name="laser_inclination_angle" label="Laser Inclination Angle：">
        <InputNumber min={1} max={150} />
        <span className="span-text">(the discription of the parameter)</span>
      </Form.Item>

      <Form.Item name="duration_laser" label="Duration Between Laser Treatment：">
        <InputNumber min={1} max={150} />
        <span className="span-text">(the discription of the parameter)</span>
      </Form.Item>

      <Form.Item name="betamethason_dosage" label="Betamethason Dosage：">
        <InputNumber min={1} max={150} />
        <span className="span-text">(the discription of the parameter)</span>
      </Form.Item>

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


      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 10,
        }}
      >
        <Button type="primary" htmlType="submit">
          Simulation
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Initiation;