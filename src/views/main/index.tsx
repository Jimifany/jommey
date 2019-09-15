import * as React from 'react';
const { Content, Sider } = Layout;
import { Breadcrumb, Icon, Layout, Menu } from 'antd';
const { SubMenu } = Menu;

import "../../App.css"
class Test extends React.Component {
    public render() {
        return (
            <div className="App">
                <Layout>
                    <Layout>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }} >
                                <SubMenu key="sub1" title={<span> <Icon type="user" />试题管理</span>}>
                                    <Menu.Item key="1">添加试题</Menu.Item>
                                    <Menu.Item key="2">试题分类</Menu.Item>
                                    <Menu.Item key="3">查看试题</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><Icon type="laptop" />用户管理</span>}>
                                    <Menu.Item key="5">添加用户</Menu.Item>
                                    <Menu.Item key="6">用户展示</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" title={<span><Icon type="notification" />考试管理</span>}>
                                    <Menu.Item key="9">添加考试</Menu.Item>
                                    <Menu.Item key="10">试卷列表</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub4" title={<span><Icon type="pie-chart" />班级管理</span>}>
                                    <Menu.Item key="5">班级管理</Menu.Item>
                                    <Menu.Item key="6">教室管理</Menu.Item>
                                    <Menu.Item key="6">学生管理</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub5" title={<span><Icon type="pie-chart" />阅卷管理</span>}>
                                    <Menu.Item key="5">待批班级</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                style={{
                                    background: '#fff',
                                    margin: 0,
                                    minHeight: 280,
                                    padding: 24,
                                }}
                            >
                                Content
        </Content>
                        </Layout>
                    </Layout>
                </Layout>,
                mountNode,
      </div>
        );
    }
}

export default Test;
