# Quick Start for New Users

## Get This Running in 10 Minutes! ⚡

### Step 1: Get the Code
```bash
git clone <your-repo-url>
cd verceldemo
```

### Step 2: Create Firebase Project

1. Go to https://console.firebase.google.com/
2. Click **"Add project"**
3. Name it anything (e.g., "my-demo-app")
4. Disable Google Analytics (optional)
5. Click **"Create project"**

### Step 3: Enable Google Sign-In

1. In Firebase Console, click **"Authentication"**
2. Click **"Get started"**
3. Click **"Google"** provider
4. Toggle **Enable**
5. Enter your email
6. Click **"Save"**

### Step 4: Create Database

1. In Firebase Console, click **"Firestore Database"**
2. Click **"Create database"**
3. Choose **"Start in production mode"**
4. Select location (e.g., us-central1)
5. Click **"Enable"**

### Step 5: Get Your Config

1. In Firebase Console, click the **⚙️ gear icon** → **"Project settings"**
2. Scroll to **"Your apps"** section
3. Click the **web icon `</>`**
4. Enter nickname: "Web App"
5. Click **"Register app"**
6. **Copy the `firebaseConfig` object**

It looks like this:
```javascript
{
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.firebasestorage.app",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
}
```

### Step 6: Update Your Code

Open `public/app.js` in your editor.

**Find this section (around line 20):**
```javascript
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  // etc...
};
```

**Replace with YOUR values from Step 5!**

### Step 7: Update Project ID (for deployment)

Open `.firebaserc` and change:
```json
{
  "projects": {
    "default": "YOUR_PROJECT_ID"  // Change this!
  }
}
```

### Step 8: Test Locally

```bash
cd public
python3 -m http.server 8000
```

Open http://localhost:8000

Try signing in with Google!

### Step 9: Deploy to Firebase (Optional)

```bash
firebase login
firebase deploy
```

Your app is now live at `https://your-project.web.app` 🎉

---

## Common Issues

**❌ Error: auth/unauthorized-domain**
- Go to Firebase Console → Authentication → Settings → Authorized domains
- Add your domain (e.g., `your-project.web.app`)

**❌ Error: Firebase app not initialized**
- Check you updated `app.js` with YOUR config
- Restart the web server

**❌ Error: Permission denied**
- Run: `firebase deploy --only firestore:rules`
- This deploys the security rules

---

## What This App Does

✅ Google Sign-In (OAuth)
✅ Create posts
✅ View all posts
✅ Delete your own posts
✅ Real-time database with Firestore

## Tech Stack

- Pure HTML/CSS/JavaScript (no frameworks!)
- Firebase Authentication
- Firestore Database
- Firebase Hosting

## Need Help?

See `README.md` for detailed documentation.
