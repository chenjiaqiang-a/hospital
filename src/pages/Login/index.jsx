import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import {
    Form,
    Input,
    Button,
    Tabs,
    Layout
} from 'antd'
import {
    WechatFilled,
} from '@ant-design/icons'

import './index.css'
import { loginAuth } from '../../serve/api'
import AppFooter from '../../components/AppFooter'

const { TabPane } = Tabs
const { Content } = Layout

class MyForm extends Component {

    handleLogin = (event) => {

        loginAuth(event.username, event.password).then((response) => {
            localStorage.setItem("__config_center_token", response.data.access_token)
            localStorage.setItem("identity", this.props.identity)
            localStorage.setItem("refresh_token", response.data.refresh_token)
            // console.log(response)
            // console.log(this.props);
            this.props.history.replace('/home')
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <Form
                style={{width: "100%"}}
                initialValues={{ remember: true }}
                onFinish={this.handleLogin}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: '手机号 / 用户名不能为空!' }]}
                    style={{ borderBottom: '1px solid #DCDCDC' }}
                >
                    <Input placeholder="请输入手机号 / 用户名" bordered={false} />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '密码不能为空!' }]}
                    style={{ borderBottom: '1px solid #DCDCDC' }}
                >
                    <Input bordered={false} type="password" placeholder="请输入密码" />
                </Form.Item>

                <Form.Item style={{ width: "60%", margin: "24px auto" }}>
                    <Link to="/register"><Button size="large" type="link" block>创建账号</Button></Link>
                </Form.Item>

                <Form.Item style={{ width: "60%", margin: "24px auto" }}>
                    <Button size="large" type="primary"
                        htmlType="submit" block
                        style={{ borderRadius: "10px" }}
                    >
                        登录
                    </Button>
                </Form.Item>

                <Form.Item style={{ width: "10%", margin: "24px auto" }}>
                    <Button size="large" shape="circle"><WechatFilled /></Button>
                </Form.Item>
            </Form>
        )
    }
}

const LoginForm = withRouter(MyForm)

export default class Login extends Component {
    render() {
        return (
            <Layout className="login">
                <Content style={{width: "100%"}}>
                    <div className="login-card">
                        <div className="logo">
                            <img src="/images/logo.png" alt="logo" />
                        </div>
                        <Tabs className="form-table" defaultActiveKey="patient" type="card" centered size="large">
                            <TabPane tab="患者端" key="patient">
                                <LoginForm identity="patient" />
                            </TabPane>
                            <TabPane tab="医生端" key="doctor">
                                <LoginForm identity="doctor"/>
                            </TabPane>
                        </Tabs>
                    </div>
                </Content>
                <AppFooter />
            </Layout>
            
        )
    }
}


