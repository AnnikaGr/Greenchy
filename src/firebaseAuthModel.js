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
				userModel.emailVerified = user.emailVerified;
				userModel.photoURL = user.photoURL;
				userModel.uid = user.uid;
				userModel.phoneNumber = user.phoneNumber;
				userModel.providerData = user.providerData;
			}
		},
		function (error) {
			console.log(error);
		}
	);
}

//login
function signInWithFirebase(credentials) {
	const auth = getAuth();
	signInWithEmailAndPassword(auth, credentials.email, credentials.password)
		.then((userCredential) => {
			console.log(userCredential)
		})
		.catch(logError)
}

//register
function signUpWithFirebase(credentials) {
	const auth = getAuth();
	createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
		.then((userCredential) => {
			updateProfile(userCredential.user, { displayName: credentials.name })
				.then((userCredential) => {
					// triggers the onAuthStateChanged observer
					auth.updateCurrentUser(userCredential.user)
				})
				.catch(logError)
		})
		.catch(logError)
}

// logout
function signOutFromFirebase() {
	const auth = getAuth();
	signOut(auth)
		.catch(logError)
}

export { observeAuthStatus , signInWithFirebase, signUpWithFirebase, signOutFromFirebase};