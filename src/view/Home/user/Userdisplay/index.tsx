import * as React from "react";
import { inject, observer } from "mobx-react";
import { Table } from "antd";
import { Tabs } from "antd";
import "../../../../css/usershow.css"
import IdentityData from "../../../../components/identityData"
const { TabPane } = Tabs;
interface Props {
  show: any;
  showList: any;
  identityData: any;
  // key:any
  // column:any
}
function callback(key: any) {
  console.log(key);
}
@inject("show", "identityData")
@observer
class Router extends React.Component<Props> {
  state = {
    showList: [],
    columns: [
      {
        title: "用户名",
        dataIndex: "user_name"
      },
      {
        title: "密码",
        dataIndex: "user_pwd"
      },
      {
        title: "身份",
        dataIndex: "identity_text"
      }
    ]
  };
  componentDidMount() {
    this.getshow();
  }
  getshow = async () => {
    const { getShow } = this.props.show;
    const result = await getShow();
    // console.log(result.data)
    this.setState({
      showList: result.data
    });
  };
  public render() {
    const { showList, columns } = this.state;
    console.log(showList);
    return (
      <div>
        <h1 className="userTitle">用户展示</h1>
        <Tabs onChange={callback} type="card">
          <TabPane tab="用户数据" key="1">
            {/* Content of Tab Pane 1 */}
            <Table columns={columns} dataSource={showList} size="small" />
          </TabPane>
          <TabPane tab="身份数据" key="2">
            <IdentityData identityData={this.props.identityData} />
          </TabPane>
          <TabPane tab="api接口权限" key="3">
            api接口权限
          </TabPane>
          <TabPane tab="身份和api接口关系" key="4">
            身份和api接口关系
          </TabPane>
          <TabPane tab="视图和接口权限" key="5">
            试图和接口权限
          </TabPane>
          <TabPane tab="身份和视图权限关系" key="6">
            身份和视图权限关系
          </TabPane>
        </Tabs>
        ,{/* mountNode, */}
      </div>
    );
  }
}
export default Router;
