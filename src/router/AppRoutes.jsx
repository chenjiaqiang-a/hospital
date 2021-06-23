import React, { Component } from 'react'
import {Switch} from 'react-router-dom'

import FirstLevelRoutesAuth from './FirstLevelRoutesAuth'
import { appRoutes } from './routes.config'

export default class AppRoutes extends Component {
    render() {
        return (
            <Switch>
                <FirstLevelRoutesAuth config={appRoutes} />
            </Switch>
        )
    }
}
