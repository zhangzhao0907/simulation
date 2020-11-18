import './ResultData.css';
import React from 'react';
import { Statistic, Row, Col, Image, Table } from 'antd';
import { input, output } from './Global.js';
import { ExclamationCircleTwoTone, PieChartTwoTone, BoxPlotTwoTone, ExperimentTwoTone, StarTwoTone, SyncOutlined, FireOutlined
        ,BorderOutlined, NodeIndexOutlined, BugOutlined, LoginOutlined, DotChartOutlined, ThunderboltTwoTone} from '@ant-design/icons';



const dataSource = [];

for (let i = 0; i < 28; i++) {
  dataSource.push(
    {
      key: i,
      title: input[i].title,
      value: 32,
    }
  );
}

const columns = [
  {
    title: 'Input Parameter Name',
    dataIndex: 'title',
    key: 'title',
    width: '240px',
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
  },
];


const prefixStatic=[
  <ExclamationCircleTwoTone />,
  <PieChartTwoTone />,
  <BoxPlotTwoTone />,
  <ExperimentTwoTone />,

  <ExperimentTwoTone />,
  <ExperimentTwoTone />,
  <StarTwoTone />,
  <SyncOutlined spin style={{color:'#1890ff'}}/>,

  <SyncOutlined spin style={{color:'#1890ff'}}/>,
  <BugOutlined style={{color:'#1890ff'}}/>,
  <ThunderboltTwoTone style={{color:'#1890ff'}}/>,
  <NodeIndexOutlined style={{color:'#1890ff'}}/>,

  <DotChartOutlined style={{color:'#1890ff'}}/>,
  <DotChartOutlined style={{color:'#1890ff'}}/>,
  <FireOutlined style={{color:'#1890ff'}}/>,
  <BorderOutlined style={{color:'#1890ff'}}/>,

  <LoginOutlined style={{color:'#1890ff'}}/>

]
function OutPutRender() {
  const ss = [];
  for(let i = 0; i <= 16; i++){
      ss.push(<Col span={4}>
        <Statistic title={output[i].title} value={11.24 + i*0.4} precision={2} prefix={prefixStatic[i]}
            valueStyle={{ color: '#002766', fontFamily:'Times New Roman', fontWeight:'bold', fontSize:'16pt'}}/>
      </Col>);
  }
  return ss;
}



class ResultData extends React.Component {
  render() {
    return (
      <div className="site-statistic-demo-card">

        <Row gutter={[8, 16]}>
          <Col span={16}>
            <p className="banner">Simulation Result</p>
            <Image height={500} src="WebGL.jpg"/>
          </Col>
          <Col span={8}>
            <Table dataSource={dataSource} columns={columns} bordered={true}
              size='small' pagination={false} rowClassName='ant-table-tbodys' scroll={{ y: 500 }} />
          </Col>
        </Row>

        <Row gutter={[16, 16]} className='output-row'>
          <OutPutRender />
        </Row>
      </div>
    );
  }
}

export default ResultData;