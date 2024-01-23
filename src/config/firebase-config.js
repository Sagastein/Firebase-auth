/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBRRfMBpE1tfX47NxoU7TCXd59ExzgQnso",
  authDomain: "saga-29037.firebaseapp.com",
  projectId: "saga-29037",
  storageBucket: "saga-29037.appspot.com",
  messagingSenderId: "472072647857",
  appId: "1:472072647857:web:162f610b146aca5ee09e90",
  measurementId: "G-6H07BBPL0S",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//const analytics = getAnalytics(app);
