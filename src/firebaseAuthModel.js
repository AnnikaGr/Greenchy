import firebase from "firebase/compat/app";
import "firebase/compat/auth";

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

export { observeAuthStatus };

// login authenticate User (e-mail, passwort)

// register

// logout

// wer ist eiingeloggt
