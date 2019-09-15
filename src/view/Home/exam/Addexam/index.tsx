import * as React from "react";
import {
  Breadcrumb,
  Button,
  Layout,
  Input,
  InputNumber,
  DatePicker,
  message,
  Select
} from "antd";
import { inject, observer } from "mobx-react";
const { Content } = Layout;
const { Option } = Select;
interface Props {
  examtype: any;
  exam: any;
  createExam: any;
}
@inject("exam", "createExam", "examtype")
@observer
class Router extends React.Component<Props> {
  state = {
    Hot: [],
    Title: [],
    examtype: "",
    typeexam: "",
    typesubject: "",
    start_time: "",
    end_time: "",
    number:''
  };
  componentDidMount() {
    this.selList();
  }
  selList = async () => {
    let { getExamType } = this.props.examtype;
    let { getExam } = this.props.exam;
    const result = await getExamType();
    const results = await getExam();
    this.setState({
      Hot: result.data,
      Title: results.data
    });
  };
  //添加考试类型
  Examtype = (e: any) => {
    let { value } = e.target;
    this.setState({
      examtype: value
    });
  };
  //获取考试类型的值
  Selectexam = (id: any) => {
    this.setState({
      typeexam: id
    });
  };
  //获取题目类型
  Question = (id: any) => {
    this.setState({
      typesubject: id
    });
  };
  //开始时间
  Start_time = (value: any) => {
    this.setState({
      start_time: value
    });
  };
  Ok = (value: any) => {
    console.log(value);
  };
  //结束时间
  End_time = (value: any) => {
    this.setState({
      end_time: value
    });
  };
  onOk = (value: any) => {
    console.log(value);
  };
  //获取输入值
   onChange=(value:any)=>{
    this.setState({
      number:value
    })
  }
  //创建考试类型
  Create = async () => {
    let { CreateExam } = this.props.createExam;
    const result = await CreateExam({
      exam_id: this.state.typeexam,
      subject_id: this.state.typesubject,
      title: this.state.examtype,
      number:this.state.number,
      start_time: Number(this.state.start_time),
      end_time: Number(this.state.end_time)
    });
    console.log(this.state.end_time, this.state.start_time);
    if (result.code === 1) {
      //添加成功后重新渲染数据
      message.success(result.msg);
    } else {
      message.error(result.msg);
    }
  };
  public render() {
    const { Hot, Title, examtype } = this.state;
    return (
      <div>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>试题分类</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              border: "#fff",
              minHeight: 369,
              margin: "0px 0px 20px 0px"
            }}
          >
            <div className="add-exam-type">
              <h4 className="ant-form-item-required">考试类型</h4>
            </div>
            <div className="add-inp">
              <Input
                placeholder="default size"
                className="add-exam-ipt"
                value={examtype}
                onChange={this.Examtype}
              />
            </div>
            <div className="add-exam-type">
              <h4 className="ant-form-item-required">选择考试类型</h4>
            </div>
            <div className="add-inp">
              <Select
                defaultValue=""
                style={{ width: 180 }}
                onChange={this.Selectexam}
              >
                {Hot.map((item: any, index) => {
                  return (
                    <Option value={item.exam_id} key={index}>
                      {item.exam_name}
                    </Option>
                  );
                })}
              </Select>
            </div>
            <div className="add-exam-type">
              <h4 className="ant-form-item-required">选择题目类型</h4>
            </div>
            <div className="add-inp">
              <Select
                defaultValue=""
                style={{ width: 180 }}
                onChange={this.Question}
              >
                {Title.map((item: any, index) => {
                  return (
                    <Option value={item.subject_id} key={index}>
                      {item.subject_text}
                    </Option>
                  );
                })}
              </Select>
            </div>
            <div className="add-exam-type">
              <h4 className="ant-form-item-required">设置题目数量</h4>
            </div>
            <div className="add-inp">
            <InputNumber min={1} max={10} defaultValue={3} onChange={this.onChange} />
            </div>
            <div className="add-exam-type">
              <h4 className="ant-form-item-required">考试时间</h4>
            </div>
            <div className="add-inp">
              <DatePicker
                showTime
                placeholder="考试时间"
                onChange={this.Start_time}
                onOk={this.Ok}
              />
              <DatePicker
                showTime
                placeholder="结束事件"
                onChange={this.End_time}
                onOk={this.onOk}
              />
            </div>
            <Button
              type="primary"
              className="add-exam-btn"
              onClick={this.Create}
            >
              创建考试
            </Button>
          </Content>
        </Layout>
      </div>
    );
  }
}
export default Router;
