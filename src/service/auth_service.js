import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
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
