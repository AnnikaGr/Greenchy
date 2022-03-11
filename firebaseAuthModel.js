//import firebaseConfig from "./firebaseConfig.js";
import { initializeApp } from "firebase/compat/app";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

initializeApp(firebaseConfig);

function observeAuthStatus(userModel) {
  firebase.auth().onAuthStateChanged(
    function getCurrentUserACB(user) {
      if (user) {
        // User is signed in.
        userModel.displayName,
          userModel.email,
          userModel.emailVerified,
          userModel.photoURL,
          userModel.uid,
          userModel.phoneNumber,
          userModel.providerData;
      }
    },
    function (error) {
      console.log(error);
    }
  );
}

export { observeAuthStatus };

// login authenticate User (e-mail, passwort)

// register

// logout

// wer ist eiingeloggt
