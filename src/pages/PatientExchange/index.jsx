import React, { Component } from 'react'
import {
    Layout,
    Typography,
    List,
    Avatar,
} from 'antd'

import { Link } from 'react-router-dom'

const { Content } = Layout
const { Title } = Typography

export default class PatientExchange extends Component {
    state = {
        patientList: [{
            name: "王小明",
            avatar: "/images/patient.png",
            message: "吃饭、睡觉、打代码，拔牙、正齿、美白",
        }, {
            name: "王大明",
            avatar: "/images/patient2.png",
            message: "吃饭、睡觉、打代码，拔牙、正齿、美白",
        }, {
            name: "王爱明",
            avatar: "/images/patient3.png",
            message: "吃饭、睡觉、打代码，拔牙、正齿、美白",
        },],
    }
    
    
    render() {
        const {patientList} = this.state
        return (
            <Content style={{ overflow: "auto", padding:"10px", backgroundColor: "#fff", margin: "20px", borderRadius: "10px"}}>
                <div style={{padding: 8}}>
                    <Title level={2}>患者交流</Title>
                </div>
                <List style={{padding: 10}}
                    header={<Title level={4}>患者列表</Title>}
                    itemLayout="horizontal"
                    dataSource={patientList}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar size="large" src={item.avatar} />}
                                title={<Link to="/home/patient_exchange/message">{item.name}</Link>}
                                description={item.message}
                            />
                        </List.Item>
                    )}
                >
                </List>
                
            </Content>
        )
    }
}
