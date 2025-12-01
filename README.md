# Firebase + Google OAuth Demo (Plain HTML/CSS/JS)

A simple demonstration of Google authentication and Firestore database using vanilla JavaScript.

**No frameworks. No build process. Just 3 files!**

## 🚀 Want to Use This? → See [QUICK_START.md](QUICK_START.md)

**New users:** The QUICK_START guide will get you running in 10 minutes with YOUR own Firebase project!

## Features

- ✅ Google Sign-In with Firebase Auth
- ✅ Create and view posts with Firestore
- ✅ Real-time database updates
- ✅ Client-side security rules
- ✅ Deploy with one command

## Project Structure

```
public/
  index.html    # Main HTML file (~100 lines)
  styles.css    # All styling (~200 lines)
  app.js        # Firebase logic (~200 lines)
firebase.json   # Firebase hosting config
firestore.rules # Database security rules
.firebaserc     # Firebase project config
```

**Total: ~500 lines of code vs 10,000+ with Next.js!**

## Setup (5 minutes)

### 1. Create Firebase Project

1. Go to https://console.firebase.google.com/
2. Click "Add project"
3. Enter name: `cchackathon` (or anything you want)
4. Disable Google Analytics (optional)
5. Click "Create project"

### 2. Enable Google Authentication

1. In Firebase Console, click **Authentication**
2. Click "Get started"
3. Click "Google" provider
4. Toggle to enable
5. Enter support email
6. Click "Save"

### 3. Create Firestore Database

1. In Firebase Console, click **Firestore Database**
2. Click "Create database"
3. **Start in production mode** (we'll deploy security rules)
4. Choose location (e.g., us-central)
5. Click "Enable"

### 4. Get Your Firebase Config

1. In Firebase Console, click the gear icon ⚙️ → **Project settings**
2. Scroll to "Your apps" section
3. Click the web icon `</>`
4. Register app with nickname (e.g., "Web App")
5. Copy the `firebaseConfig` object

You'll see something like:
```javascript
{
  apiKey: "AIzaSy...",
  authDomain: "cchackathon-479817.firebaseapp.com",
  projectId: "cchackathon-479817",
  storageBucket: "cchackathon-479817.appspot.com",
  messagingSenderId: "626540844706",
  appId: "1:626540844706:web:abc123"
}
```

### 5. Update app.js with Your Config

Open `public/app.js` and replace the `firebaseConfig` object (lines 18-24) with your values:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 6. Deploy to Firebase Hosting

```bash
# Login to Firebase (first time only)
firebase login

# Deploy everything (hosting + rules)
firebase deploy
```

That's it! Your app is now live on Firebase Hosting!

## Local Development

You can test locally using any static file server:

### Option 1: Python
```bash
cd public
python3 -m http.server 8000
```
Open http://localhost:8000

### Option 2: Node.js http-server
```bash
npx http-server public -p 8000
```
Open http://localhost:8000

### Option 3: VS Code Live Server
Install "Live Server" extension and right-click `index.html` → "Open with Live Server"

## How It Works

### Authentication
1. User clicks "Sign in with Google"
2. Firebase Auth shows Google popup
3. User selects account
4. `onAuthStateChanged` listener updates UI

### Database
1. User creates a post
2. JavaScript calls `addDoc()` to Firestore
3. Firestore security rules verify the user
4. Post is saved with user info
5. Posts are loaded with `getDocs()`

### Security
All security is enforced by Firestore rules:
- Only authenticated users can read posts
- Users can only create posts with their own userId
- Users can only edit/delete their own posts

## File Breakdown

### index.html
- Page structure
- Auth UI (sign in/sign out)
- Post creation form
- Posts display area

### styles.css
- Clean, modern styling
- Responsive grid layout
- Tailwind-inspired design
- Mobile-friendly

### app.js
- Firebase SDK imports (from CDN)
- Google authentication
- Firestore CRUD operations
- UI updates
- XSS protection

### firestore.rules
- Security rules for Firestore
- Validates user ownership
- Prevents data tampering

## Cost

**100% FREE** for small apps!

Firebase free tier includes:
- ✅ 50,000 reads/day
- ✅ 20,000 writes/day
- ✅ 10 GB hosting
- ✅ 360 MB/day bandwidth
- ✅ Unlimited authentication

Perfect for demos, learning, and small projects!

## Advantages Over Next.js Version

| Feature | Next.js | Plain HTML/CSS/JS |
|---------|---------|-------------------|
| **Lines of code** | ~10,000 | ~500 |
| **Dependencies** | 433 packages | 0 packages |
| **Build time** | 30-60 seconds | 0 seconds |
| **Bundle size** | ~2 MB | ~100 KB |
| **Learning curve** | High | Low |
| **Debugging** | Complex | Simple |
| **Deploy time** | ~2 minutes | ~10 seconds |
| **Cost** | Free* | Free |

*Vercel free tier has limits on bandwidth and builds

## Customization

### Change Colors
Edit `styles.css` - all colors are defined with hex codes

### Add Features
Just edit `app.js` - it's plain JavaScript!

### Modify Layout
Edit `index.html` - standard HTML structure

### Update Rules
Edit `firestore.rules` and run `firebase deploy --only firestore:rules`

## Debugging

**Check browser console:**
Press F12 → Console tab

**Common issues:**

1. **Firebase config not set**: Update `app.js` with your config
2. **CORS errors**: Make sure you're accessing via http:// not file://
3. **Auth popup blocked**: Allow popups in browser settings
4. **Permission denied**: Check Firestore rules are deployed

## Next Steps

- Add real-time listeners for live updates
- Add post editing/deletion
- Add user profiles
- Add images with Firebase Storage
- Add comments on posts

## Learn More

- [Firebase Docs](https://firebase.google.com/docs)
- [Firestore Guide](https://firebase.google.com/docs/firestore)
- [Firebase Auth Guide](https://firebase.google.com/docs/auth)
- [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## License

MIT - Use this however you want!
