
import firebase from 'firebase/compat/app'
import firebaseConfig from "./firebaseConfig"
import {observeAuthStatus} from "./firebaseAuthModel"
import UserModel from "./userModel"
import Authentication from './presenters/authenticationPresenter'



firebase.initializeApp(firebaseConfig)
var userModel = new UserModel()
observeAuthStatus(userModel)

const logIn = {
    data(){
        return {
            userModel: userModel
        }
    },
    render(){
        return (
            <div>
                <Authentication/>
            </div>
        );
    }
}
export default logIn;