import firebase from 'firebase/compat/app'
import firebaseConfig from "./firebaseConfig"
import {observeAuthStatus} from "./firebaseAuthModel"
import UserModel from "./userModel"
import { createApp } from 'vue'
import NavBar from './presenters/navBarPresenter'
import router from "./router.js"
import { RouterView } from 'vue-router'


firebase.initializeApp(firebaseConfig)

const App = {
    data(){
        return {
            userModel: new UserModel()
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
                <RouterView/>
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
