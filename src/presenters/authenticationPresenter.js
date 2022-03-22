import AuthenticationView from "@/views/authenticationView"
import { signInWithFirebase, signUpWithFirebase } from "@/firebaseAuthModel"

const Authentication = {
    props: ["isSignUp"],
    render(){
        return <AuthenticationView isSignUp={this.isSignUp} signIn={signIn} signUp={signUp} />

        function signIn(credentials) {
            signInWithFirebase(credentials)
        }

        function signUp(credentials) {
            signUpWithFirebase(credentials)
        }
    }
}

export default Authentication;
