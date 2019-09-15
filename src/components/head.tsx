import * as React from "react";
const {  Header } = Layout;
import {  Layout, Menu } from 'antd';
class Head extends React.Component{
public render(){
    return (
<div>
<Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '48px' }}
            >
              <Menu.Item key="1">八维管理系统</Menu.Item>
            </Menu>
          </Header>
</div>
    )
}
}
export default Head;
