import AuthenticationView from "@/views/authenticationView"
import firebaseConfig from "../firebaseConfig"
import uiConfig from "@/firebaseUiConfig"
import * as firebaseui from "firebaseui"
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const Authentication = {
    created(){
        firebase.initializeApp(firebaseConfig)
        const auth = firebase.auth()
        const ui = new firebaseui.auth.AuthUI(auth);
        ui.start("#auth-container", uiConfig);
    },
    render(){
        return <AuthenticationView/>
    }
}

export default Authentication