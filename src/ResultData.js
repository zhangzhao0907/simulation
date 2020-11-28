import './ResultData.css';
import React from 'react';
import { Row, Col, Image, Table, Tabs } from 'antd';
import { input, output } from './Global.js';
import ChartLine from "./ChartLine.js"

const { TabPane } = Tabs;



class SlidingTabs extends React.Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" tabPosition='left' style={{ height: 320, marginLeft: '-20px' }} tabBarGutter={0} type="card">
          {[...Array.from({ length: 17 }, (v, i) => i)].map(i => (
            <TabPane tab={output[i].title} key={i}>
              <ChartLine />
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}


class ResultData extends React.Component {
  render() {
    return (
      <div className="site-statistic-demo-card">
        <p className="banner">Simulation Result</p>
        <Row gutter={[16, 16]} className='output-row'>
          <Col span={24}>
            <SlidingTabs />
          </Col>
        </Row>

        <Row gutter={[0, 8]} style={{ marginTop: "-15px" }}>
          <Col span={4}>
            <div class="shader-small shader-small1">
              <h1>Patient</h1>
            </div>
          </Col>
          <Col span={8}>
            <div className="div-small div-small1">
              <p className="discription"><span className="label1">{input[0].title}:</span>{2}</p>
              <p className="discription"><span className="label1">{input[1].title}:</span>{2}</p>
              <p className="discription"><span className="label1">{input[2].title}:</span>{2}</p>
              <p className="discription"><span className="label1">{input[3].title}:</span>{2}</p>
            </div>
          </Col>

          <Col span={4}>
            <div class="shader-small shader-small2">
              <h1>Wound</h1>
            </div>
          </Col>
          <Col span={8}>
            <div className="div-small div-small2">
              <p className="discription"><span className="label2">{input[4].title}:</span>{2}</p>
              <p className="discription"><span className="label2">{input[5].title}:</span>{2}</p>
              <p className="discription"><span className="label2">{input[6].title}:</span>{2}</p>
              <p className="discription"><span className="label2">{input[7].title}:</span>{2}</p>
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
              <p className="discription"><span className="label3">{input[8].title}:</span>{2}</p>
              <p className="discription"><span className="label3">{input[9].title}:</span>{2}</p>
              <p className="discription"><span className="label3">{input[10].title}:</span>{2}</p>
              <p className="discription"><span className="label3">{input[11].title}:</span>{2}</p>
              <p className="discription"><span className="label3">{input[12].title}:</span>{2}</p>
              <p className="discription"><span className="label3">{input[13].title}:</span>{2}</p>
              <p className="discription"><span className="label3">{input[14].title}:</span>{2}</p>
            </div>
          </Col>

          <Col span={4}>
            <div class="shader-small shader-small4">
              <h1>Intervention</h1>
            </div>
          </Col>
          <Col span={8}>
            <div className="div-small div-small4">
              <p className="discription"><span className="label4">{input[15].title}:</span>{5}</p>
              <p className="discription"><span className="label4">{input[16].title}:</span>{2}</p>
              <p className="discription"><span className="label4">{input[17].title}:</span>{4}</p>
              <p className="discription"><span className="label4">{input[18].title}:</span>{2}</p>
              <p className="discription"><span className="label4">{input[19].title}:</span>{4}</p>
              <p className="discription"><span className="label4">{input[20].title}:</span>{2}</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Image height={650} width="100%" src="WebGL.jpg" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ResultData;