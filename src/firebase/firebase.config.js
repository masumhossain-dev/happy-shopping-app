import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDDUteefe08Kp5a-8BluDGzN4DX0az7Ftc",
    authDomain: "happy-shopping-app.firebaseapp.com",
    projectId: "happy-shopping-app",
    storageBucket: "happy-shopping-app.appspot.com",
    messagingSenderId: "924479586059",
    appId: "1:924479586059:web:9cfdeec854625de7746c0e"
};

const app = initializeApp(firebaseConfig);
export default app;