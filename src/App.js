import React from 'react';
import './App.css';

import { Layout, Menu, Image } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FolderOpenFilled,
  ReadFilled,
  FileTextFilled,
  DatabaseFilled,
  StarFilled,
  PhoneFilled
} from '@ant-design/icons';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Initiation from './Initiation.js'
import ResultData from './ResultData.js'
import SimulationList from './SimulationList.js'
import Introduction from './Introduction.js'
import Tutorial from './Tutorial.js'
import Success from './Success.js'
import Contact from './Contact.js'

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
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { collapsed } = this.state;
    const marginLayout = collapsed ? { marginLeft: "80px" } : { marginLeft: "200px" }
    const marginHeader = collapsed ? { left: "80px" } : { left: "200px" }
    const logoMargin = collapsed ? { marginRight: "8px", marginLeft: "6px" } : { marginRight: "8px" };
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Router>
          <Sider className="side" collapsed={collapsed} >
            <div className="logo"><Image width={45} height={45} src="logo.png" style={logoMargin} /><strong>Simulation</strong></div>
            <Menu theme='dark' defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<StarFilled />}>
                <Link to="/initiation">Simulation</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<DatabaseFilled />}>
                <Link to="/simulations">Simulation List</Link>
              </Menu.Item>
              <SubMenu key="sub4" icon={<FolderOpenFilled />} title="Document">
                <Menu.Item key="3" icon={<FileTextFilled />}>
                  <Link to="/introduction">Introduction</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<ReadFilled />}>
                  <Link to="/tutorial">Tutorial</Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="5" icon={<PhoneFilled />}>
                  <Link to="/contact">Contact Us</Link>
            </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout" style={marginLayout}>
            <Header className="header-style" style={marginHeader}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
              <h1>Scar TreatMent Simulation System</h1>
            </Header>
            <Content style={{ margin: '68px 15px 15px 15px' }}>
              <div className="site-layout-background" style={{ padding: 20, minHeight: 600 }}>
                <Switch>
                  <Route exact={true} path="/">
                    <Introduction />
                  </Route>
                  <Route path="/initiation">
                    <Initiation />
                  </Route>
                  <Route path="/simulations">
                    <SimulationList />
                  </Route>
                  <Route path="/result">
                    <ResultData />
                  </Route>
                  <Route path="/introduction">
                    <Introduction />
                  </Route>
                  <Route path="/tutorial">
                    <Tutorial />
                  </Route>
                  <Route path="/success">
                    <Success />
                  </Route>
                  <Route path="/contact">
                    <Contact />
                  </Route>
                </Switch>
              </div>
            </Content>
            <Footer className="footer-style">Scar Treatment Simulation System@xinhua hospital</Footer>
          </Layout>
        </Router>
      </Layout>
    );
  }
}

export default SiderFrame;