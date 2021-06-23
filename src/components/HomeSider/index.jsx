import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import {
    Layout,
    Menu,
    Avatar,
    Button,
    Modal
} from 'antd'
import {
    CalendarOutlined,
    PictureOutlined,
    MessageOutlined,
    ScheduleOutlined,
    SnippetsOutlined,
} from '@ant-design/icons'

import './index.css'

const { Sider } = Layout

class HomeSider extends Component {
    state = {
        visible: false
    }

    onLogout = () => {
        const { visible } = this.state
        this.setState({
            visible: !visible
        })
    }
    handleLogout = (isOk) => {
        if (!isOk) {
            this.setState({
                visible: !this.state.visible
            })
            return
        }
        localStorage.setItem("__config_center_token", "")
        // console.log(this.props.history);
        this.props.history.replace('/login')
    }

    render() {
        const { identity, avatar } = this.props
        const { visible } = this.state
        const selectedKeys = [this.props.location.pathname.split("/").pop()]

        if (identity === "doctor") {
            return (
                <Sider width={250} className="home-sider" theme="light">
                    <div className="logo">
                        <img src="/images/logo.png" alt="logo" />
                    </div>
                    <div className="avatar">
                        <Avatar size={64} src={avatar} />
                    </div>
                    <Menu className="menu" selectedKeys={selectedKeys} mode="inline">
                        <Menu.Item key="record" icon={<SnippetsOutlined />}>
                            <Link to="/home/record">患者档案</Link>
                        </Menu.Item>
                        <Menu.Item key="patient_exchange" icon={<MessageOutlined />}>
                            <Link to="/home/patient_exchange">患者交流</Link>
                        </Menu.Item>
                        <Menu.Item key="appointment" icon={<ScheduleOutlined />}>
                            <Link to="/home/appointment">我的预约</Link>
                        </Menu.Item>
                    </Menu>
                    <Button size="large" type="primary" 
                        style={{margin: "20px", borderRadius: "10px"}}
                        onClick={this.onLogout}
                    >
                        登出
                    </Button>
                    <LogoutModal visible={visible} handleLogout={this.handleLogout} />
                </Sider>
            )
        }
        return (
            <Sider width={250} className="home-sider" theme="light">
                <div className="logo">
                    <img src="/images/logo.png" alt="logo" />
                </div>
                <div className="avatar">
                    <Avatar size={64} src={avatar} />
                </div>
                <Menu className="menu" selectedKeys={selectedKeys} mode="inline">
                    <Menu.Item key="calendar" icon={<CalendarOutlined />}>
                        <Link to="/home/calendar">预约日历</Link>
                    </Menu.Item>
                    <Menu.Item key="exchange" icon={<MessageOutlined />}>
                        <Link to="/home/exchange">医生交流</Link>
                    </Menu.Item>
                    <Menu.Item key="photo" icon={<PictureOutlined />}>
                        <Link to="/home/photo">我的相册</Link>
                    </Menu.Item>
                </Menu>
                <Button size="large" type="primary" 
                    style={{margin: "20px", borderRadius: "10px"}}
                    onClick={this.onLogout}
                >
                    登出
                </Button>
                <LogoutModal visible={visible} handleLogout={this.handleLogout} />
            </Sider>
        )
    }
}

function LogoutModal(props) {
    return (
        <Modal visible={props.visible}
            title="确认操作"
            onOk={() => {
                props.handleLogout(true)
            }}
            onCancel={() => {
                props.handleLogout(false)
            }}
        >
            您确定要进行退出操作吗？
        </Modal>
    )
}

export default withRouter(HomeSider);