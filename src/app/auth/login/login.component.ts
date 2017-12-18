import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: any;

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  loginFacebook() {
    this.error = '';
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((success) => { this.router.navigate(['/']); })
      .catch((err) => this.error = err );
  }

  loginGoogle() {
    this.error = '';
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((success) => { this.router.navigate(['/']); })
      .catch((err) => this.error = err );
  }

}
