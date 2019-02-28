import React, { Component } from 'react';
import firebase from 'firebase/app';

import Header from './components/Header/Header';
import Button from './components/Button/Button';

import './app.scss';

class App extends Component {
  state = { user: null, loading: false };

  githubSignIn = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('repo');
    this.setState({ loading: true });
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(({ user }) => {
        this.setState({ user, loading: false });
      })
      .catch(() => this.setState({ loading: false }));
  };

  renderMain = () => {
    const { user, loading } = this.state;
    if (!user) {
      return (
        <Button
          onClick={this.githubSignIn}
          loading={loading}
          size="medium"
          color="light"
          stl="rounded"
        >
          Sign in with Github
        </Button>
      );
    }
    return <p>Hello {user.displayName}</p>;
  };

  render() {
    return (
      <div className="app">
        <Header />
        <main>{this.renderMain()}</main>
      </div>
    );
  }
}

export default App;
