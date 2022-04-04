import { createRouter, createWebHistory } from 'vue-router'
import AddTransportation from './presenters/addTransportationPresenter.js'
import Authentication from './presenters/authenticationPresenter.js'
import TripsOverview from './presenters/tripsOverviewPresenter.js'
import WelcomePage from './presenters/welcomePagePresenter.js'

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
        displayName: 'welcomePage',
        component: WelcomePage,
        meta: { requiresAuth: false }

    },
    {
        path: '/trips',
        name: 'tripsOverview',
        component: TripsOverview,
        meta: { requiresAuth: true },
        props: true
    },
    {
        path: '/trips/:tripId',
        name: 'trip',
        component: AddTransportation,
        meta: { requiresAuth: true },
        props: true
    }
]

const router = createRouter({ history: createWebHistory(), routes })

function addAuthRequirementToRouting(userModel) {
    router.beforeEach((to, from, next) => { 
        if (to.matched.some(record => record.meta.requiresAuth)) { 
            // this route requires condition to be accessed
            // if not, redirect to home page. 
            if (userModel.uid === null) { 
                next({ path: '/welcome'}) 
            } else { 
                next() 
            } 
        } else { 
            next() // make sure to always call next()! 
        } 
    }) 
}


export {router, addAuthRequirementToRouting}