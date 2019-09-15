import { Button, Checkbox, Form, Icon, Input, message } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { inject, observer } from "mobx-react";
import * as React from "react";

interface UserFormProps extends FormComponentProps {
  age: number;
  name: string;
  history: any;
  user: any;
}
@inject("user")
@observer
class App extends React.Component<UserFormProps, any> {
  public handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    this.props.form.validateFields(async (err: any, values: any) => {
      if (!err) {
        const {code,msg}= await this.props.user.login(values);
        console.log(msg);
        if (code === 1) {
          message.success("登录成功", 1, () => {
            this.props.history.push("/index");
          });
        } else {
          message.error(msg||'用户名的格式错误')
        }
      }
    });
  };
  public render() {
    const { getFieldDecorator } = this.props.form;
    const { user_name, user_pwd } = this.props.user.account;
    return (
      <div className="div">
        <div className="content">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("user_name", {
                validateTrigger: "onBlur",
                initialValue: user_name,
                rules: [
                    { required: true, message: 'Please input your user_name!' }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="user_name"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("user_pwd", {
                validateTrigger: "onBlur",
                initialValue: user_pwd,
                rules: [
                    { required: true, message: 'Please input your user_pwd!' }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="user_pwd"
                  placeholder="user_pwd"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("autoLogin", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Auto login in 7 days</Checkbox>)}
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default Form.create()(App);
