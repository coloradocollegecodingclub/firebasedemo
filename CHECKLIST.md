# Setup Checklist ✅

Use this checklist when setting up the project with your own Firebase account.

## Firebase Console Setup

- [ ] **Create Firebase Project**
  - Go to https://console.firebase.google.com/
  - Click "Add project"
  - Name your project
  - Note your project ID

- [ ] **Enable Google Authentication**
  - Firebase Console → Authentication
  - Click "Get started"
  - Enable "Google" provider
  - Enter support email

- [ ] **Create Firestore Database**
  - Firebase Console → Firestore Database
  - Click "Create database"
  - Choose "Production mode"
  - Select location

- [ ] **Register Web App**
  - Firebase Console → Project Settings
  - Scroll to "Your apps"
  - Click web icon `</>`
  - Register app
  - Copy the firebaseConfig

## Code Updates

- [ ] **Update `public/app.js`**
  - Open file in editor
  - Find `firebaseConfig` (line ~31)
  - Replace ALL values with yours:
    - [ ] apiKey
    - [ ] authDomain
    - [ ] projectId
    - [ ] storageBucket
    - [ ] messagingSenderId
    - [ ] appId

- [ ] **Update `.firebaserc`**
  - Open file in editor
  - Change `"default"` value to YOUR project ID (line 3)
  - Example: `"default": "my-project-123"`

- [ ] **Update `public/index.html` (optional)**
  - Line 17: Change GitHub URL to your repo
  - Or remove the info banner entirely

## Testing

- [ ] **Test Locally**
  ```bash
  cd public
  python3 -m http.server 8000
  ```
  - [ ] Open http://localhost:8000
  - [ ] Click "Sign in with Google"
  - [ ] Create a post
  - [ ] Delete your post

- [ ] **Fix "unauthorized-domain" error** (if it happens)
  - Firebase Console → Authentication → Settings
  - Add `localhost` to Authorized domains

## Deployment

- [ ] **Login to Firebase**
  ```bash
  firebase login
  ```

- [ ] **Deploy**
  ```bash
  firebase deploy
  ```

- [ ] **Add production domain** (if needed)
  - Firebase Console → Authentication → Settings → Authorized domains
  - Add `your-project.web.app`

- [ ] **Test production**
  - Visit https://your-project.web.app
  - Sign in
  - Create/delete posts

## Success! 🎉

Your Firebase app is now live!

## Troubleshooting

**Can't sign in locally?**
- Check that localhost is in Authorized domains
- Make sure you updated the config in app.js

**Permission denied errors?**
- Run: `firebase deploy --only firestore:rules`

**Config not working?**
- Double-check you copied ALL values correctly
- No typos in apiKey, projectId, etc.
- Restart your web server after changes

Need more help? See [QUICK_START.md](QUICK_START.md)
