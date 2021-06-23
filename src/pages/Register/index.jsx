import React, { Component } from 'react';
import {
    Form,
    Input,
    Button,
    Layout,
    // Row,
    // Col,
    Checkbox,
    Radio,
} from 'antd'

import './index.css'
import { Link } from 'react-router-dom';
import AppFooter from '../../components/AppFooter'

const { Content } = Layout

class Register extends Component {
    state = {
        checked: true,
    }
    handleCheckboxChange = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }

    handleRegister = (event) => {
        console.log(event);
    }
    render() {
        const { checked } = this.state
        return (
            <Layout className="register">
                <Content style={{ width: "100%" }}>
                    <div className="register-card">
                        <div className="logo">
                            <img src="/images/logo.png" alt="logo" />
                        </div>
                        <Form
                            style={{width: "100%", padding: "20px"}}
                            className="register-form"
                            onFinish={this.handleRegister}
                        >
                            <Form.Item
                                name="phone"
                                rules={[{ required: true, message: '手机号 / 用户名不能为空!' }]}
                                style={{ borderBottom: '1px solid #DCDCDC' }}
                            >
                                <Input placeholder="请输入手机号 / 用户名" bordered={false} />
                            </Form.Item>
                            {/* <Form.Item
                                name="captcha"
                                rules={[{ required: true, message: '验证码不能为空!' }]}
                                style={{ borderBottom: '1px solid #DCDCDC' }}
                            >
                                <Row>
                                    <Col span={16}>
                                        <Input
                                            bordered={false}
                                            type="password"
                                            placeholder="请输入验证码"
                                        />
                                    </Col>
                                    <Col span={8}>
                                        <Button type="link" style={{ fontWeight: 'bold' }}>发送验证码</Button>
                                    </Col>
                                </Row>
                            </Form.Item> */}
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: '密码不能为空!' }]}
                                style={{ borderBottom: '1px solid #DCDCDC' }}
                            >
                                <Input
                                    bordered={false}
                                    type="password"
                                    placeholder="请设置密码"
                                />
                            </Form.Item>
                            <Form.Item
                                name="confirm"
                                dependencies={['password']}
                                rules={[{ required: true, message: "重复密码不能为空"},
                                    ({getFieldValue}) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve()
                                            }
                                            return Promise.reject(new Error('两次输入的密码不匹配！'))
                                        }
                                    })
                                ]}
                                style={{ borderBottom: '1px solid #DCDCDC' }}
                            >
                                <Input
                                    bordered={false}
                                    type="password"
                                    placeholder="请重复密码"
                                />
                            </Form.Item>

                            <Form.Item
                                name="identity"
                                label="注册身份"
                                initialValue="patient"
                            >
                                <Radio.Group>
                                    <Radio value="patient">患者</Radio>
                                    <Radio value="doctor">医生</Radio>
                                </Radio.Group>
                            </Form.Item>


                            <Form.Item style={{textAlign:"center"}}>
                                已有帐号，<Link to="/login">点击登录</Link>
                            </Form.Item>

                            <Form.Item style={{width: "60%", margin: "24px auto"}}>
                                <Button disabled={!checked} size="large" type="primary" htmlType="submit" block style={{ borderRadius: '10px' }}>
                                    注册
                                </Button>
                            </Form.Item>
                            <Form.Item style={{ textAlign: 'center' }}>
                                <Checkbox checked={checked} onChange={this.handleCheckboxChange} style={{ color: '#CCCCCC' }}>
                                    我已阅读并同意《<Button style={{padding:0}} type="link">用户服务协议</Button>》
                                </Checkbox>
                            </Form.Item>
                        </Form>
                    </div>
                </Content>
                <AppFooter />
            </Layout>
        );
    }
}

export default Register;