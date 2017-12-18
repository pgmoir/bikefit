import { environment } from './../environments/environment';
import { CoreModule } from './core/core.module';
import { NgModule, PipeTransform } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { DateControlComponent } from './common/date-control/date-control.component';
import { WheelSizeComponent } from './common/wheel-size/wheel-size.component';
import { KitComponent } from './kit/kit.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

import { BasicHighlightDirective } from './shared/directives/basic-hightlight.directive';
import { BetterHighlightDirective } from './shared/directives/better-hightlight.directive';
import { AnotherHighlightDirective } from './shared/directives/another-highlight.directive';
import { FourthHighlightDirective } from './shared/directives/fourth-highlight.directive';
import { UnlessDirective } from './shared/directives/unless.directive';

import { AppComponent } from './app.component';

import { LoginComponent } from './auth/login/login.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginEmailComponent } from './auth/login-email/login-email.component';
import { RegisterEmailComponent } from './auth/register-email/register-email.component';


@NgModule({
  declarations: [
    AppComponent,
    DateControlComponent,
    WheelSizeComponent,
    KitComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    AnotherHighlightDirective,
    FourthHighlightDirective,
    UnlessDirective,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    LoginEmailComponent,
    RegisterEmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'youthgearcheck'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AuthRoutingModule
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
