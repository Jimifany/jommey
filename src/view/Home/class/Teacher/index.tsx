import * as React from "react";
import { Button, Breadcrumb, Icon, Layout,Table } from "antd";
import { inject, observer } from "mobx-react";
interface Props{
    teacher:any;
}
@inject('teacher')
@observer
class Router extends React.Component<Props>{
    state={
        Map:[]
    }
    componentDidMount() {
        this.selList();
      }
      selList = async () => {
        let {getTeacher} = this.props.teacher;
        const resultten = await getTeacher()
        this.setState({
          Map:resultten.data
        });
        console.log(resultten)
      };
  public render() {
    const {Map} = this.state;
    const columns= [
        {
          title: "教师号",
          dataIndex: "room_text",
          key:'room_text'
        },
        {
          title: "操作",
          dataIndex:'room',
          render:()=><Button>删除</Button>
        }
      ]
      const data = Map.map((item:any,index:number)=>{
        return{
            key:index,
            room_text:item.room_text,
        }
    })
    return (

      <div>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>教师管理</Breadcrumb.Item>
          </Breadcrumb>
          <div className="ant-layout-content">
            <Button type="primary">
              <Icon type="plus" />
              添加类型
            </Button>
          </div>
          <Table columns={columns} dataSource={data}/>
        </Layout>
      </div>
    );
  }
}
export default Router;
