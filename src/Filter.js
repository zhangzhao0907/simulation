import { Form, DatePicker, Input, Button, Row, Col, Radio, Switch, Select } from 'antd';

const { RangePicker } = DatePicker;
const { Option } = Select;

const rangeConfig = {
    rules: [{ type: 'array', message: 'Please select time!' }],
};

const Fiter = () => {
    const onFinish = fieldsValue => {

    };

    return (
        <Form onFinish={onFinish} size='small'>
            <Row gutter={[16, 0]}>
                <Col span={4}>
                    <Form.Item name={'id'} label="Search By Id">
                        <Input placeholder="please enter the simulation id" />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item>
                        <Button type="primary">Search</Button>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[16, 0]} style={{ marginTop: "-10px" }}>
                <Col span={6}>
                    <Form.Item name="Date" label="Date" {...rangeConfig}>
                        <RangePicker />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item name="gender" label="Gender">
                        <Radio.Group>
                            <Radio.Button value="male">Male</Radio.Button>
                            <Radio.Button value="female">Female</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                </Col>
                <Col span={3}>
                    <Form.Item name="render" label="Render" valuePropName="checked">
                        <Switch />
                    </Form.Item>
                </Col>

                <Col span={4}>
                    <Form.Item name="location" label="Location">
                        <Select defaultValue="1" style={{ width: 100 }}>
                            <Option value="1">All</Option>
                            <Option value="2">Head</Option>
                            <Option value="3">Face</Option>
                            <Option value="4">Body</Option>
                            <Option value="5">Hand</Option>
                            <Option value="6">Foot</Option>
                        </Select>
                    </Form.Item>
                </Col>

                <Col span={3}>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Search</Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};

export default Fiter;