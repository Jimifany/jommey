import * as React from "react";
import { Button, Breadcrumb, Icon, Layout, Table, Modal, Input, message } from "antd";
import { inject, observer } from "mobx-react";
interface Props {
  teacher: any;
  teInfo: any;
  modal1Visible: any;
  delTeacher: any;
  addTeacher: any

}
@inject('teacher', 'delTeacher', 'addTeacher')
@observer
class Router extends React.Component<Props>{
  state = {
    Map: [],
    modal1Visible: false,
    modal2Visible: false,
    typeData: ""
  };
  setModal1Visible(modal1Visible: any) {
    console.log(11111)
    this.setState({ modal1Visible: modal1Visible.show });
    if (modal1Visible.key === "确认") {
      this.addTea()
    }
  }
  addTea = async () => {
    const { getaddTeacher } = this.props.addTeacher;
    const result = await getaddTeacher({
      room_text: this.state.typeData
    })
    if (result.code === 1) {
      message.success(result.msg)
    } else {
      message.error(result.msg)
    }
    this.selList();
  }
  setModal2Visible(modal2Visible: any) {
    this.setState({ modal2Visible });
  }

  componentDidMount() {
    this.selList();
  }
  selList = async () => {
    let { getTeacher } = this.props.teacher;
    const resultten = await getTeacher()
    this.setState({
      Map: resultten.data
    });
    console.log(resultten)
  };
  public render() {
    const { Map, typeData } = this.state;
    const columns = [
      {
        title: "教师号",
        dataIndex: "room_text",
        key: 'room_text'
      },
      {
        title: "操作",
        dataIndex: 'room',
        render: (text: any, record: any) => <Button onClick={this.del.bind(this, record)}>删除</Button>
      }
    ]
    const data = Map.map((item: any, index: number) => {
      return {
        key: index,
        room_text: item.room_text,
      }
    })
    return (

      <div>

        <Modal
          title="添加教室"
          style={{ top: 20 }}

          visible={this.state.modal1Visible}
          onOk={() => this.setModal1Visible({ show: false, key: "确认" })}
          onCancel={() => this.setModal1Visible({ show: false, key: "取消" })}
        >
          <Input type="text" placeholder="请输入教室名"
            style={{
              border: "none"
            }}
            value={typeData}
            onChange={this.handChange}
          />
        </Modal>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>教师管理</Breadcrumb.Item>
          </Breadcrumb>
          <div className="ant-layout-content">
            <Button type="primary" onClick={() => this.setModal1Visible({ show: true, key: "确认" })}>
              <Icon type="plus" />
              添加教室
            </Button>
          </div>
          <Table columns={columns} dataSource={data} />
        </Layout>
      </div>
    );
  }
  //删除
  del = async (key: any) => {
    const { Map } = this.state;
    // console.log(key)  
    console.log(Map[key.key])
    const { room_id } = Map[key.key];
    console.log(room_id)
    const { getDelTeacher } = this.props.delTeacher
    const result = await getDelTeacher({
      room_id: room_id
    })
    if (result.code === 1) {
      message.success(result.msg)
    } else {
      message.error(result.msg)
    }
  }
  handChange = (e: any) => {
    let Info = e.target.value;
    this.setState({
      typeData: Info,
      show: true
    })


  }


}
export default Router;
