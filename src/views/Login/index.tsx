import { Button, Checkbox, Form, Icon, Input } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import * as React from 'react';
import { inject } from "mobx-react";
interface UserFormProps extends FormComponentProps {
    age: number
    name: string
    history: any
    user: any
}
@inject('user')
class App extends React.Component<UserFormProps, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            list: []
        }
    }
    public handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        this.props.form.validateFields(async (err: any, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values)
                let result = await this.props.user.login(values);
                console.log('result...', result);
            }
        })
    }
    public render() {

        console.log('props....', this.props);
        let { history } = this.props;
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='content'>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('user_name', {
                            validateTrigger: "onBlur",
                            rules: [
                                {
                                    message: 'Please input your user_name!', required: true
                                },
                                {
                                    validator: (rule, value, callback) => {
                                        if (/[a-z]{5,20}/) {
                                            callback();
                                        }
                                        else {
                                            callback('Please input valid user_name!')
                                        }
                                    }
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="user"
                                        style={{ color: 'rgba(0,0,0,.25)' }}
                                    />
                                }
                                placeholder="user_name"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('user_pwd', {
                            validateTrigger: "onBlur",

                            rules: [
                                {
                                    message: 'Please input your user_pwd!',
                                    required: true
                                },
                                {
                                    validator: (rule, value, callback) => {
                                        if (/^(?![a-z]+$)(?![A-Z]+$)(?!([^(a-zA-Z\!\*\.\#)])+$)^.{8,16}$/.test(value)) {
                                            callback();
                                        } else {
                                            callback('Please input valid password!')
                                        }
                                    }
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="lock"
                                        style={{ color: 'rgba(0,0,0,.25)' }}
                                    />
                                }
                                type="user_pwd"
                                placeholder="user_pwd"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            initialValue: true,
                            valuePropName: 'checked'
                        })(<Checkbox>Remember me</Checkbox>)}
                        <a className="login-form-forgot" href="">
                            Forgot password
                  </a>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button" onClick={() => { history.push('/main') }}>
                            Log in
                  </Button>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default Form.create()(App)
