import { Users } from './../../users';
import { UsersService } from './../../shared_service/users.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserloginService } from '../../userlogin.service';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { moveIn, fallIn, moveInLeft } from '../../router.animations';


@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
 
})
export class ListuserComponent implements OnInit {
  
  public  users:Users[];
  name: any;
  state: string = '';
  constructor(private _userService:UsersService,private _router:Router,private userlogin:UserloginService,public af: AngularFire) {
    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });
   }

  ngOnInit() {
    this._userService.getUsers().subscribe((users1)=>{
      console.log(users1);
      this.users=users1;
      console.log(this.users);
    },(error)=>{
      console.log(error);
    })
  }
  deleteUser(user){
    this._userService.deleteUsers(user.id).subscribe((data)=>{
        this.users.splice(this.users.indexOf(user),1);

    },(error)=>{
      console.log(error);
    })
  }

  updateUser(user){
    this._userService.setter(user);
    this._router.navigate(['/edit']);

  }
  newUser(){
    let user=new Users();
    this._userService.setter(user);
    this._router.navigate(['/edit']);
    
  }

  logout() {
    this.af.auth.logout();
    console.log('logged out');
    this._router.navigateByUrl('/login');
 }

}
