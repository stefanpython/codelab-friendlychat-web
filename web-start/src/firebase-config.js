// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnS8eiF3pX0U9hL59wE4Ft1YHI59L-HMk",
  authDomain: "friendlychat-4f0b2.firebaseapp.com",
  projectId: "friendlychat-4f0b2",
  storageBucket: "friendlychat-4f0b2.appspot.com",
  messagingSenderId: "1016651410754",
  appId: "1:1016651410754:web:1593f5d8994a0a9193ecdb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const config = {
  apiKey: "AIzaSyBnS8eiF3pX0U9hL59wE4Ft1YHI59L-HMk",
  authDomain: "friendlychat-4f0b2.firebaseapp.com",
  projectId: "friendlychat-4f0b2",
  storageBucket: "friendlychat-4f0b2.appspot.com",
  messagingSenderId: "1016651410754",
  appId: "1:1016651410754:web:1593f5d8994a0a9193ecdb",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
