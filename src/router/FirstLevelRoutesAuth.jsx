import React, { Component } from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'

export default class FirstLevelRoutesAuth extends Component {
    render() {
        const { location, config } = this.props
        const { pathname } = location
        const firstPath = pathname.split("/")[1]
        const isLogin = localStorage.getItem('__config_center_token')
        // console.log(firstPath);

        // 如果该路由不用进行权限校验，登录状态下登陆页除外
        // 因为登陆后，无法跳转到登陆页
        // 这部分代码，是为了在非登陆状态下，访问不需要权限校验的路由
        const targetRouteConfig = config.find(v => v.path === "/"+firstPath)
        if (targetRouteConfig && !targetRouteConfig.path && !isLogin) {
            const { component } = targetRouteConfig
            return <Route exact path={pathname} component={component} />
        }

        if (isLogin) {
            // 如果是登陆状态，想要跳转到登陆，重定向到主页
            if (pathname === '/login' || pathname === '/register') {
                return <Redirect to="/home" />
            } else {
                // 如果路由合法，就跳转到相应的路由，如果路由不合法，重定向到主页
                if (targetRouteConfig) {
                    return <Route path={pathname} component={targetRouteConfig.component} />
                } else {
                    return <Redirect to="/home" />
                }
            }
        } else {
            // 非登陆状态下，当路由合法时且不需要权限校验时，跳转到相应的路由
            if (targetRouteConfig && !targetRouteConfig.auth) {
                return <Route path={pathname} component={targetRouteConfig.component} />
            }
            // 非登陆状态下，当路由合法时且需要权限校验或路由不合法时，跳转到登陆页面，要求登陆
            return <Redirect to="/login" />
        }
    }
}

// function AuthRoute(props) {
//     const { auth, isLogin, ...otherProps } = props

//     if (!auth) {
//         return (
//             <Route {...otherProps} />
//         )
//     } else if (!isLogin) {
//         return (
//             <Redirect to='/login' />
//         )
//     } else if () {

//     }

// }

