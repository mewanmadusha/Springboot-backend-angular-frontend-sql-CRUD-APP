import { UsersService } from './shared_service/users.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import{HttpModule} from '@angular/http';
import{FormsModule} from '@angular/forms';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component'; 
import { UserloginService } from './userlogin.service';
import { AuthguardGuard } from './authguard.guard';
import {AngularFireModule} from 'angularfire2';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDX9mot_FbxjutK55EedpIKKHFM_GQTm_U",
    authDomain: "firstproject-d0b53.firebaseapp.com",
    databaseURL: "https://firstproject-d0b53.firebaseio.com",
    projectId: "firstproject-d0b53",
    storageBucket: "firstproject-d0b53.appspot.com",
    messagingSenderId: "982256236781"
};

const appRoutes:Routes=[
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginFormComponent},
  {path:'signup',component:SignupComponent},
  { path: 'login-email', component: EmailComponent },
  {path:'dashboard',canActivate:[AuthguardGuard],component:ListuserComponent},
  {path:'edit',canActivate:[AuthguardGuard],component:UserFormComponent}
]
export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
@NgModule({
  declarations: [
    AppComponent,
    ListuserComponent,
    UserFormComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    SignupComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [UserloginService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
