import React, { Component } from 'react'
import {
    Layout,
} from 'antd'
import './index.css'

const { Footer } = Layout

export default class AppFooter extends Component {
    render() {
        return (
            <Footer className="app-footer">
                <span>底部信息</span>
            </Footer>
        )
    }
}
