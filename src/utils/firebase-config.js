import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBUuKhktrAlaUTSaXg4a2wBWT_XfJfGemU",
  authDomain: "netflix-project-e0c86.firebaseapp.com",
  projectId: "netflix-project-e0c86",
  storageBucket: "netflix-project-e0c86.appspot.com",
  messagingSenderId: "993432287743",
  appId: "1:993432287743:web:e57ccae61b3740696f4fca",
  measurementId: "G-MW2TG8D1KJ"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)