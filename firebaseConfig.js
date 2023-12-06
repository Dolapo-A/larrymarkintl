// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyADOZNXNtR4hkk9qjmlO4PBsFypGx_ufFI",
	authDomain: "larrymarkintl.firebaseapp.com",
	projectId: "larrymarkintl",
	storageBucket: "larrymarkintl.appspot.com",
	messagingSenderId: "149523645341",
	appId: "1:149523645341:web:7ccb9e52504d462dde6574",
	measurementId: "G-0WG93SDREK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
