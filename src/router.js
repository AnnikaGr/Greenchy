import { createRouter, createWebHistory } from 'vue-router'
import Authentication from './presenters/authenticationPresenter.js'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Authentication,
        props: { isSignUp: false },
    },
    {
        path: '/signup',
        name: 'signup',
        component: Authentication,
        props: { isSignUp: true }
    },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router