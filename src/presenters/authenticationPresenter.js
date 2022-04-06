import AuthenticationView from "@/views/authenticationView"
import { signInWithFirebase, signUpWithFirebase} from "@/firebaseModel"

const Authentication = {
    props: ["isSignUp"],
    data(){
        return {
            error: {}
        }
    },
    render(){
        return <AuthenticationView isSignUp={this.isSignUp} signIn={signIn} signUp={signUp} error={this.error}/>

        function signIn(credentials) {
            signInWithFirebase(credentials).then(() => this.$router.push("/")).catch((error) => this.error.message = error.message)
        }

        function signUp(credentials) {
            signUpWithFirebase(credentials).then(() => this.$router.push("/")).catch((error) => this.error.message = error.message)
        }
    }
}

export default Authentication;
