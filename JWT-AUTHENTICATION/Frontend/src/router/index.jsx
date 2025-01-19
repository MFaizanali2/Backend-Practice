import Login from './components/login/login'
import Register from './components/Register/register'

export const router =[
    {
        path: '/',
        Element: <Login />
    },
    {
        path: '/login',
        Element: <Login />
    },
    {
        path: '/register',
        Element: <Register />
    }
]

