import { createRouter, createWebHistory } from 'vue-router'
import AddTransportation from './presenters/addTransportationPresenter.js'
import Authentication from './presenters/authenticationPresenter.js'
import WelcomePage from './presenters/welcomePagePresenter.js'
import tripModel from './tripModel.js'

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
    {
        path: '/welcome',
        name: 'welcomePage',
        component: WelcomePage,
        meta: { requiresAuth: false }

    },
    {
        path: '/',
        name: 'addTransportation',
        component: AddTransportation,
        props: { model: new tripModel()},
        meta: { requiresAuth: true }
    }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router