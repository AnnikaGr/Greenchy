import * as firebaseui from "firebaseui"
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebaseui/dist/firebaseui.css'


const uiConfig = {
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
    tosUrl: 'https://youtu.be/dQw4w9WgXcQ',
    privacyPolicyUrl: 'https://youtu.be/dQw4w9WgXcQ'
}

const AuthenticationView = {
    props: ["isActive", "closeModal"],
    created(){
        var ui = firebaseui.auth.AuthUI.getInstance()
        if(!ui) {
            ui = new firebaseui.auth.AuthUI(firebase.auth());
        }
        ui.start("#auth-container", uiConfig);
    },
    render(){
        if (this.isActive) {
            return (
                <div class={"modal is-active"}>
                    <div class="modal-background"></div>
                    <div class="modal-content">
                        <div id="auth-container"/>
                    </div>
                    <button class="modal-close is-large" aria-label="close" onClick={() => this.closeModal()}></button>
                </div>
            ); 
        }
    }
}


export default AuthenticationView;