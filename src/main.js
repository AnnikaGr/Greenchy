import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase/compat/app'
import firebaseConfig from "./firebaseConfig"
import {observeAuthStatus} from "./firebaseAuthModel"
import UserModel from "./userModel"

firebase.initializeApp(firebaseConfig)
const userModel = new UserModel()
observeAuthStatus(userModel)

createApp(App).mount('#app')

export {userModel}
