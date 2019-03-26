import UserRepository from './UserRepository';

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
        return user;
      })
      .catch(err => {
        throw Error(err);
      });
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
}

export default FirebaseUserRepository;
