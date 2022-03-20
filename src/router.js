import { createRouter, createWebHistory } from 'vue-router'
import logIn from './loginView.js'



const routes = [
    {
        path: '/login',
        name: 'login',
        component: logIn
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router