import * as React from "react";
const { Sider } = Layout;
import { Icon, Layout, Menu } from "antd";
const { SubMenu } = Menu;
import { NavLink } from "react-router-dom";
import { inject, observer } from "mobx-react";
// 引入用户路由
import routes from "../router/index";
import { filterView } from "../utils/permission";
import {injectIntl} from 'react-intl';
interface Props {
  user?: any;
  intl?: any
}

@inject("user")
@observer
class Side extends React.Component<Props> {
  public render() {
    let {formatMessage} = this.props.intl;
    let {viewAuthority} = this.props.user;
    let myRoutes: any = filterView(routes, viewAuthority);
    myRoutes = myRoutes.find((item: any) => item.children).children;
    return (
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
                      <span>{item.title?formatMessage({id:item.title, defaultMessage:'阅卷管理'}):item.path}</span>
                    </span>
                  }
                >
                  {
                item.children.map((value: any)=>{
                  return <Menu.Item key={value.path}>
                    <NavLink to={value.path}>{value.title?formatMessage({id:value.title}):value.path}</NavLink>
                  </Menu.Item>
                  })
                }
                </SubMenu>
                }else{
                  return  <Menu.Item key={item.path}>
                <Icon type="pie-chart" />
                <span>{item.title?formatMessage({id:item.title}):item.path}</span>
              </Menu.Item>
                }
              })
            }
          </Menu>
        </Sider>
    );
  }
}
export default injectIntl(Side);
