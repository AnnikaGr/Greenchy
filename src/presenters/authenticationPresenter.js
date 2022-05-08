import AuthenticationView from "@/views/authenticationView"
import { signInWithFirebase, signUpWithFirebase} from "@/firebaseModel"

const Authentication = {
    props: ["isSignUp"],
    data(){
        return {
            error: {},
            credentials: {}
        }
    },
    render(){
        const me = this
        return <AuthenticationView onEmailChange={emailChanged} onPasswordChange={passwordChanged} onNameChange={nameChanged} onSignInUp={signInUp} isSignUp={this.isSignUp} error={this.error}/>

        function emailChanged(email) {
            me.credentials.email = email
        }

        function passwordChanged(password) {
            me.credentials.password = password
        }

        function nameChanged(name) {
            me.credentials.name = name
        }

        function signInUp() {
            if (me.isSignUp) {
                signUp()
            } else {
                signIn()
            }
        }

        function signIn() {
            signInWithFirebase(me.credentials).then(() => me.$router.push("/trips")).catch((error) => me.error.message = error.message)
        }

        function signUp() {
            signUpWithFirebase(me.credentials).then(() => me.$router.push("/trips")).catch((error) => me.error.message = error.message)
        }
    }
}

export default Authentication;
