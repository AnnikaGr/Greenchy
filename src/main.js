import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase/compat/app'
import firebaseConfig from "./firebaseConfig"

firebase.initializeApp(firebaseConfig)

createApp(App).mount('#app')
