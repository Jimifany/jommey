import * as React from "react";
import {
  Button,
  Breadcrumb,
  Icon,
  Layout,
  Modal,
  Input,
  Table,
  Select,
  message,
  Divider
} from "antd";
import { inject, observer } from "mobx-react";
const { Option } = Select;
interface Props {
  classmange: any;
  teacher: any;
  addgrade: any;
  deletegrade: any;
  ameny: any;
  exam: any;
}
@inject("classmange", "addgrade", "deletegrade", "ameny", "teacher", "exam")
@observer
class Router extends React.Component<Props> {
  state = {
    Map: [],
    Hot: [],
    Class: [],
    modal1Visible: false,
    modal2Visible: false,
    typeData: "",
    typegrade: "",
    typeRoom: "",
    defaultgrade: "",
    defaultroom: "",
    defaultdata: "",
    amenysubject: ""
  };
  //获取添加试卷分类的值
  handChange = (e: any) => {
    let { value } = e.target;
    this.setState({
      typeData: value
    });
    console.log(value);
  };
  //更改显示框的隐藏和显示状态
  setModal2Visible(modal2Visible: any) {
    this.setState({
      modal2Visible: modal2Visible.show
    });
    if (modal2Visible.key === "确认") {
      this.AddGetType();
      this.setState({
        typeData: "",
        typeRoom: "",
        typegrade: "",
        amenysubject: "",
        amenyroom: "",
        amenyexam: ""
      });
    }
  }
  //获取班级号
  SelectGrade = (value: any) => {
    console.log(value);
    this.setState({
      typegrade: value
    });
  };
  //获取教室号
  SelectRoom = (value: any) => {
    console.log(value);
    this.setState({
      typeRoom: value
    });
  };
  //调用mobx 发起axios请求
  AddGetType = async () => {
    let { Addgrade } = this.props.addgrade;
    let result = await Addgrade({
      grade_name: this.state.typeData,
      subject_id: this.state.typegrade,
      room_id: this.state.typeRoom
    });
    const { Ameny } = this.props.ameny;
    const results = await Ameny({
      subject_id: this.state.amenysubject
    });
    if (results.code === 1) {
      //添加成功后重新渲染数据
      message.success(result.msg);
    } else {
      message.error(result.msg);
    }
    // this.selList();
    if (result.code === 1) {
      //添加成功后重新渲染数据
      message.success(result.msg);
    } else {
      message.error(result.msg);
    }
    this.selList();
  };
  //点击删除
  delete = async (key: any) => {
    // console.log(key)
    const { grade_id } = this.state.Map[key.key];
    const { Delete } = this.props.deletegrade;
    const result = await Delete({
      grade_id: grade_id
    });
    if (result.code === 1) {
      //添加成功后重新渲染数据
      message.success(result.msg);
    } else {
      message.error(result.msg);
    }
    this.selList();
  };
  //点击修改
  amend = async (key: any) => {
    const { grade_name, room_text, subject_text } = this.state.Map[
      key.record.key
    ];
    console.log(grade_name, room_text, subject_text);
    this.setState({
      defaultdata: grade_name,
      defaultgrade: subject_text,
      defaultroom: room_text,
      modal2Visible: true
    });
  };
  //生命周期获取参数
  componentDidMount() {
    this.selList();
  }
  selList = async () => {
    let { getClassmange } = this.props.classmange;
    let { getTeacher } = this.props.teacher;
    let { getExam } = this.props.exam;
    const resultten = await getClassmange();
    const result = await getTeacher();
    const results = await getExam();
    this.setState({
      Map: resultten.data,
      Hot: result.data,
      Class: results.data
    });
  };
  public render() {
    const {
      Map,
      Hot,
      Class,
      typeData,
      defaultdata,
      defaultgrade,
      defaultroom
    } = this.state;
    const columns = [
      {
        title: "班级名",
        dataIndex: "grade_name",
        key: "grade_name"
      },
      {
        title: "课程名",
        dataIndex: "subject_text",
        key: "subject_textt"
      },
      {
        title: "教室号",
        dataIndex: "room_text",
        key: "room_text"
      },
      {
        title: "操作",
        dataIndex: "room",
        render: (text: any, record: any) => (
          <label>
            <span
              onClick={() =>
                this.amend({
                  show: true,
                  record,
                  key: "成功"
                })
              }
            >
              修改
            </span>
            <Divider type="vertical" />
            <span onClick={this.delete.bind(this, record)}>删除</span>
          </label>
        )
      }
    ];
    const data = Map.map((item: any, index: number) => {
      return {
        key: index,
        grade_name: item.grade_name,
        subject_text: item.subject_text,
        room_text: item.room_text
      };
    });
    return (
      <div>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>教师管理</Breadcrumb.Item>
          </Breadcrumb>
          <div className="ant-layout-content">
            <Button
              type="primary"
              onClick={() =>
                this.setModal2Visible({
                  show: true,
                  key: "添加"
                })
              }
            >
              <Icon type="plus" />
              添加类型
            </Button>
          </div>
          <Table columns={columns} dataSource={data} />
        </Layout>
        <Modal
          title="创建新类型"
          centered
          okText="确认"
          cancelText="取消"
          visible={this.state.modal2Visible}
          onOk={() =>
            this.setModal2Visible({
              show: false,
              key: "确认"
            })
          }
          onCancel={() =>
            this.setModal2Visible({
              show: false,
              key: "取消"
            })
          }
        >
          <div className="add-exam-type">
            <h4 className="ant-form-item-required">班级名称</h4>
          </div>
          <div className="add-inp">
            <Input
              placeholder="default size"
              className="add-exam-ipt"
              value={typeData}
              defaultValue={defaultdata}
              onChange={this.handChange}
            />
          </div>
          <div className="add-exam-type">
            <h4 className="ant-form-item-required">选择教室号</h4>
          </div>
          <div className="add-inp">
            <Select
              defaultValue={defaultroom}
              style={{ width: 180 }}
              onChange={this.SelectRoom}
            >
              {Hot.map((item: any, index: any) => {
                return (
                  <Option value={item.room_id} key={index}>
                    {item.room_text}
                  </Option>
                );
              })}
            </Select>
          </div>
          <div className="add-exam-type">
            <h4 className="ant-form-item-required">选择课程名</h4>
          </div>
          <div className="add-inp">
            <Select
              defaultValue={defaultgrade}
              style={{ width: 180 }}
              onChange={this.SelectGrade}
            >
              {Class.map((item: any, index: any) => {
                return (
                  <Option value={item.subject_id} key={index}>
                    {item.subject_text}
                  </Option>
                );
              })}
            </Select>
          </div>
        </Modal>
      </div>
    );
  }
}
export default Router;
