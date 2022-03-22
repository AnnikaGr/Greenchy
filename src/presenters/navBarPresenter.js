import { signOutFromFirebase } from "@/firebaseAuthModel";
import NavBarView from "@/views/navBarView";

export default
function NavBar(props){
    return <NavBarView userLoggedIn={props.userModel.uid !== null} signOut={() => signOutFromFirebase()}/>
}
