import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-email',
  templateUrl: './register-email.component.html',
  styleUrls: ['./register-email.component.css']
})
export class RegisterEmailComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  error: any;

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  register(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((success) => this.router.navigate(['/']))
      .catch((err) => {
        this.error = err;
        this.registerForm.reset();
      });
  }

}
