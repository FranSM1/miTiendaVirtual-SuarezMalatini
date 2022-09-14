import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
apiKey: "AIzaSyC9MZNgDmYtKj9jOQs4BojqORLyG0u2-as",
  authDomain: "eltero-pizzas.firebaseapp.com",
  projectId: "eltero-pizzas",
  storageBucket: "eltero-pizzas.appspot.com",
  messagingSenderId: "233937311110",
  appId: "1:233937311110:web:fa9d1ea19cde250c980807",
  measurementId: "G-HLJXES63ZT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);