import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBCjVGhT_n5E-28KI4QQjQnF_QRxp3xroo",
  authDomain: "ott-streamshi.firebaseapp.com",
  projectId: "ott-streamshi",
  storageBucket: "ott-streamshi.appspot.com",
  messagingSenderId: "507174180207",
  appId: "1:507174180207:web:c77f671aeaed68588e449a",
  measurementId: "G-8MY6PCVYVW"
};

const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);

export { firebaseAuth };