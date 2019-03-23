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
      .signInWithPopup(provider)
      .catch(err => {
        throw Error(err);
      });
  }
}

export default FirebaseUserRepository;
