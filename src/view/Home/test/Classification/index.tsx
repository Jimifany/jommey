import * as React from "react";
import {
  Button,
  Breadcrumb,
  Icon,
  Input,
  Layout,
  Modal,
  message,
  Table
} from "antd";
import { inject, observer } from "mobx-react";
interface Props {
  columns: any;
  action: any;
  insert: any;
}
@inject("action",'insert')
@observer
class Router extends React.Component<Props> {
  state = {
    list: [],
    modal1Visible: false,
    modal2Visible: false,
    typeData: "",
    sort: ""
  };
  //获取添加试卷分类的值
  handChange = (e: any) => {
    let { value } = e.target;
    this.setState({
      typeData: value
    });
  };
  //更改显示框的隐藏和显示状态
  setModal2Visible(modal2Visible: any) {
    this.setState({
      modal2Visible: modal2Visible.show
    });
    if (modal2Visible.key === "确认") {
      this.AddGetType();
      this.setState({
        typeData: ""
      });
    }
  }
  //调用mobx 发起axios请求
  AddGetType = async () => {
    let { getInset } = this.props.insert;
    let result = await getInset({
      text: this.state.typeData,
      sort: this.state.sort + ""
    });
    if (result.code === 1) {
      //添加成功后重新渲染数据
      message.success(result.msg);
    } else {
      message.error(result.msg);
    }
    this.getList();
  };
  componentDidMount() {
    this.getList();
  }
  getList = async () => {
    let { getCation } = this.props.action;
    const result = await getCation();
    this.setState({
      list: result.data,
      sort: result.data.length + 1+''
    });
  };
  // const {getInset} = this.props.insert
  // const results = await getInset()
  public render() {
    const columns = [
      {
        title: "类型Id",
        dataIndex: "ID"
      },
      {
        title: "类型名称",
        dataIndex: "name"
      },
      {
        title: "操作",
        dataIndex: "caozuo"
      }
    ];
    let { typeData } = this.state
    const data = this.state.list.map((item: any, index) => {
      return {
        key: index,
        ID: item.questions_type_id,
        name: item.questions_type_text,
        caozuo: ""
      };
    });
    return (
      <Layout style={{ padding: "0 24px 24px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>试题分类</Breadcrumb.Item>
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
          <div className="ant-table-wrapper style_table__12_WF">
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
        <div>
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
            <Input
              style={{
                border: "none",
                borderBottom: "1px solid #ccc",
                outline: "none"
              }}
              size="large"
              placeholder="请输入类型名称"
              value={typeData}
              onChange={this.handChange}
            />
          </Modal>
        </div>
      </Layout>
    );
  }
}
export default Router;
