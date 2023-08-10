import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC5-JzwHNKn6O5aVIakIuINGpg16bBbgQE",
    authDomain: "mtech-pomodoro.firebaseapp.com",
    projectId: "mtech-pomodoro",
    storageBucket: "mtech-pomodoro.appspot.com",
    messagingSenderId: "886286480391",
    appId: "1:886286480391:web:50bb2587c8ec2739b226a2",
    measurementId: "G-2HV62DSXQE"
  };

  const app =initializeApp(firebaseConfig);

  export const auth = getAuth(app)