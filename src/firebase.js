// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByCrvOC1YdIRlimq2cgDsqymqXcCagx2Q",
  authDomain: "uploading-60794.firebaseapp.com",
  projectId: "uploading-60794",
  storageBucket: "uploading-60794.appspot.com",
  messagingSenderId: "962493000225",
  appId: "1:962493000225:web:2840ad3e3bb7728bebd160",
  measurementId: "G-7CK22H7N3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;