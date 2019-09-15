import * as React from "react";
import {
  Breadcrumb,
  Button,
  Layout,
  Input,
  Select,
  Modal,
  message
} from "antd";
import Editor from "for-editor";
const { Option } = Select;
import { inject, observer } from "mobx-react";
const { Content } = Layout;
interface Props {
  teadetail: any;
  match: any;
  exam_name:any
}
@inject("teadetail")
@observer
class Router extends React.Component<Props> {
  state = {
    list:[],
    Map:[],
    modal2Visible: false,
  };
  componentDidMount() {
    this.getList();
  }
  getList = async () => {
    const questions_id = this.props.match.params.id;
    const { getTeadetail } = this.props.teadetail;
    const result = await getTeadetail({
        questions_id
    });
    console.log(result.data)
    this.setState({
        list: result.data,
        Map:result.data
      }
    );
  };
  
  //提交
  setModal2Visible(modal2Visible: any) {
    this.setState({
      modal2Visible: modal2Visible.show
    });
    if (modal2Visible.key === "确认") {
      message.success("成功");
    }
  }
  public render() {
      const {list} = this.state
      
    return (
      <div>
         {list.map((item:any,index)=><div key={index}>
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
            <Input placeholder="请输入题干信息" value={item.title} />
            <label className="label-add">题目主题</label>
            <div className="for-container">
              <Editor value={item.questions_stem} />
            </div>
            <div className="antd-h4-add">请选择考试类型</div>
            <label className="antd-exam">
              <Select defaultValue={item.exam_name} style={{ width: 200 }}>
                {this.state.Map.map&&this.state.Map.map((val: any, ind:any) => {
                  return (
                    <Option value={val.exam_name} key={ind}>
                      {val.exam_name}
                    </Option>
                  );
                })}
              </Select>
            </label>
            <div className="antd-h4-add">请选择题目类型</div>
            <label className="antd-title">
              <Select defaultValue={item.subject_text} style={{ width: 200 }}>
                {this.state.Map.map&&this.state.Map.map((val: any, ind:any) => {
                  return (
                    <Option value={val.subject_text} key={ind}>
                      {val.subject_text}
                    </Option>
                  );
                })}
              </Select>
            </label>
            <div className="antd-h4-add">请选择课程类型</div>
            <label className="antd-title">
              <Select defaultValue={item.questions_type_text} style={{ width: 200 }}>
                {this.state.Map.map&&this.state.Map.map((val: any, ind:any) => {
                  return (
                    <Option value={val.questions_type_text} key={ind}>
                      {val.questions_type_text}
                    </Option>
                  );
                })}
              </Select>
            </label>
            <h3 className="add-h3">题目信息</h3>
            <div className="for-container">
              <Editor value={item.questions_answer} />
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
         </div>)}
      </div>
    );
  }
}
export default Router;
