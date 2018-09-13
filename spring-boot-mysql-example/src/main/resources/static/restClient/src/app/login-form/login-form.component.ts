import { Component, OnInit,HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { UserloginService } from '../userlogin.service';
import { AngularFire,AuthProviders,AuthMethods} from 'angularfire2';
import {moveIn} from '../router.animations';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  animations:[moveIn()],
  host:{'[@moveIn]':''}
})
export class LoginFormComponent implements OnInit {

  error:any;
  constructor(private router:Router,private userlogin:UserloginService,public angularfire:AngularFire) {
      
    this.angularfire.auth.subscribe(auth=>{
      if(auth){
        this.router.navigateByUrl('/dashboard');
      }
    });

   }

  ngOnInit() {
  }

  loginUser(e){
    e.preventDefault();
    var username=e.target.elements[0].value;
    var password=e.target.elements[1].value;
    console.log(username,password);
    if(username=="admin" && password=="admin"){
      this.userlogin.setUserLoggedIn();
      this.router.navigate(['dashboard']);

    }

  }

  loginGoogle(){
    this.angularfire.auth.login({
      provider:AuthProviders.Google,
      method:AuthMethods.Popup,
      }).then(
      (success)=>{
        this.router.navigate(['/dashboard']);

      }).catch(
        (err)=>{
           this.error=err;
       })
  }

}
