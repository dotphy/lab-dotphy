import firebase from "firebase";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();

export async function getTutorial(ref) {
  const downloadURL = await storage.ref(ref).getDownloadURL();
  const response = await fetch(downloadURL);
  return response.json();
}

export async function getAudio(ref) {
  const downloadURL = await storage.ref(ref).getDownloadURL();
}
