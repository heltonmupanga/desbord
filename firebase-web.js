// ===============================
// FIREBASE WEB - CORINGA FINANCE
// ===============================

const firebaseConfig = {
  apiKey: "AIzaSyD0A3F-5JkTwr1ewspw0mxFQAZCjmB75MM",
  authDomain: "shelcia-bedc0.firebaseapp.com",
  projectId: "shelcia-bedc0",
  storageBucket: "shelcia-bedc0.firebasestorage.app",
  messagingSenderId: "1005119493894",
  appId: "1:1005119493894:web:2160fe086f593843677087",
  measurementId: "G-5M373W0JMM"
};

// Evita erro caso o ficheiro seja carregado mais de uma vez
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const authFirebase = firebase.auth();

console.log("✅ Firebase Web conectado:", firebaseConfig.projectId);