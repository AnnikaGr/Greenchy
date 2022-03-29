import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database"
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut} from 'firebase/auth'
import { logError } from "./utils";
import TripModel from "./tripModel";

// Database

function updateFirebaseFromModel(userModel) {
    userModel.tripModel.addObserver(firebaseObserverACB)

    function firebaseObserverACB(payload) {
		const REF = userModel.uid + "/trip"
        if (payload) {
            if (payload.distance) {
                firebase.database().ref(REF +"/distance").set(userModel.tripModel.distance);
            }
            if (payload.overallCo2) {
                firebase.database().ref(REF +"/overallCo2").set(userModel.tripModel.overallCo2);
            }
            if (payload.modeOfTransport) {
                firebase.database().ref(REF +"/modeOfTransport").set(userModel.tripModel.modeOfTransport)
            }
        }
    }

	return firebaseObserverACB
}

function updateModelFromFirebase(userModel) {
	const REF = userModel.uid + "/trip"
    firebase.database().ref(REF+"/distance")
		.on("value", (firebaseData) => userModel.tripModel.setDistance(firebaseData.val()))

    firebase.database().ref(REF+"/overallCo2")
		.on("value", (firebaseData) => userModel.tripModel.setOverallCo2(firebaseData.val()))

	firebase.database().ref(REF+"/modeOfTransport")
		.on("value", (firebaseData) => userModel.tripModel.setModeOfTransport(firebaseData.val()))
}

function unsubscribeFromFirebaseUpdates(userModel) {
	const REF = userModel.uid + "/trip"
	firebase.database().ref(REF+"/distance").off("value")
	firebase.database().ref(REF+"/overallCo2").off("value")
	firebase.database().ref(REF+"/modeOfTransport").off("value")
}

function firebaseModelPromise(userModel) {
	const REF = userModel.uid + "/trip"
    return firebase.database().ref(REF).once("value")
		.then(firebaseData => userModel.tripModel = new TripModel(firebaseData.val()?.distance, firebaseData.val()?.modeOfTransport, firebaseData.val()?.overallCo2));
}

// Authentication

function observeAuthStatus(userModel) {
	firebase.auth().onAuthStateChanged(
		function getCurrentUserACB(user) {
			if (user) {
				// User is signed in.
				userModel.displayName = user.displayName;
				userModel.email = user.email;
				userModel.photoURL = user.photoURL;
				userModel.uid = user.uid;
				firebaseModelPromise(userModel).then(() => {
					updateFirebaseFromModel(userModel);
					updateModelFromFirebase(userModel);
				})
			} else {
				unsubscribeFromFirebaseUpdates(userModel);
				userModel.reset();
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