import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'

const appRoutes = [{
    path: '/login',
    component: Login
}, {
    path: '/register',
    component: Register
}, {
    path: '/home',
    component: Home,
    auth: true,
}]

export {
    appRoutes,
}
