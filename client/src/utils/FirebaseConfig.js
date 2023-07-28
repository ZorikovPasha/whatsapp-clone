import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCnf1y0DGmWORphO41g3M98u8BHOYDwE9o",
  authDomain: "whatsapp-clone-676ed.firebaseapp.com",
  projectId: "whatsapp-clone-676ed",
  storageBucket: "whatsapp-clone-676ed.appspot.com",
  messagingSenderId: "513735966602",
  appId: "1:513735966602:web:da5936c9b3410c76869273",
  measurementId: "G-VTN849W42S"
};
const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app)
