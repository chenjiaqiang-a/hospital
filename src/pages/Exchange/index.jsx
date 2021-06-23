import React, { Component } from 'react';
import {
    Divider,
    Layout,
    Typography,
    List,
    Avatar,
    Form,
    Input,
    Button,
} from 'antd'
import { UserOutlined } from '@ant-design/icons';

const { Content } = Layout
const {Title, Text} = Typography
const { TextArea } = Input

class Exchange extends Component {
    state = {
        receivedMessages: [{
            id: "1",
            read: false,
            doctor: "王医生",
            avatar: "/images/doctor.png",
            time: "2021-04-21 14:32",
            message: "To be or not to be, this is a question."
        },{
            id: "2",
            doctor: "王医生",
            avatar: "/images/doctor.png",
            read: true,
            time: "2021-02-21 14:32",
            message: "To be or not to be, this is a question."
        },{
            id: "3",
            doctor: "王医生",
            avatar: "/images/doctor.png",
            read: true,
            time: "2021-02-11 14:32",
            message: "To be or not to be, this is a question."
        }],
        sentMessage: [],
    }
    render() {
        const {receivedMessages, sentMessage} = this.state
        return (
            <Content style={{overflow: "auto", padding:"10px", backgroundColor: "#fff", margin: "20px", borderRadius: "10px"}}>
                <div style={{padding: 8}}>
                    <Title level={2}>医生交流</Title>
                </div>
                <List style={{padding: 8}}
                    header={<Title level={4}>收到的消息</Title>}
                    dataSource={receivedMessages}
                    renderItem={item => {
                        let title = (<div style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
                                        <Button type="link"
                                            danger={item.read? false:true}
                                        >
                                            {item.time}
                                        </Button>
                                        <Text>{item.doctor}</Text>
                                    </div>)
                        return (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.avatar} size="large" />}
                                    title={title}
                                    description={item.message}
                                />
                            </List.Item>
                        )
                    }}
                />
                <Divider />
                <List style={{padding: 8}}
                    header={<Title level={4}>发送的消息</Title>}
                    dataSource={sentMessage}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar icon={<UserOutlined />} size="large" />}
                                title={<Text type="success">{item.time}</Text>}
                                description={item.message}
                            />
                        </List.Item>
                    )}
                />

                <div style={{padding: 8}}>
                    <Title level={4}>回复消息</Title>
                    <Form>
                        <Form.Item>
                            <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary">发送消息</Button>
                        </Form.Item>
                    </Form>
                </div>

            </Content>
        );
    }
}

export default Exchange;