import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "COLOCA_AQUI",
  authDomain: "COLOCA_AQUI",
  projectId: "COLOCA_AQUI",
  storageBucket: "COLOCA_AQUI",
  messagingSenderId: "COLOCA_AQUI",
  appId: "COLOCA_AQUI"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);