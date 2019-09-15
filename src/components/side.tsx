import * as React from "react";
// const { Sider } = Layout;
// import {Layout, Menu } from "antd";
const { Sider } = Layout;
import { Icon, Layout, Menu } from "antd";
const { SubMenu } = Menu;
import { NavLink } from "react-router-dom";
import { inject, observer } from "mobx-react";
// 引入用户路由
import routes from "../router/index";
import { filterView } from "../utils/permission";
interface Props {
  user?: any;
}

@inject("user")
@observer
class Side extends React.Component<Props> {
  public render() {
    console.log("props...", this.props);
    let { viewAuthority } = this.props.user;
    let myRoutes: any = filterView(routes, viewAuthority);
    myRoutes = myRoutes.find((item: any) => item.children).children;
    console.log(myRoutes)
    return (
      <div className="slide">
        <Sider width={200} style={{ background: "#fff" }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={[myRoutes[0].children[0].path]}
            defaultOpenKeys={[myRoutes[0].path]}
            style={{ height: "100%", borderRight: 0 }}
          >
          {  myRoutes.map((item:any)=>{
                if (item.children){
                  return <SubMenu
                  key={item.path}
                  title={
                    <span>
                      <Icon type="user" />
                      <span>{item.title?item.title:item.path}</span>
                    </span>
                  }
                >
                  {
                item.children.map((value: any)=>{
                  return <Menu.Item key={value.path}>
                    <NavLink to={value.path}>{value.title?value.title:""}</NavLink>
                  </Menu.Item>
                  })
                }
                </SubMenu>
                }else{
                  return  <Menu.Item key={item.path}>
                <Icon type="pie-chart" />
                <span>{item.title?item.title:item.path}</span>
              </Menu.Item>
                }
              })
            }
          </Menu>
        </Sider>
      </div>
    );
  }
}
export default Side;
