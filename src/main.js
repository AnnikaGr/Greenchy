import { createApp } from 'vue'
import firebase from 'firebase/compat/app'
import firebaseConfig from "./firebaseConfig"
import {observeAuthStatus} from "./firebaseAuthModel"
import UserModel from "./userModel"
import WelcomePage from './presenters/welcomePagePresenter'

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
                <WelcomePage/>
            </div>
        );
    }
}

createApp(App).mount('#app')
