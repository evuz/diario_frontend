import UserRepository from './UserRepository';
import User from '../Entities/User';

class FirebaseUserRepository extends UserRepository {
  constructor({ config }) {
    super();
    this.config = config;
  }

  githubLogin() {
    const { firebase } = this.config;
    const provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('repo');
    return firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.NONE)
      .then(() => firebase.auth().signInWithPopup(provider))
      .then(user => {
        this.githubAccessToken = user.credential.accessToken;
        return this.generateUserEntity(user.user);
      })
      .catch(err => {
        throw Error(err);
      });
  }

  logout() {
    const { firebase } = this.config;
    return firebase.auth().signOut();
  }

  getToken() {
    const { firebase } = this.config;
    return firebase
      .auth()
      .currentUser.getIdToken()
      .then(firebaseAccessToken => {
        return {
          firebase: firebaseAccessToken,
          github: this.githubAccessToken,
        };
      });
  }

  generateUserEntity(user) {
    return new User({
      id: user.uid,
      name: user.displayName,
      photoUrl: user.photoURL,
    });
  }
}

export default FirebaseUserRepository;
