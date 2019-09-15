import * as React from "react";
import { Button, Breadcrumb, Layout, Select } from "antd";
const { Option } = Select;
import { inject, observer } from "mobx-react";
interface Props {
  question: any;
  title: any;
  exam: any;
  label: any;
  examtype: any;
  examtitle: any;
  history:any
}
// const { SubMenu } = Menu;
@inject("examtype","examtitle","exam","question")
@observer
class Router extends React.Component<Props> {
  constructor(props: any) {
    super(props);
  }
  state = {
    list: [],
    Map: [],
    Hot: [],
    Title: [],
    typeexam: "",
    typetitle: "",
    map_id: ""
  };
  componentDidMount() {
    this.selList();
  }
  selList = async () => {
    let { getExamType } = this.props.examtype;
    let { getExamTitle } = this.props.examtitle;
    let { getExam } = this.props.exam;
    let { getQuestion } = this.props.question;
    const result = await getExamType();
    const results = await getExamTitle();
    const resulten = await getExam();
    const res = await getQuestion();
    this.setState({
      Hot: result.data,
      Title: results.data,
      Map: resulten.data,
      list: res.data
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
  //搜素
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
    console.log(examList);
  };
  onchange = (val: any) => {
    console.log(val)
    const ospan:any = document.querySelector('.ospan')
    let examList = this.state.list.filter((item: any) => {
      console.log(item)
      if ((val === item.subject_text)||(val === item.subject_text)) {
        ospan.style.backgroundColor='#0139FD';
        ospan.style.color='#fff'
        return item;
      }else{
        ospan.style.color="rgba(0, 0, 0, 0.65)"
        ospan.style.backgroundColor="transparent"
      }
    });
    this.setState({
      list: examList,
    });
  };
  public render() {
    const { list, Map, Hot, Title } = this.state;
    return (
      <Layout style={{ padding: "0 24px 24px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div>
          <div className="ant-layout-content">
            <form className="ant-form ant-form-horizontal">
              <div className="ant-form-item-control">
                <span className="span">课程类型</span>
                {Map.map &&
                  Map.map((item: any, id) => (
                   <span
                      key={item.subject_id}
                      className="ospan"
                      onClick={this.onchange.bind(this, item.subject_text)}
                    >
                      {item.subject_text}
                    </span>
                  ))}
              </div>
              <div className="ant-row">
                <label>考试类型</label>
                <label>
                  <Select
                    defaultValue=""
                    style={{ width: 200 }}
                    onChange={this.Selectexam}
                  >
                    {Hot.map((item: any, index) => {
                      return (
                        <Option value={item.exam_name} key={index}>
                          {item.exam_name}
                        </Option>
                      );
                    })}
                  </Select>
                </label>
                <label>题目类型</label>
                <label>
                  <Select
                    defaultValue=""
                    style={{ width: 200 }}
                    onChange={this.Selecttitle}
                  >
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
                  查询
                </Button>
              </div>
            </form>
          </div>
          <div className="momo">
            {list.map &&
              list.map((item: any, index) => (
                <div key={index}>
                  <div className="left">
                    <li>
                      <Button type="link" className="top">
                        {item.title}
                      </Button>
                    </li>
                    <li>
                      <Button type="danger" className="one">
                        {item.questions_type_text}
                      </Button>
                      <Button className="two">{item.subject_text}</Button>
                      <Button type="primary" className="three">
                        {item.exam_name}
                      </Button>
                    </li>
                    <li>
                      <span className="bottom">{item.questions_type_text}</span>
                    </li>
                    <Button type="primary" className="right" onClick={()=>{this.props.history.push(`/index/test/teadetai/${item.questions_id}`)}}>
                      编辑
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Layout>
    );
  }
}
export default Router;
