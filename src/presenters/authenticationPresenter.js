import AuthenticationView from "@/views/authenticationView"
import { signInWithFirebase, signUpWithFirebase } from "@/firebaseAuthModel"

const Authentication = {
    props: ["isSignUp"],
    data(){
        return {
            isActive: true
        }
    },
    render(){
        return <AuthenticationView isActive={this.isActive} isSignUp={this.isSignUp} closeModal={() => this.isActive = false} signIn={signIn} signUp={signUp}/>
        
        function signIn(credentials) {
            signInWithFirebase(credentials)
        }

        function signUp(credentials) {
            signUpWithFirebase(credentials)
        }
    }
}

export default Authentication;
