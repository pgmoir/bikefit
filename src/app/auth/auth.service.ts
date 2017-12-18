import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable, OnDestroy } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService implements OnDestroy {
  private userSubscription: Subscription;

  authenticated = false;
  displayName: string;
  email: string;
  uid: string;
  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
    this.userSubscription = this.user.subscribe(
      (auth) => {
        // console.log('authService', auth);
        if (auth == null) {
          this.authenticated = false;
        } else {
          this.displayName = auth.displayName;
          this.email = auth.email;
          this.uid = auth.uid;
          this.authenticated = true;
        }
      }
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
    // console.log('authService destroy');
  }
}
