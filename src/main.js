import firebase from 'firebase/compat/app'
import firebaseConfig from "./firebaseConfig"
import {observeAuthStatus} from "./firebaseAuthModel"
import UserModel from "./userModel"
import tripModel from './tripModel'
import { createApp } from 'vue'
import NavBar from './presenters/navBarPresenter'
import router from "./router.js"
import { RouterView } from 'vue-router'
import addTransportationPresenter from './presenters/addTransportationPresenter'


firebase.initializeApp(firebaseConfig)

const App = {
    data(){
        return {
            userModel: new UserModel(),
            tripModel: new tripModel()
        }
    },
    created(){
        addAuthRequirementToRouting(this.userModel)
        observeAuthStatus(this.userModel)
    },
    render(){
        return (
            <div>
                <NavBar userModel={this.userModel}/>
                <RouterView tripModel={this.tripModel}/>
            </div>
        );
    }
}

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
    
createApp(App).use(router).mount('#app')
