import React, { Component } from 'react'
import {
    Layout,
    Typography,
    Col,
    Row,
} from 'antd'

const { Text, Title } = Typography

const { Header } = Layout

export default class HomeHeader extends Component {
    render() {
        return (
            <Header style={{background: "linear-gradient(270deg, #d0f9fa, #01c4ca)" }}>
                <Row gutter={[16]}>
                    <Col>
                        <Title style={{ fontSize: "3em", color: "#779ec3"}}>控芽</Title>
                    </Col>
                    <Col>
                        <Text style={{fontSize: "1.5em"}}>隐形正畸进度远程测评技术研究领跑者</Text>
                    </Col>
                </Row>
            </Header>
        )
    }
}
