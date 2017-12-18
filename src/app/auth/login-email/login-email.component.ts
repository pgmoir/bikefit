import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.css']
})
export class LoginEmailComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  error: any;

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  login(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((success) => this.router.navigate(['/']))
      .catch((err) => {
        this.error = err;
        this.registerForm.reset();
      });
  }

}
