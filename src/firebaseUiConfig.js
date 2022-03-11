import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const uiConfig = {
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
  tosUrl: "https://youtu.be/dQw4w9WgXcQ",
  privacyPolicyUrl: "https://youtu.be/dQw4w9WgXcQ",
};

export default uiConfig;
