import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFwLb7yVo9P_zmOJs_p_19sab65713_Xc",
  authDomain: "gh-release-monitor.firebaseapp.com",
  projectId: "gh-release-monitor",
  storageBucket: "gh-release-monitor.appspot.com",
  messagingSenderId: "818541525829",
  appId: "1:818541525829:web:3ab495dd8522c31c065c2c",
  measurementId: "G-KEHWBGBTD8",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
