import { createApp } from 'vue'
import firebase from 'firebase/compat/app'
import firebaseConfig from "./firebaseConfig"
import {observeAuthStatus} from "./firebaseAuthModel"
import UserModel from "./userModel"
import Authentication from './presenters/authenticationPresenter'
import NavBar from './presenters/navBarPresenter'

firebase.initializeApp(firebaseConfig)
var userModel = new UserModel()
observeAuthStatus(userModel)

const App = {
    data(){
        return {
            userModel: userModel
        }
    },
    render(){
        return (
            <div>
                <NavBar/>
                <Authentication/>
                <button class="button" onClick={() => console.log(this.userModel)}>Log current user</button>
            </div>
        );
    }
}

createApp(App).mount('#app')
