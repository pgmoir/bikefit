import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) { }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(
      response => {
        this.login();
      }
    )
    .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.login();
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  private login() {
    this.router.navigate(['/']);
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
}

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
  }

  getIdToken() {
    if (firebase.auth().currentUser) {
      firebase.auth().currentUser.getIdToken()
        .then(
          (token: string) => this.token = token
        );
        return this.token;
    }
    return undefined;
  }

  isAuthenticated() {
    return (this.token != null);
  }

  // call this just after initialising the application
  checkForExistingUser() {
    const userKey = Object.keys(window.localStorage).filter(it => it.startsWith('firebase:authUser'))[0];
    const user = userKey ? JSON.parse(localStorage.getItem(userKey)) : undefined;
    if (user) {
      this.token = user.stsTokenManager.accessToken;
    }
  }

  getUserIdentifier() {
    const user = firebase.auth().currentUser;
    return user ? user.uid : undefined;
  }

  getUser() {
    return {
      token: this.getIdToken(),
      uid: this.getUserIdentifier()
    };
  }
}
