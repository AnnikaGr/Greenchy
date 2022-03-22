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

createApp(App).use(router).mount('#app')
