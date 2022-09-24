// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAINCSZcMtYQFdgMNsxk2npa7jyqjurdAQ',
  authDomain: 'netflix-clone-85267.firebaseapp.com',
  projectId: 'netflix-clone-85267',
  storageBucket: 'netflix-clone-85267.appspot.com',
  messagingSenderId: '74492461496',
  appId: '1:74492461496:web:38384e66fc4862d2becf4d',
  measurementId: 'G-WMYNPS3XR7',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
