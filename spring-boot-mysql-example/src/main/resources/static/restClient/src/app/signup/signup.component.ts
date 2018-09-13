import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import { Router } from '@angular/router';
import {moveIn,fallIn} from '../router.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations:[moveIn(),fallIn()],
  host:{'[@moveIn]':''}
})
export class SignupComponent implements OnInit {

  constructor(public angularfire:AngularFireAuth,private router:Router) { }

  onSubmit(formData){
    if(formData.valid){
      console.log(formData.value);
      this.angularfire.auth.createUser({
          email:formData.value.email,
          password:formData.value.password
      }).then(
        (success)=>{
          console.log(success);
          this.router.navigate(['/dashboard']);
      }).catch(
        (err)=>{
          console.log(err);
       })
    }
  }

  ngOnInit() {
  }

}
