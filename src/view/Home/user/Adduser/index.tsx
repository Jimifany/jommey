import * as React from "react";
import { Button, Input, Layout, Radio, Select, message } from "antd";
const { Option } = Select;
import { inject, observer } from "mobx-react";
interface Props {
  adduser: any;
  addview: any;
  addapi: any;
  username: any;
  edit: any;
  authedit: any;
  authview: any;
  identityApi: any;
  identityView: any;
}
@inject("adduser")
@inject("addview")
@inject(
  "addapi",
  "username",
  "edit",
  "authedit",
  "authview",
  "identityApi",
  "identityView"
)
@observer
class Router extends React.Component<Props> {
  state = {
    list: [],
    Map: [],
    Hot: [],
    typeuser: "",
    typepwd: "",
    identity: "",
    identity_edit: "",
    permission_name: "",
    permission_url: "",
    permission_method: "",
    view_authority_text: "",
    view_id: "",
    authority: ""
  };
  componentDidMount() {
    this.getList();
  }
  getList = async () => {
    let { getAdduser } = this.props.adduser;
    let { getAddView } = this.props.addview;
    let { getAddapi } = this.props.addapi;
    const result = await getAdduser();
    const results = await getAddView();
    const resulten = await getAddapi();
    this.setState({
      list: result.data,
      Map: results.data,
      Hot: resulten.data
    });
  };
  //获取输入框用户名的值
  handUser = (e: any) => {
    let { value } = e.target;
    this.setState({
      typeuser: value
    });
  };
  //获取输入框密码的值
  handPwd = (e: any) => {
    let { value } = e.target;
    this.setState({
      typepwd: value
    });
  };
  //添加身份id
  Identity = (id: any) => {
    this.setState({
      identity: id
    });
  };
  //确定添加
  handSure = async () => {
    const { getUser } = this.props.username;
    const result = await getUser({
      user_name: this.state.typeuser,
      user_pwd: this.state.typepwd,
      identity_id: this.state.identity
    });
    console.log(result);
    if (result.code === 1) {
      message.success(result.msg);
    } else {
      message.error(result.msg);
    }
  };
  //获取用户信息
  handEdit = (e: any) => {
    let { value } = e.target;
    this.setState({
      identity_edit: value
    });
  };
  //确定添加身份
  Edit = async () => {
    let { getEdit } = this.props.edit;
    const result = await getEdit({
      identity_text: this.state.identity_edit
    });
    if (result.code === 1) {
      message.success(result.msg);
    } else {
      message.error(result.msg);
    }
  };
  //api接口的方法
  Name = (e: any) => {
    let { value } = e.target;
    console.log(value);
    this.setState({
      permission_name: value
    });
  };
  //api接口的地址
  Url = (e: any) => {
    let { value } = e.target;
    this.setState({
      permission_url: value
    });
  };
  //api接口的方法
  Method = (e: any) => {
    let { value } = e.target;
    this.setState({
      permission_method: value
    });
  };
  //获取视图信息
  handView = (id: any) => {
    console.log(id);
    this.state.Map.map((item: any) => {
      if (id === item.view_authority_id) {
        this.setState({
          view_authority_text: item.view_authority_text,
          view_id: id
        });
      }
    });
  };
  //确定给api添加全选
  Permission = async () => {
    let { getAuthedit } = this.props.authedit;
    const result = await getAuthedit({
      api_authority_text: this.state.permission_name,
      api_authority_url: this.state.permission_url,
      api_authority_method: this.state.permission_method
    });
    if (result.code === 1) {
      message.success(result.msg);
    } else {
      message.error(result.msg);
    }
  };
  //确定添加视图权限
  View = async () => {
    let { getAuthview } = this.props.authview;
    const result = await getAuthview({
      view_authority_text: this.state.view_authority_text,
      view_id: this.state.view_id
    });
    if (result.code === 1) {
      message.success(result.msg);
    } else {
      message.error(result.msg);
    }
  };
  //api接口权限
  Authority = (id: any) => {
    this.setState({
      authority: id
    });
  };
  // 给身份设置接口权限
  Setidentity = async () => {
    let { SetIdentityApi } = this.props.identityApi;
    const result = await SetIdentityApi({
      identity_id: this.state.identity,
      api_authority_id: this.state.authority
    });
    if (result.code === 1) {
      message.success(result.msg);
    } else {
      message.error(result.msg);
    }
  };
  //给身份设置视图权限
  PleaseView = async () => {
    let { SetIdentityView } = this.props.identityView;
    const result = await SetIdentityView({
      identity_id: this.state.identity,
      view_authority_id: this.state.authority
    });
    if (result.code === 1) {
      message.success(result.msg);
    } else {
      message.error(result.msg);
    }
  };
  public render() {
    const {
      list,
      Map,
      Hot,
      typeuser,
      typepwd,
      identity_edit,
      permission_name,
      permission_url,
      permission_method,
      view_authority_text,
      view_id
    } = this.state;
    console.log(view_authority_text, view_id);
    return (
      <div>
        <Layout style={{ padding: "0 24px 24px" }}>
          <h2 className="add-h2">添加用户</h2>
          <div className="ant-exam">
            <div className="addUser_wrapper__3qQDv">
              <div className="add-right">
                <Button type="primary" ghost>
                  添加用户
                </Button>
                <Radio.Button value="default">更新用户</Radio.Button>
                <div className="add-inp">
                  <Input
                    placeholder="请输入用户名"
                    value={typeuser}
                    onChange={this.handUser}
                  />
                </div>
                <div className="add-inp">
                  <Input
                    placeholder="请输入密码"
                    value={typepwd}
                    onChange={this.handPwd}
                  />
                </div>
                <div className="add-inp">
                  <Select
                    defaultValue="请选择身份id"
                    style={{ width: 180 }}
                    onChange={this.Identity}
                  >
                    {list.map((item: any, index) => {
                      return (
                        <Option value={item.identity_id} key={index}>
                          {item.identity_text}
                        </Option>
                      );
                    })}
                  </Select>
                </div>
                <div className="add-inp">
                  <Button
                    type="primary"
                    onClick={() => {
                      this.handSure();
                    }}
                  >
                    确定
                  </Button>
                  <Radio.Button
                    value="default"
                    onClick={() => {
                      this.setState({
                        typeuser: "",
                        typepwd: ""
                      });
                    }}
                  >
                    重置
                  </Radio.Button>
                </div>
              </div>
            </div>
            <div className="addUser_wrapper__3qQDv">
              <Button type="primary" ghost>
                添加身份
              </Button>
              <div className="add-inp">
                <Input
                  placeholder="请输入用户名"
                  value={identity_edit}
                  onChange={this.handEdit}
                />
              </div>
              <div className="add-inp">
                <Button
                  type="primary"
                  onClick={() => {
                    this.Edit();
                  }}
                >
                  确定
                </Button>
                <Radio.Button
                  value="default"
                  onClick={() => {
                    this.setState({
                      identity_edit: ""
                    });
                  }}
                >
                  重置
                </Radio.Button>
              </div>
            </div>
            <div className="addUser_wrapper__3qQDv">
              <Button type="primary" ghost>
                添加接口权限
              </Button>
              <div className="add-inp">
                <Input
                  placeholder="请输入api接口权限名称"
                  value={permission_name}
                  onChange={this.Name}
                />
              </div>
              <div className="add-inp">
                <Input
                  placeholder="请输入api接口权限url"
                  value={permission_url}
                  onChange={this.Url}
                />
              </div>
              <div className="add-inp">
                <Input
                  placeholder="请输入api接口权限的方法"
                  value={permission_method}
                  onChange={this.Method}
                />
              </div>
              <Button type="primary" onClick={this.Permission}>
                确定
              </Button>
              <Radio.Button
                value="default"
                onClick={() => {
                  this.setState({
                    permission_name: "",
                    permission_url: "",
                    permission_method: ""
                  });
                }}
              >
                重置
              </Radio.Button>
            </div>
            <div className="addUser_wrapper__3qQDv">
              <Button type="primary" ghost>
                添加视图接口权限
              </Button>
              <div className="add-inp">
                <Select
                  defaultValue="请选择已有视图"
                  style={{ width: 180 }}
                  onChange={this.handView}
                >
                  {Map.map((item: any, index) => {
                    return (
                      <Option value={item.view_authority_id} key={index}>
                        {item.view_authority_text}
                      </Option>
                    );
                  })}
                </Select>
              </div>
              <div className="add-inp">
                <Button type="primary" onClick={this.View}>
                  确定
                </Button>
                <Radio.Button
                  value="default"
                  onClick={() => {
                    this.setState({
                      view_authority_text: "",
                      view_id: ""
                    });
                  }}
                >
                  重置
                </Radio.Button>
              </div>
            </div>
            <div className="addUser_wrapper__3qQDv">
              <Button type="primary" ghost>
                给身份设置api添加权限
              </Button>
              <div className="add-inp">
                <Select
                  defaultValue="请选择身份id"
                  style={{ width: 180 }}
                  onChange={this.Identity}
                >
                  {list.map((item: any, index) => {
                    return (
                      <Option value={item.identity_id} key={index}>
                        {item.identity_text}
                      </Option>
                    );
                  })}
                </Select>
              </div>
              <div className="add-inp">
                <Select
                  defaultValue="请选择api接口权限"
                  style={{ width: 180 }}
                  onChange={this.Authority}
                >
                  {Hot.map((item: any, index) => {
                    return (
                      <Option value={item.api_authority_id} key={index}>
                        {item.api_authority_text}
                      </Option>
                    );
                  })}
                </Select>
              </div>
              <div className="add-inp">
                <Button type="primary" onClick={this.Setidentity}>
                  确定
                </Button>
                <Radio.Button value="default">重置</Radio.Button>
              </div>
            </div>
            <div className="addUser_wrapper__3qQDv">
              <Button type="primary" ghost>
                给身份设置视图权限
              </Button>
              <div className="add-inp">
                <Select defaultValue="请选着身份id" style={{ width: 180 }}>
                  {list.map((item: any, index) => {
                    return (
                      <Option value={item.identity_text} key={index}>
                        {item.identity_text}
                      </Option>
                    );
                  })}
                </Select>
              </div>
              <div className="add-inp">
                <Select defaultValue="请选择视图权限id" style={{ width: 180 }}>
                  {Map.map((item: any, index) => {
                    return (
                      <Option value={item.view_authority_text} key={index}>
                        {item.view_authority_text}
                      </Option>
                    );
                  })}
                </Select>
              </div>
              <div className="add-inp">
                <Button type="primary" onClick={this.PleaseView}>
                  确定
                </Button>
                <Radio.Button value="default">重置</Radio.Button>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}
export default Router;
