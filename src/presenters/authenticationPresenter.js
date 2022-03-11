import AuthenticationView from "@/views/authenticationView"
import uiConfig from "@/firebaseUiConfig"
import * as firebaseui from "firebaseui"
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebaseui/dist/firebaseui.css'

const Authentication = {
    data(){
        return {
            isActive: true
        }
    },
    created(){
        var ui = firebaseui.auth.AuthUI.getInstance()
        if(!ui) {
            ui = new firebaseui.auth.AuthUI(firebase.auth());
        }
        ui.start("#auth-container", uiConfig);
    },
    render(){
        return <AuthenticationView isActive={this.isActive} closeModal={() => this.isActive = false}/>
    }
}

export default Authentication;
