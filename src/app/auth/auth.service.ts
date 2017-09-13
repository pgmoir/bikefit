import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private authState: Observable<firebase.User>;
  currentUser: firebase.User = null;
  // token: string;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.authState = this.afAuth.authState;
    this.authState.subscribe(user => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });
  }

  getAuthState() {
    return this.authState;
  }

  signupUser(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((a: any) => {
        console.log('signup', a);
        this.router.navigate(['/']);
      });
  }

  signinUser(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then((a: any) => {
      console.log('signin', a);
      this.router.navigate(['/']);
    });
  }

  logout() {
    this.afAuth.auth.signOut()
    .then((a: any) => {
      console.log('logout', a);
      this.router.navigate(['/']);
    });
  }

  isLoggedIn() {
    if (this.currentUser == null) {
      return false;
    }
    return true;
  }

  // getIdToken() {
  //   if (firebase.auth().currentUser) {
  //     firebase.auth().currentUser.getIdToken()
  //       .then(
  //         (token: string) => this.token = token
  //       );
  //       return this.token;
  //   }
  //   return undefined;
  // }

  // isAuthenticated() {
  //   return (this.token != null);
  // }

  // // call this just after initialising the application
  // checkForExistingUser() {
  //   const userKey = Object.keys(window.localStorage).filter(it => it.startsWith('firebase:authUser'))[0];
  //   const user = userKey ? JSON.parse(localStorage.getItem(userKey)) : undefined;
  //   if (user) {
  //     this.token = user.stsTokenManager.accessToken;
  //   }
  // }

  // getUserIdentifier() {
  //   const user = firebase.auth().currentUser;
  //   return user ? user.uid : undefined;
  // }

  // getUser() {
  //   return {
  //     token: this.getIdToken(),
  //     uid: this.getUserIdentifier()
  //   };
  // }
}
