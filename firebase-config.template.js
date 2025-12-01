// ========================================
// FIREBASE CONFIGURATION TEMPLATE
// ========================================
//
// INSTRUCTIONS:
// 1. Copy this file to public/app.js (replace the existing config)
// 2. Get your Firebase config from:
//    https://console.firebase.google.com/project/YOUR_PROJECT/settings/general
// 3. Scroll to "Your apps" → Click web icon </> → Copy the config
// 4. Replace the values below with YOUR actual Firebase config
//
// IMPORTANT:
// - These values are PUBLIC and safe to commit to GitHub
// - They identify which Firebase project to use
// - Security is handled by Firebase security rules
// ========================================

// Import Firebase SDK from CDN
import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js';
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js';

// ========================================
// TODO: REPLACE WITH YOUR FIREBASE CONFIG
// ========================================
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",                        // e.g., "AIzaSyAskVOutWGBZeGXGcEdqgF2DOlTDcfJPeA"
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",      // e.g., "my-project.firebaseapp.com"
  projectId: "YOUR_PROJECT_ID",                       // e.g., "my-project"
  storageBucket: "YOUR_PROJECT_ID.firebasestorage.app", // e.g., "my-project.firebasestorage.app"
  messagingSenderId: "YOUR_SENDER_ID",                // e.g., "123456789012"
  appId: "YOUR_APP_ID"                                // e.g., "1:123456789012:web:abc123def456"
};
// ========================================

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ... rest of the code remains the same ...
