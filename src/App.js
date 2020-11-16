import React from 'react';
import './App.css';

import { Layout, Menu } from 'antd';
import {
  OrderedListOutlined,
  TeamOutlined,
  ReadOutlined,
  AreaChartOutlined,
} from '@ant-design/icons';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


import Initiation from './Initiation.js'
import ResultData from './ResultData.js'
import SimulationList from './SimulationList.js'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderFrame extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    const layoutMargin = collapsed ? "site-layout left80" : "site-layout left200";
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Router>
          <Sider className="side" collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className="logo">Simulation</div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<AreaChartOutlined />}>
                <Link to="/initiation">Task Initiation</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<OrderedListOutlined />}>
                <Link to="/simulations">Simulation List</Link>
            </Menu.Item>
              <SubMenu key="sub4" icon={<ReadOutlined />} title="Tutorial">
                <Menu.Item key="3">Introduction</Menu.Item>
                <Menu.Item key="4">Parameter</Menu.Item>
              </SubMenu>
              <Menu.Item key="5" icon={<TeamOutlined />}>
                About
            </Menu.Item>
            </Menu>
          </Sider>
          <Layout className={layoutMargin}>
            <Header className="site-layout-background" style={{ padding: 0 }}><h1 className="h1-title">Scar TreatMent Simulation System</h1></Header>
            <Content style={{ margin: '16px' }}>
              <div className="site-layout-background" style={{ padding: 20, minHeight: 600 }}>
                <Switch>
                  <Route path="/initiation">
                    <Initiation />
                  </Route>
                  <Route path="/simulations">
                    <SimulationList />
                  </Route>
                  <Route path="/result">
                    <ResultData />
                  </Route>
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Scar Treatment Simulation System@xinhua hospital</Footer>
          </Layout>
        </Router>
      </Layout>
    );
  }
}

export default SiderFrame;