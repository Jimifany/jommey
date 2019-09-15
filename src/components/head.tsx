import * as React from "react";
const { Header } = Layout;
import { Layout, Menu, Dropdown, Modal, Form, Input ,Upload,Icon, message} from "antd";
import { observer, inject } from "mobx-react";
interface Props {
  global?: any;
  form: any;
  user?: any;
}

@inject("global", "user")
@observer
class Head extends React.Component<Props> {
  state = { visible: false, modal1Visible: false, modal2Visible: false ,loading: false};
  setModal2Visible=(modal2Visible: any)=>{
    this.setState({
      modal2Visible: modal2Visible.show
    });
    if (modal2Visible.key === "确认") {
      this.props.form.validateFields(async (err: any, val: any)=>{
        val.avatar = this.props.user.avatar;
        const {code, msg} = await this.props.user.updateUserInfo(val);
        if (code === 1){
          message.success('更新用户信息成功');
          this.setState({
            visible: false
          })
        }else{
          message.error(msg)
        }
      })
    }
  }
  beforeUpload():boolean{
    return true
  }
  handleChange=(info: any)=>{
    console.log('info....', info);
    if (info.file.status === 'uploading') {
         message.error('没有成功')
    }
    if (info.file.status === 'done') {
      this.props.user.changeAvatar(info.file.response.data[0].path);
    }
  }
  public render() {
    const { getFieldDecorator } = this.props.form;
    const { userInfo,avatar } = this.props.user;
    const formItemLayout = {
      labelCol: { span: 4, offset: 4 },
      wrapperCol: { span: 12 },
    };
    const menu = (
      <Menu>
        <Menu.Item>
          <span
            onClick={() =>
              this.setModal2Visible({
                show: true,
                key: "添加"
              })
            }
          >
            更换头像
          </span>
        </Menu.Item>
        <Menu.Item>
          <span>切换用户</span>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.tmall.com/"
          >
            设置
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.tmall.com/"
          >
            退出登录
          </a>
        </Menu.Item>
      </Menu>
    );
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div>
        <Header className="header">
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "48px" }}
          >
            <Menu.Item key="1">八维管理系统</Menu.Item>
            <Menu.Item key="2">
              <span
                onClick={() =>
                  this.props.global.changeLocale(
                    this.props.global.locale === "zh" ? "en" : "zh"
                  )
                }
              >
                切换切换国际化
              </span>
            </Menu.Item>
            <Dropdown
              overlay={menu}
              placement="bottomLeft"
              className="BasicLayout_logout__D7-6i"
            >
              <div>
                <span className="ant-avatar ant-avatar-circle Header_user__13tot">
                  <span
                    className="ant-avatar-string"
                    style={{ transform: "scale(1) translateX(-50%)" }}
                  >
                    <img src={avatar} alt="" style={{width:"32px",height:"32px"}}/>
                  </span>
                </span>
                {userInfo.user_name}
              </div>
            </Dropdown>
          </Menu>
        </Header>
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
          <Form {...formItemLayout}>
            <Form.Item label="用户头像">
              {getFieldDecorator("avatar", {
                initialValue: userInfo.user_id
              })}
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="http://123.206.55.50:11000/upload"
                beforeUpload={this.beforeUpload}
                onChange={this.handleChange}
              >
                {avatar ? <img src={avatar} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
              </Upload>
            </Form.Item>
            <Form.Item label="用户ID">
              {getFieldDecorator("user_id", {
                initialValue: userInfo.user_id
              })(<Input disabled={true} />)}
            </Form.Item>
            <Form.Item label="用户名">
              {getFieldDecorator("user_name", {
                initialValue: userInfo.user_name,
                rules: [
                  {
                    required: true,
                    message: "Please input your user name!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="密码">
              {getFieldDecorator("user_pwd", {
                rules: [
                  {
                    validator: (
                      ruler: object[],
                      value: string,
                      callback: any
                    ) => {
                      console.log("value...", value);
                      if (
                        value &&
                        /^(?![a-z]+$)(?![A-Z]+$)(?!([^(a-zA-Z\!\*\.\#)])+$)^.{8,16}$/.test(
                          value
                        )
                      ) {
                        callback();
                      } else if (!value) {
                        callback();
                      } else {
                        callback("Please input valid password!");
                      }
                    }
                  }
                ]
              })(<Input />)}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}
export default Form.create()(Head);
