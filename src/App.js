import React, { Component } from 'react'
import {ConfigProvider} from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import AppRoutes from './router/AppRoutes'

import './App.css'

class App extends Component {
  render() {
    return (
      <AppRoutes />
    )
  }
}

const OutApp = () => (
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
) 

export default OutApp;