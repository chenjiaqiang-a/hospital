import React, { Component } from 'react'
import {
    Layout,
    Typography,
    List,
    Avatar,
} from 'antd'
import { Link } from 'react-router-dom'

const { Content } = Layout
const { Title, Text } = Typography

export default class PatientExchange extends Component {
    state = {
        patientList: [{
            name: "王小明",
            avatar: "/images/patient.png",
            age: 20,
            times: 1,
            phone: "138****0101",
            appointment: "吃饭、睡觉、打代码，拔牙、正齿、美白",
        }, {
            name: "王大明",
            avatar: "/images/patient2.png",
            age: 26,
            times: 2,
            phone: "138****0101",
            appointment: "吃饭、睡觉、打代码，拔牙、正齿、美白",
        }, {
            name: "王小明",
            avatar: "/images/patient3.png",
            age: 24,
            times: 6,
            phone: "138****0101",
            appointment: "吃饭、睡觉、打代码，拔牙、正齿、美白",
        },]
    }
    
    
    render() {
        const {patientList} = this.state
        return (
                <Content style={{ overflow: "auto", padding:"10px", backgroundColor: "#fff", margin: "20px", borderRadius: "10px"}}>
                    <div style={{padding: 8}}>
                        <Title level={2}>患者档案</Title>
                    </div>
                    <List style={{padding: 10}}
                        itemLayout="horizontal"
                        dataSource={patientList}
                        renderItem={item => {
                            const title = (<div style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
                                <Link to="/home/record/detail">{item.name}</Link>
                                <Text>{item.age}岁 第{item.times}次就诊</Text>
                                <Text style={{color: "gray"}}>联系方式：{item.phone}</Text>
                            </div>)
                            return (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar size="large" src={item.avatar} />}
                                        title={title}
                                        description={item.appointment}
                                    />
                                </List.Item>
                            )
                        }}
                    >

                    </List>
                </Content>
        )
    }
}
