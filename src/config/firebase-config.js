/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "your key",
  authDomain: "domain",
  projectId: "id",
  storageBucket: "storage",
  messagingSenderId: "sender id",
  appId: "app id",
  measurementId: "measurement id",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//const analytics = getAnalytics(app);
