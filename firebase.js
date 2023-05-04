import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFireStore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNPG1eBwZZLvBYkl01aIh6XcIXJr4iHhQ",
  authDomain: "dashboard-2df91.firebaseapp.com",
  projectId: "dashboard-2df91",
  storageBucket: "dashboard-2df91.appspot.com",
  messagingSenderId: "1058099868115",
  appId: "1:1058099868115:web:cba54eb961d7ea3af8bf26",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// export const db = getFireStore(app);
