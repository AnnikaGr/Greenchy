import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database"
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut} from 'firebase/auth'
import { logError } from "./utils";
import TripsModel from "./models/tripsModel";
import Trip from "./models/trip";

// Database

function updateFirebaseFromModel(userModel) {
    userModel.tripsModel.addObserver(firebaseObserverACB)

    function firebaseObserverACB(payload) {
		const REF = userModel.uid

        if (payload) {
            if (payload.addTrip) {
                firebase.database().ref(REF + "/trips/" + payload.addTrip.id).set(payload.addTrip)
                updateTripFromFirebase(userModel, payload.addTrip.id)
            }
            if (payload.removeTrip) {
                firebase.database().ref(REF + "/trips/" + payload.removeTrip.id).set(null)
            }
            if (payload.tripId){
                const TRIP_REF = REF + "/trips/" + payload.tripId
                if (payload.addTransportation) {
                    firebase.database().ref(TRIP_REF + "/transportations/" + payload.addTransportation.id).set(payload.addTransportation)
                }
                if (payload.removeTransportation) {
                    firebase.database().ref(TRIP_REF + "/transportations/" + payload.removeTransportation.id).set(null)
                }
            }
        }
    }

	return firebaseObserverACB
}

function updateModelFromFirebase(userModel) {
	const REF = userModel.uid

    firebase.database().ref(REF + "/trips").on("child_added", (data) => {
        if (!userModel.tripsModel.getTrip(+data.key)) {
            const {id, name, transportations = []} = data.val()
            userModel.tripsModel.addTrip(new Trip(name, transportations, id))
            updateTripFromFirebase(userModel, id)
        }
    })
    firebase.database().ref(REF + "/trips").on("child_removed", (data) => {
        const tripToRemove = userModel.tripsModel.getTrip(+data.key)
        if (tripToRemove) {
            userModel.tripsModel.removeTrip(tripToRemove)
        }
    })

    firebase.database().ref(REF + "/trips").once("value").then(data => {
        data.forEach(firebaseTrip => {
            updateTripFromFirebase(userModel, +firebaseTrip.key)
        })
    })
}

function updateTripFromFirebase(userModel, tripId) {
    const REF_TRIP = userModel.uid + "/trips/" + tripId

    firebase.database().ref(REF_TRIP + "/transportations").on("child_added", (data) => {
        const trip = userModel.tripsModel.getTrip(tripId)
        if (trip && !trip.transportations.find((transp) => transp.id === +data.key)) {
            trip.transportations = [...trip.transportations, data.val()]
        }
    })
    firebase.database().ref(REF_TRIP + "/transportations").on("child_removed", (data) => {
        const trip = userModel.tripsModel.getTrip(tripId)
        const transportationToRemove = trip.transportations.find(transp => transp.id === +data.key)
        if (trip && transportationToRemove) {
            userModel.tripsModel.removeTransportation(trip.id, transportationToRemove)
        }
    })
}

function unsubscribeFromFirebaseUpdates(userModel) {
    const REF = userModel.uid

    firebase.database().ref(REF+"/trips").off("child_added")
	firebase.database().ref(REF+"/trips").off("child_removed")
    return firebase.database().ref(REF+"/trips").once("value").then(data => {
        data.forEach(trip => {
            const REF_TRIP = REF + "/trips/" + trip.id
            firebase.database().ref(REF_TRIP + "/transportations").off("child_added")
            firebase.database().ref(REF_TRIP + "/transportations").off("child_removed")
        })
    })
}

function firebaseModelPromise(userModel) {
	const REF = userModel.uid + "/trips"
    return firebase.database().ref(REF).once("value")
		.then(buildModel);

    function buildModel(data) {
        const tripsModel = new TripsModel()
        data.forEach(trip => {
            const transportations = []
            for (const prop in trip.val().transportations) {
                transportations.push(trip.val().transportations[prop])
            }
            tripsModel.addTrip(new Trip(trip.val().name, transportations, trip.val().id))
        })
        userModel.tripsModel = tripsModel
    }
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
                    userModel.loaded = true
				})
			} else {
				userModel.reset();
			}
		}, logError
	);
}

//login
function signInWithFirebase(credentials) {
	const auth = getAuth();
	return signInWithEmailAndPassword(auth, credentials.email, credentials.password)
}

//register
function signUpWithFirebase(credentials) {
	const auth = getAuth();
	return createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
		.then((userCredential) => {
			updateProfile(userCredential.user, { displayName: credentials.name })
				.then(() => {
					// triggers the onAuthStateChanged observer
					auth.updateCurrentUser(userCredential.user)
				})
				.catch(logError)
		})
}

// logout
function signOutFromFirebase(userModel) {
	const auth = getAuth();
    return unsubscribeFromFirebaseUpdates(userModel)
        .then(() => signOut(auth))
        .catch(logError)
}

export { observeAuthStatus , signInWithFirebase, signUpWithFirebase, signOutFromFirebase};