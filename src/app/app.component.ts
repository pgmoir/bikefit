import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'gear-check';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // this.authService.authState.subscribe(
    //   (user) => this.user = user);
    // firebase.initializeApp({
    //   apiKey: 'AIzaSyDklQWpXJzdt4RRlYEZSF0LXThamRVtrYo',
    //   authDomain: 'youthgearcheck.firebaseapp.com'
    // });
    // this.authService.checkForExistingUser();
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  authenticated() {
    return this.authService.authenticated;
  }
}
