import * as React from "react";
import { Breadcrumb, Button, Radio, Layout, Table, Select } from "antd";
const { Content } = Layout;
const { Option } = Select;
import { inject, observer } from "mobx-react";
interface Props {
  columns: any;
  questionlist: any;
  examtype: any;
  examtitle: any;
}
@inject("questionlist")
@inject("examtype")
@inject("examtitle")
@observer
class Router extends React.Component<Props> {
  state = {
    columns: [
      {
        title: "试题信息",
        dataIndex: "identity_id"
      },
      {
        title: "班级",
        dataIndex: "grade_name"
      },
      {
        title: "创建人",
        dataIndex: "user_name"
      },
      {
        title: "开始时间",
        dataIndex: "start_time"
      },
      {
        title: "结束时间",
        dataIndex: "end_time"
      },
      {
        title: "操作",
      }
    ],
    Hot: [],
    Title: [],
    list: [],
    typeexam: "",
    typetitle: "",
  };
  componentDidMount() {
    this.getList();
    this.selList();
  }
  getList = async () => {
    let { getquestionList } = this.props.questionlist;
    const result = await getquestionList();
    this.setState({
      list: result.exam
    });
    console.log(result)
  };
  selList = async () => {
    let { getExamType } = this.props.examtype;
    let { getExamTitle } = this.props.examtitle;
    const result = await getExamType();
    const results = await getExamTitle();
    this.setState({
      Hot: result.data,
      Title: results.data
    });
  };
  //获取考试类型的值
  Selectexam = (value: any) => {
    this.setState({
      typeexam: value
    });
  };
  //获取题目类型
  Selecttitle = (value: any) => {
    this.setState({
      typetitle: value
    });
  };
  //查询
  handlebtn = () => {
    let examList = this.state.list.filter((item: any) => {
      if (
        (this.state.typetitle === item.questions_type_text &&
          this.state.typeexam === item.exam_name) ||
        this.state.typetitle === item.questions_type_text ||
        this.state.typeexam === item.exam_name
      ) {
        return item;
      }
    });
    this.setState({
      list: examList
    });
  };
  public render() {
    const { columns, list, Hot, Title } = this.state;
    return (
      <div>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>试题列表</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              border: "#fff",
              minHeight: 125,
              margin: "0px 0px 20px 0px"
            }}
          >
            <div className="ant-row">
              <label>考试类型</label>
              <label className="antd-list">
                <Select defaultValue="" style={{ width: 180 }}  onChange={this.Selectexam}>
                  {Hot.map((item: any, index) => {
                    return (
                      <Option value={item.exam_name} key={index}>
                        {item.exam_name}
                      </Option>
                    );
                  })}
                </Select>
              </label>
              <label className="label-list">题目类型</label>
              <label className="list-title">
                <Select defaultValue="" style={{ width: 180 }} onChange={this.Selecttitle}>
                  {Title.map((item: any, index) => {
                    return (
                      <Option value={item.questions_type_text} key={index}>
                        {item.questions_type_text}
                      </Option>
                    );
                  })}
                </Select>
              </label>
              <Button type="primary" icon="search" onClick={this.handlebtn}>
                Search
              </Button>
            </div>
          </Content>
          <div className="ant-layout-content">
            <div className="ant-layout-content">
              <div className="question-list">
                <h4>试题类型</h4>
                <div className='question-right'>
                <Radio.Button value="large">全部</Radio.Button>
                <Radio.Button value="default">进行中</Radio.Button>
                <Radio.Button value="small">已完成</Radio.Button>
                </div>
              </div>
              <Table columns={columns} dataSource={list}/>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}
export default Router;
