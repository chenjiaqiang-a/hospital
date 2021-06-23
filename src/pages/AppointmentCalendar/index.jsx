import React, { Component, useState } from 'react'
import {
    Layout,
    Calendar,
    Select,
    Typography,
    Row,
    Col,
    Button,
    Modal,
    Space,
} from 'antd'
import {
    ScheduleOutlined,
} from '@ant-design/icons'
import { getBooks } from '../../serve/api'

const { Content } = Layout
const { Title, Text } = Typography

function headerRender({ value, type, onChange, onTypeChange }) {
    const start = 0;
    const end = 12;
    const monthOptions = [];

    const months = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];


    for (let index = start; index < end; index++) {
        monthOptions.push(
            <Select.Option className="month-item" key={index}>
                {months[index]}
            </Select.Option>,
        );
    }
    const month = value.month()
    const year = value.year()
    const options = []
    for (let i = year - 2; i < year + 4; i += 1) {
        options.push(
            <Select.Option className="year-item" key={i} value={i}>
                {i}
            </Select.Option>
        )
    }
    return (
        <div style={{ padding: 8 }}>
            <Title level={2}>预约日历</Title>
            <Row gutter={8}>
                <Col>
                    <Select size="large"
                        onChange={newYear => {
                            const now = value.clone().year(newYear);
                            onChange(now)
                        }}
                        value={String(year)}
                    >
                        {options}
                    </Select>
                </Col>
                <Col>
                    <Select size="large"
                        value={String(month)}
                        onChange={selectedMonth => {
                            const newValue = value.clone().month(selectedMonth)
                            onChange(newValue)
                        }}
                    >
                        {monthOptions}
                    </Select>
                </Col>
                <Col>
                    <Button type="primary" size="large"
                        onClick={() => {
                            getBooks().then(response => {
                                console.log(response);
                            }).catch(error => {
                                console.log(error);
                            })
                        }} 
                    >
                        预约
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

function DateCell ({e}) {
    const [visible, setVisible] = useState(false)
    return (
        <div style={{ overflow:"hidden", width: "100%", height: "100%" }}>
            <Button style={{ color: "orange", width: "100%", height: "100%", fontSize: "3em" }}
                type="link"
                onClick={() => setVisible(!visible)}
            >
                <ScheduleOutlined />
            </Button>
            <Modal visible={visible}
                title={
                    <Title level={3}>预约详情</Title>
                }
                footer={[
                    <Button key="delete" onClick={() => setVisible(!visible)}>取消预约</Button>,
                    <Button key="ok" onClick={() => setVisible(!visible)}>确定</Button>
                ]}
                onCancel={() => setVisible(!visible)}
            >
                <Space direction="vertical">
                    <Text type="success">预约医生：{e.doctor}</Text>
                    <Text>时间：{e.year}年{e.month}月{e.date}日</Text>
                    <Text>预约项目：{e.description}</Text>
                </Space>
            </Modal>
        </div>
    )
}

export default class AppointmentCalendar extends Component {
    state = {
        events: [{
            year: 2021,
            month: 5,
            date: 17,
            doctor: "李医生",
            description: "牙齿矫正，激光美白，拔牙，牙齿检查",
        }, {
            year: 2021,
            month: 5,
            date: 19,
            doctor: "李医生",
            description: "牙齿矫正，激光美白，拔牙，牙齿检查",
        }]
    }

    onPanelChange = (value, mode) => {
        console.log(value.format("YYYY-MM-DD"), mode);
    }

    dateCellRender = value => {
        const {events} = this.state
        const eventList = events.filter(event => {
            return event.year === value.year() && event.month === value.month() && event.date === value.date()
        })
        if (eventList.length === 0) {
            return ""
        }
        const e = eventList[0]
        return (
            <DateCell e={e}/>
        )
    
    }

    render() {
        return (
            <Content style={{ overflow: "auto", padding:"10px", backgroundColor: "#fff", margin: "20px", borderRadius: "10px"}}>
                <Calendar
                    mode="month" 
                    headerRender={headerRender} 
                    dateCellRender={this.dateCellRender} 
                />
            </Content>
        )
    }
}
