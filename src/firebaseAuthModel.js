import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut} from 'firebase/auth'
import { logError } from "./utils";

function observeAuthStatus(userModel) {
	firebase.auth().onAuthStateChanged(
		function getCurrentUserACB(user) {
			if (user) {
				// User is signed in.
				userModel.displayName = user.displayName;
				userModel.email = user.email;
				userModel.photoURL = user.photoURL;
				userModel.uid = user.uid;
			} else {
				userModel.reset()
			}
		}, logError
	);
}

//login
function signInWithFirebase(credentials) {
	const auth = getAuth();
	return signInWithEmailAndPassword(auth, credentials.email, credentials.password)
		.then((userCredential) => {
			console.log(userCredential)
		})
}

//register
function signUpWithFirebase(credentials) {
	const auth = getAuth();
	return createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
		.then((userCredential) => {
			updateProfile(userCredential.user, { displayName: credentials.name })
				.then((userCredential) => {
					// triggers the onAuthStateChanged observer
					auth.updateCurrentUser(userCredential.user)
				})
				.catch(logError)
		})
}

// logout
function signOutFromFirebase() {
	const auth = getAuth();
	return signOut(auth)
		.catch(logError)
}

export { observeAuthStatus , signInWithFirebase, signUpWithFirebase, signOutFromFirebase};