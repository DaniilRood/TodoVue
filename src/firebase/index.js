
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCM2MyC0ZQRx2YH9ih8yLErLREqvQub150",
    authDomain: "app2todolist.firebaseapp.com",
    projectId: "app2todolist",
    storageBucket: "app2todolist.appspot.com",
    messagingSenderId: "615609270216",
    appId: "1:615609270216:web:4fb0ab57ab041f2302cafd",
    measurementId: "G-MN5KNDYDLH"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {
    db
}