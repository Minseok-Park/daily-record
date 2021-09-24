import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

class AuthService {
  constructor(app) {
    this.firebaseApp = app;
    this.auth = getAuth();
  }

  login(providerName) {
    const provider = this.getProvider(providerName);
    return signInWithPopup(this.auth, provider);
  }

  logout() {
    signOut(this.auth);
  }

  onAuthChange(onUserChanged) {
    onAuthStateChanged(this.auth, (user) => {
      onUserChanged(user);
    });
  }

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return new GoogleAuthProvider();
      case "Github":
        return new GithubAuthProvider();
      default:
        throw new Error(`지원하지 않은 providerName : ${providerName}`);
    }
  }
}

export default AuthService;
