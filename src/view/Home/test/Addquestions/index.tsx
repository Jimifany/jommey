import * as React from "react";
import { Breadcrumb, Button, Layout, Input, message,Select, Modal } from "antd";
import Editor from "for-editor";
const { Option } = Select;
import { inject, observer } from "mobx-react"
const { Content } = Layout;
interface Props {
  examtype: any;
  examtitle: any;
  exam: any;
  addquestion: any;
  userinfo:any
}
@inject("examtype")
@inject("examtitle")
@inject("exam")
@inject("addquestion","userinfo")
@observer
class Router extends React.Component<Props> {
  state = {
    Hot: [],
    Title: [],
    Map: [],
    modal2Visible: false,
    typeval: "",
    typequestion: "",
    typeexam: "",
    typetitle: "",
    typeculum: "",
    typeanswer: "",
    typeuser:''
  };
  componentDidMount() {
    this.selList();
  }
  selList = async () => {
    let { getExamType } = this.props.examtype;
    let { getExam } = this.props.exam;
    let { getExamTitle } = this.props.examtitle;
    
    const result = await getExamType();
    const results = await getExamTitle();
    const resultten = await getExam();
    this.setState({
      Hot: result.data,
      Title: results.data,
      Map: resultten.data
    });
  };
  //获取输入框的值
  handChange = (e: any) => {
    let { value } = e.target;
    this.setState({
      typeval: value
    });
  };
  //获取输入的问题
  editorChange = (value: any) => {
    this.setState({
      typequestion: value
    });
  };
  //获取考试类型的值
  Selectexam = (id:any) => {

    this.setState({
      typeexam: id
    });
  };
  //获取题目类型
  Selecttitle = (id: any) => {
    this.setState({
      typetitle: id
    });
  };
  //获取课程类型
  Selectculum = (id: any) => {
    this.setState({
      typeculum:id
    });
  };
  //获取答案
  editorAnswer = (value: any) => {
    this.setState({
      typeanswer: value
    })
  };
  //创建题目
  AddGetType=async ()=>{
    const {getAddquestion} = this.props.addquestion
    const {getUserInfo} = this.props.userinfo
    const resulten = await getUserInfo()
    this.setState({
      typeuser:resulten.data.user_id
    })
    console.log(this.state)
    const result = await getAddquestion({
      "questions_type_id":this.state.typetitle,
      "questions_stem":this.state.typequestion,
      "subject_id":this.state.typeculum,
      "exam_id":this.state.typeexam,
      "user_id":this.state.typeuser,
      "questions_answer":this.state.typeanswer,
      "title":this.state.typeval,
    })
    if (result.code === 1) {
      //添加成功后重新渲染数据
      message.success(result.msg);
    } else {
      message.error(result.msg);
    }
  }
  //确认添加
  setModal2Visible(modal2Visible: any) {
    this.setState({
      modal2Visible: modal2Visible.show
    });
    if (modal2Visible.key === "确认") {
      this.AddGetType();
    }
  }
  public render() {
    const { Hot, Title, Map, typeval, typequestion, typeanswer } = this.state;
    return (
      <div>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>添加试题</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              border: "#fff",
              minHeight: 125,
              margin: "0px 0px 20px 0px"
            }}
          >
            <h3>题目信息</h3>
            <h4>题干</h4>
            <Input
              placeholder="请输入题干信息"
              value={typeval}
              onChange={this.handChange}
            />
            <label className="label-add">题目主题</label>
            <div className="for-container">
              <Editor value={typequestion} onChange={this.editorChange} />
            </div>
            <div className="antd-h4-add">请选择考试类型</div>
            <label className="antd-exam">
              <Select
                defaultValue=""
                style={{ width: 200 }}
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
            </label>
            <div className="antd-h4-add">请选择题目类型</div>
            <label className="antd-title">
              <Select
                defaultValue=""
                style={{ width: 200 }}
                onChange={this.Selecttitle}
              >
                {Map.map((item: any, index) => {
                  return (
                    <Option value={item.subject_id} key={index}>
                      {item.subject_text}
                    </Option>
                  );
                })}
              </Select>
            </label>
            <div className="antd-h4-add">请选择课程类型</div>
            <label className="antd-title">
              <Select
                defaultValue=""
                style={{ width: 200 }}
                onChange={this.Selectculum}
              >
                {Title.map((item: any, index) => {
                  return (
                    <Option value={item.questions_type_id} key={index}>
                      {item.questions_type_text}
                    </Option>
                  );
                })}
              </Select>
            </label>
            <h3 className="add-h3">题目信息</h3>
            <div className="for-container">
              <Editor value={typeanswer} onChange={this.editorAnswer} />
            </div>
            <div className="add-submit">
              <Button
                type="primary"
                onClick={() =>
                  this.setModal2Visible({
                    show: true,
                    key: "添加"
                  })
                }
              >
                提交
              </Button>
            </div>
          </Content>
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
            <h3
              style={{
                border: "none",
                textAlign: "center",
                outline: "none"
              }}
            >
              确定要添加这道题吗
            </h3>
            <p
              style={{
                border: "none",
                textAlign: "center",
                outline: "none"
              }}
            >
              真的要添加吗
            </p>
          </Modal>
        </Layout>
      </div>
    );
  }
}
export default Router;
