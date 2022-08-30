
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB6VPXg2DxXIZDpoUUyJD0EYa1emDVFjRc",
  authDomain: "dcam-sales-inventory-demo.firebaseapp.com",
  projectId: "dcam-sales-inventory-demo",
  storageBucket: "dcam-sales-inventory-demo.appspot.com",
  messagingSenderId: "398720468038",
  appId: "1:398720468038:web:070397b144f50d528ff647"
};

// init firebase
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

export {db}