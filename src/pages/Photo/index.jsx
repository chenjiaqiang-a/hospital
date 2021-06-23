import React, { Component } from 'react'
import {
    Layout,
    Typography,
    Col,
    Row,
    Timeline,
    Image,
    Button,
    Upload,
} from 'antd'
import { 
    UploadOutlined,
    MoreOutlined,
    RightCircleOutlined,
} from '@ant-design/icons'

const { Content } = Layout
const { Title, Text } = Typography

export default class Photo extends Component {
    render() {
        return (
            <Content style={{overflow: "auto", padding:"10px", backgroundColor: "#fff", margin: "20px", borderRadius: "10px"}}>
                <div style={{padding: 8}}>
                    <Title level={2}>我的相册</Title>
                </div>
                <Row gutter={[16]}>
                    <Col span={8} style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                        <Timeline pending="查看更多" pendingDot={<Button shape="circle" size="small" type="primary"><MoreOutlined /></Button>}>
                            <Timeline.Item dot={<Button style={{color: "orange"}} type="link" shape="circle" size="small"><RightCircleOutlined /></Button>}>picture1</Timeline.Item>
                            <Timeline.Item dot={<Button type="link" shape="circle" size="small"><RightCircleOutlined /></Button>}>picture2</Timeline.Item>
                            <Timeline.Item dot={<Button type="link" shape="circle" size="small"><RightCircleOutlined /></Button>}>picture3</Timeline.Item>
                            <Timeline.Item dot={<Button type="link" shape="circle" size="small"><RightCircleOutlined /></Button>}>picture4</Timeline.Item>
                        </Timeline>
                        <Upload >
                            <Button type="primary" size="large" icon={<UploadOutlined />}>上传图片</Button>
                        </Upload>
                    </Col>
                    <Col span={16} style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <Image style={{padding: 20}} src="/images/teeth.png"/ >
                        <Typography>
                            <Title level={4}>AI测评结果</Title>
                            <Text>To be or not to be, that is a question!</Text>
                        </Typography>
                    </Col>
                </Row>
            </Content>
        )
    }
}
