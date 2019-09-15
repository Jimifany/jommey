import * as React from "react";
import { Button, Breadcrumb, Icon, Input, Layout, Select,Table } from "antd";
import { inject, observer } from "mobx-react";
const { Option } = Select;
const { Content } = Layout;
interface Props {
  classmange: any;
  student:any
}
@inject("classmange")
@inject('student')
@observer
class Router extends React.Component<Props> {
  state = {
    Map: [],
    List:[]
  };
  componentDidMount() {
    this.selList();
  }
  selList = async () => {
    let { getClassmange } = this.props.classmange;
    let { getStudent } = this.props.student
    const resultten = await getClassmange();
    const result = await getStudent();
    this.setState({
      Map: resultten.data,
      List:result.data
    });
    console.log(resultten);
  };
  public render() {
    const { Map,List} = this.state;
    const columns= [
      {
        title: "姓名",
        dataIndex: "student_name",
        key:'student_name'
      },
      {
        title: "学号",
        dataIndex: "subject_id",
        key:'subject_id'
      },
      {
        title: "班级",
        dataIndex: "grade_name",
        key:'grade_name'
      },
      {
        title: "教室",
        dataIndex: "room_text",
        key:'room_text'
      },
      {
        title: "密码",
        dataIndex: "student_pwd",
        key:'student_pwd'
      },
      {
        title: "操作",
        dataIndex:'room',
        render:()=><Button>删除</Button>
      }
    ]
    const data = List.map((item:any,index:number)=>{
      return{
          key:index,
          student_name:item.student_name,
          subject_id:item.subject_id,
          grade_name:item.grade_name,
          room_text:item.room_text,
          student_pwd:item.student_pwd
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
            <Content
            style={{
              border: "#fff",
              minHeight: 369,
              margin: "0px 0px 20px 0px"
            }}
          >
          <div className="add-inp">
            <div className="antd-student">
              <Input placeholder="输入学生的姓名" className="add-exam-ipt" />
            </div>
            <div className="antd-student">
              <Select defaultValue="" style={{ width: 180 }}>
                {Map.map((item: any, index) => {
                  return (
                    <Option value={item.grade_name} key={index}>
                      {item.grade_name}
                    </Option>
                  );
                })} 
              </Select>
            </div>
            <div className="antd-student">
              <Select defaultValue="" style={{ width: 180 }}>
                {Map.map((item: any, index) => {
                  return (
                    <Option value={item.room_text} key={index}>
                      {item.room_text}
                    </Option>
                  );
                })}
              </Select>
            </div>
            <div className="antd-student">
              <Button>搜素</Button>
            </div>
          </div>
          <Table columns={columns} dataSource={data}/>
          </Content>
          </div>
        </Layout>
      </div>
      
    );
  }
}
export default Router;
