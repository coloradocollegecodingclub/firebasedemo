# Quick Setup Guide

## 6 Steps to Deploy

### 1. Create Firebase Project

Go to https://console.firebase.google.com/ → "Add project" → Name it (you have: `cchackathon`)

### 2. Enable Google Auth

Firebase Console → **Authentication** → "Get started" → Enable "**Google**" provider

### 3. Create Firestore

Firebase Console → **Firestore Database** → "Create database" → **Production mode** → Choose location

### 4. Get Your Config

Firebase Console → ⚙️ **Project settings** → "Your apps" → Click **`</>`** web icon → Register app

Copy the `firebaseConfig` object.

### 5. Update app.js

Edit `public/app.js` lines 18-24 with your config values.

### 6. Deploy

```bash
firebase login
firebase deploy
```

Done! Your app is live at `https://your-project.web.app`

---

## Test Locally (Optional)

```bash
cd public
python3 -m http.server 8000
```

Open http://localhost:8000

---

See `README.md` for detailed instructions!
