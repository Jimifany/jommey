import * as React from "react";
import { Button, Breadcrumb, Input, Layout, Select, Table, message } from "antd";
import { inject, observer } from "mobx-react";
const { Option } = Select;
const { Content } = Layout;
interface Props {
  classmange: any;
  student: any;
  student_id: any;
  delStudent: any;
}
@inject("classmange", 'delStudent')
@inject('student')
@observer
class Router extends React.Component<Props> {
  state = {
    Map: [],
    List: [],
    nameValue: "",
    banValue: "",
    jiaoValue: ""
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
      List: result.data
    });
    console.log(resultten);
  };
  public render() {
    const { Map, List } = this.state;
    const columns = [
      {
        title: "姓名",
        dataIndex: "student_name",
        key: 'student_name'
      },
      {
        title: "学号",
        dataIndex: "subject_id",
        key: 'subject_id'
      },
      {
        title: "班级",
        dataIndex: "grade_name",
        key: 'grade_name'
      },
      {
        title: "教室",
        dataIndex: "room_text",
        key: 'room_text'
      },
      {
        title: "密码",
        dataIndex: "student_pwd",
        key: 'student_pwd'
      },
      {
        title: "操作",
        dataIndex: 'room',
        render: (Text: any, record: any) => <Button onClick={this.del.bind(this, record)}>删除</Button>
      }
    ]
    const data = List.map((item: any, index: number) => {
      return {
        key: index,
        student_name: item.student_name,
        subject_id: item.subject_id,
        grade_name: item.grade_name,
        room_text: item.room_text,
        student_pwd: item.student_pwd
      }
    })
    return (
      <div>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>教师管理</Breadcrumb.Item>
          </Breadcrumb>
          <div className="ant-layout-content">
            <Content
              style={{
                border: "#fff",
                minHeight: 369,
                margin: "0px 0px 20px 0px"
              }}
            >
              <div className="add-inp">
                <div className="antd-student">
                  <Input placeholder="输入学生的姓名" className="add-exam-ipt" onChange={this.nameBtn} />
                </div>
                <div className="antd-student">
                  <Select defaultValue="" style={{ width: 180 }} onChange={this.banBtn}>
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
                  <Select defaultValue="" style={{ width: 180 }} onChange={this.jiaoBtn}>
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
                  <Button onClick={this.SearchBtn}>搜索</Button>
                </div>
              </div>
              <Table columns={columns} dataSource={data} />
            </Content>
          </div>
        </Layout>
      </div>

    );

  }
  //删除学生管理
  del = async (key: any) => {
    const { List } = this.state;
    const { student_id } = List[key.key];
    console.log(student_id)
    const { getDelStudent } = this.props.delStudent;
    const result = await getDelStudent({
      params: { id: student_id }

    })
    if (result.code === 1) {
      message.success(result.msg)
    }
    else {
      message.error(result.msg)
    }
  }
  nameBtn = (e: any) => {
    const { value } = e.target;
    this.setState({
      nameValue: value
    })
    console.log(value)
  }
  banBtn = (value: any) => {
    //  console.log(value)
    this.setState({
      banValue: value
    })
  };
  jiaoBtn = (value: any) => {
    // console.log(value)
    this.setState({
      jiaoValue: value
    })
  };
  //模糊搜索
  SearchBtn = async () => {
    // console.log(333333)

    let SearchArr = this.state.List.filter((item: any) => {
      // console.log(this.state.nameValue)
      // console.log(this.state.banValue)
      // console.log(this.state.jiaoValue)
      // console.log(item)
      // console.log(item.value)
      if (this.state.nameValue === item.student_name && this.state.banValue === item.grade_name || this.state.jiaoValue === item.room_text) {
        return item;
      }
    })
    this.setState({
      List: SearchArr
    })


  }
}
export default Router;
