// // import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // import initializeApp from "firebase/app";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
    getFirestore,
    collection,
    getDocs,
    getDoc,
    setDoc,
    doc,
} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js'
const firebaseConfig = {
    apiKey: "AIzaSyAxkb4eLYOZgfhgO4PWiir_ini4Y_RHvAE",
    authDomain: "qissa-ae421.firebaseapp.com",
    projectId: "qissa-ae421",
    storageBucket: "qissa-ae421.appspot.com",
    messagingSenderId: "799894845087",
    appId: "1:799894845087:web:9e221f052239aea50254aa",
    measurementId: "G-9FM8B7GRB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const details = collection(db, "anirudhShankar","as1","slot1");
const submit = document.getElementById('submit');
const name = document.getElementById('name');
const rollNumber = document.getElementById('rollNumber');
const branch = document.getElementById('branch');
const batch = document.getElementById('batch');
console.log(submit)
submit.addEventListener('click', (event) => {
    event.preventDefault();

    getDocs(details).then(async (snapshot) => {
        if (snapshot.docs.length > 20) {
            alert("Sorry, the event is full");
        } else {
            if (name.value === "" || rollNumber.value === "" || branch.value === "" || batch.value === "") {
                alert("Please fill all the fields");
            } else {
                // const newListner = doc(db, "gautamNanda", rollNumber);
                const data = {
                    Name: name.value,
                    RollNumber: rollNumber.value,
                    Branch: branch.value,
                    Batch: batch.value,
                };
                await setDoc(doc(db, "anirudhShankar", "as1", "slot1" , rollNumber.value), data);
                alert("Registered Successfully");
                window.location.reload();
            }

        }
    });
})



