import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth} from  "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDP7N-NJ_PbOs41BbX6AgLZrBWdyP-odJU",
    authDomain: "espaza-login-final.firebaseapp.com",
    projectId: "espaza-login-final",
    storageBucket: "espaza-login-final.appspot.com",
    messagingSenderId: "358577580383",
    appId: "1:358577580383:web:af7778db3431aaa2c72eea"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signOutBtn = document.getElementById('sign-out-btn-staff');
signOutBtn.addEventListener('click', () => {
    auth.signOut()
        .then(() => {
            window.location.href = "staff-login.html";
        })
        .catch((error) => {
            console.error("Error signing out:", error);
            alert("An error occurred. Please try again later.");
        });
});
