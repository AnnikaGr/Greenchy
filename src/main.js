import firebase from 'firebase/compat/app'
import firebaseConfig from "./firebaseConfig"
import { observeAuthStatus } from './firebaseModel'
import UserModel from "./models/userModel"
import { createApp } from 'vue'
import NavBar from './presenters/navBarPresenter'
import {router, addAuthRequirementToRouting} from "./router.js"
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
                <RouterView userModel={this.userModel}/>
            </div>
        );
    }
}
    
createApp(App).use(router).mount('#app')
