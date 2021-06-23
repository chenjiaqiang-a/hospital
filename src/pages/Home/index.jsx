import React, { Component } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'
import {
    Layout,
} from 'antd'
import HomeSider from '../../components/HomeSider'
import MyAppointment from '../MyAppointment'
import PatientRecord from '../PatientRecord'
import PatientExchange from '../PatientExchange'
import AppointmentCalendar from '../AppointmentCalendar'
import Exchange from '../Exchange'
import Photo from '../Photo';
import HomeHeader from '../../components/HomeHeader'

import './index.css'


export default class Home extends Component {
    
    render() {
        const identity = localStorage.getItem('identity')
        const avatar = identity === "doctor" ? "/images/doctor.png" : "/images/patient.png"
        return (
            <Layout style={{height: "100vh"}}>
                <HomeSider identity={identity} avatar={avatar}/>
                <Layout>
                    <HomeHeader />
                    {identity === "doctor" ?
                        <Switch>
                            <Route path="/home/appointment" component={MyAppointment} />
                            <Route path="/home/record" component={PatientRecord} />
                            <Route path="/home/patient_exchange" component={PatientExchange} />
                            <Redirect to="/home/record"/>
                        </Switch>
                    :   
                        <Switch>
                            <Route path="/home/calendar" component={AppointmentCalendar} />
                            <Route path="/home/photo" component={Photo} />
                            <Route path="/home/exchange" component={Exchange} />
                            <Redirect to="/home/calendar"/>
                        </Switch>
                    }
                </Layout>
            </Layout>
        )
    }
}
