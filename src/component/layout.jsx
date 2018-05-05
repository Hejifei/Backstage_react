import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon ,Row, Col } from 'antd';
import './layout.css';
import Search from './search';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class public_Layout  extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Layout>
            <Header className="header">
            <Row>
              <Col span={8}>
                <div className="logo">
                  何必后台管理系统
                </div></Col>
              <Col span={8}>
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={['2']}
                  style={{ lineHeight: '64px' }}
                >
                  <Menu.Item key="1">nav 1</Menu.Item>
                  <Menu.Item key="2">nav 2</Menu.Item>
                  <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
                
              </Col>
              <Col span={8}><Search /></Col>
            </Row>
            </Header>
            <Layout>
              <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  <SubMenu key="sub1" title={<span><Icon type="user" />用户管理</span>}>
                    <Menu.Item key="1">用户列表</Menu.Item>
                    <Menu.Item key="2">推广管理</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" title={<span><Icon type="laptop" />文章管理</span>}>
                    <Menu.Item key="5">文章列表</Menu.Item>
                    <Menu.Item key="6">文章分类列表</Menu.Item>
                    <Menu.Item key="7">文章评论列表</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub3" title={<span><Icon type="notification" />系统管理</span>}>
                    <Menu.Item key="9">系统用户列表</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub3" title={<span><Icon type="notification" />账户管理</span>}>
                    <Menu.Item key="9">密码重置</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 24px' }}>
                {/* 面包屑 */}
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                  Content
                </Content>
              </Layout>
            </Layout>
          </Layout>
        )
    }
}

export default public_Layout;