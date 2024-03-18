import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7lnlqlWJWJRedaeLncx7OoC7CmT_R62w",
  authDomain: "listnlease.firebaseapp.com",
  projectId: "listnlease",
  storageBucket: "listnlease.appspot.com",
  messagingSenderId: "742301304571",
  appId: "1:742301304571:web:12cbc9362f4ee6d33ed25e",
  measurementId: "G-W831BY45F3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);