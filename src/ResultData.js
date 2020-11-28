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

        <Row gutter={[8, 24]}>
          <Col span={5}>
            <div class="shader-small shader-small1">
              <h1 style={{fontSize:'24pt'}}>Patient</h1>
            </div>
         
            <div className="div-small div-small1" style={{height:'180px'}}>
              <p className="discription"><span className="label-blue">{input[0].title}:</span>{2}</p>
              <p className="discription"><span className="label-blue">{input[1].title}:</span>{2}</p>
              <p className="discription"><span className="label-blue">{input[2].title}:</span>{2}</p>
              <p className="discription"><span className="label-blue">{input[3].title}:</span>{2}</p>
            </div>
          </Col>
          <Col span={5}>
            <div class="shader-small shader-small2">
              <h1 style={{fontSize:'24pt'}}>Wound</h1>
            </div>
         
            <div className="div-small div-small2" style={{height:'180px'}}>
              <p className="discription"><span className="label-green">{input[4].title}:</span>{2}</p>
              <p className="discription"><span className="label-green">{input[5].title}:</span>{2}</p>
              <p className="discription"><span className="label-green">{input[6].title}:</span>{2}</p>
              <p className="discription"><span className="label-green">{input[7].title}:</span>{2}</p>
            </div>
          </Col>
          <Col span={7}>
            <div class="shader-small shader-small3" style={{height:'110px', paddingTop:'34px'}}>
              <h1 style={{fontSize:'24pt'}}>Laser</h1>
            </div>
            <div className="div-small div-small3">
              <p className="discription"><span className="label-purple">{input[8].title}:</span>{2}</p>
              <p className="discription"><span className="label-purple">{input[9].title}:</span>{2}</p>
              <p className="discription"><span className="label-purple">{input[10].title}:</span>{2}</p>
              <p className="discription"><span className="label-purple">{input[11].title}:</span>{2}</p>
              <p className="discription"><span className="label-purple">{input[12].title}:</span>{2}</p>
              <p className="discription"><span className="label-purple">{input[13].title}:</span>{2}</p>
              <p className="discription"><span className="label-purple">{input[14].title}:</span>{2}</p>
            </div>
          </Col>
          <Col span={7}>
            <div class="shader-small shader-small4" style={{height:'110px', paddingTop:'34px'}}>
              <h1 style={{fontSize:'24pt'}}>Intervention</h1>
            </div>
            <div className="div-small div-small4">
              <p className="discription"><span className="label-pink">{input[15].title}:</span>{5}</p>
              <p className="discription"><span className="label-pink">{input[16].title}:</span>{2}</p>
              <p className="discription"><span className="label-pink">{input[17].title}:</span>{4}</p>
              <p className="discription"><span className="label-pink">{input[18].title}:</span>{2}</p>
              <p className="discription"><span className="label-pink">{input[19].title}:</span>{4}</p>
              <p className="discription"><span className="label-pink">{input[20].title}:</span>{2}</p>
            </div>
          </Col>
        </Row>

        <Row gutter={[0, 24]}>
          <Col span={24}>
            <Image height={650} width="100%" src="WebGL.jpg" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ResultData;