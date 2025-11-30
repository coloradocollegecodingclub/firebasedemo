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
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAskVOutWGBZeGXGcEdqgF2DOlTDcfJPeA",
  authDomain: "cchackathon-b8850.firebaseapp.com",
  projectId: "cchackathon-b8850",
  storageBucket: "cchackathon-b8850.firebasestorage.app",
  messagingSenderId: "440249067262",
  appId: "1:440249067262:web:c9089e76fd9ab71d5da7af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// UI Elements
const loading = document.getElementById('loading');
const mainContent = document.getElementById('main-content');
const messageDiv = document.getElementById('message');
const authSection = document.getElementById('auth-section');
const userSection = document.getElementById('user-section');
const postsSection = document.getElementById('posts-section');
const signInBtn = document.getElementById('sign-in-btn');
const signOutBtn = document.getElementById('sign-out-btn');
const createPostForm = document.getElementById('create-post-form');
const postsContainer = document.getElementById('posts-container');
const postsCount = document.getElementById('posts-count');
const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');

// Show/hide message
function showMessage(text, type = 'info') {
  messageDiv.textContent = text;
  messageDiv.className = `message ${type}`;
  messageDiv.classList.remove('hidden');

  setTimeout(() => {
    messageDiv.classList.add('hidden');
  }, 5000);
}

// Sign in with Google
async function handleSignIn() {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    showMessage('Signed in successfully!', 'success');
  } catch (error) {
    console.error('Sign in error:', error);
    showMessage(`Error: ${error.message}`, 'error');
  }
}

// Sign out
async function handleSignOut() {
  try {
    await signOut(auth);
    showMessage('Signed out successfully', 'success');
  } catch (error) {
    console.error('Sign out error:', error);
    showMessage(`Error: ${error.message}`, 'error');
  }
}

// Create post
async function handleCreatePost(e) {
  e.preventDefault();

  const title = document.getElementById('post-title').value;
  const content = document.getElementById('post-content').value;

  if (!auth.currentUser) {
    showMessage('Please sign in to create a post', 'error');
    return;
  }

  try {
    await addDoc(collection(db, 'posts'), {
      userId: auth.currentUser.uid,
      userName: auth.currentUser.displayName,
      userEmail: auth.currentUser.email,
      title,
      content,
      createdAt: serverTimestamp()
    });

    showMessage('Post created successfully!', 'success');
    createPostForm.reset();
    await loadPosts();
  } catch (error) {
    console.error('Error creating post:', error);
    showMessage(`Error: ${error.message}`, 'error');
  }
}

// Load posts
async function loadPosts() {
  try {
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);

    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() });
    });

    displayPosts(posts);
  } catch (error) {
    console.error('Error loading posts:', error);
    showMessage(`Error loading posts: ${error.message}`, 'error');
  }
}

// Display posts
function displayPosts(posts) {
  postsCount.textContent = posts.length;

  if (posts.length === 0) {
    postsContainer.innerHTML = '<p class="no-posts">No posts yet. Be the first to post!</p>';
    return;
  }

  postsContainer.innerHTML = posts.map(post => `
    <div class="post">
      <h3 class="post-title">${escapeHtml(post.title)}</h3>
      <p class="post-content">${escapeHtml(post.content)}</p>
      <div class="post-meta">
        <p>By: ${escapeHtml(post.userName)} (${escapeHtml(post.userEmail)})</p>
        <p>Posted: ${post.createdAt ? new Date(post.createdAt.toDate()).toLocaleString() : 'Just now'}</p>
      </div>
    </div>
  `).join('');
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Update UI based on auth state
function updateUI(user) {
  if (user) {
    // User is signed in
    authSection.classList.add('hidden');
    userSection.classList.remove('hidden');
    postsSection.classList.remove('hidden');
    userName.textContent = user.displayName;
    userEmail.textContent = user.email;
    loadPosts();
  } else {
    // User is signed out
    authSection.classList.remove('hidden');
    userSection.classList.add('hidden');
    postsSection.classList.add('hidden');
    postsContainer.innerHTML = '';
  }
}

// Listen for auth state changes
onAuthStateChanged(auth, (user) => {
  loading.classList.add('hidden');
  mainContent.classList.remove('hidden');
  updateUI(user);
});

// Event listeners
signInBtn.addEventListener('click', handleSignIn);
signOutBtn.addEventListener('click', handleSignOut);
createPostForm.addEventListener('submit', handleCreatePost);
