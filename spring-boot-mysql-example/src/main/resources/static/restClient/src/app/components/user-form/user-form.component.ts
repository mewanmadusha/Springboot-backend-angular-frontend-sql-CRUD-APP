import { Component, OnInit } from '@angular/core';
import { Users } from '../../users';
import {Router} from '@angular/router';
import { UsersService } from './../../shared_service/users.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
 
  private user:Users;

  constructor(private _userService:UsersService,private _router:Router,private _location:Location) { }

  ngOnInit() {
    this.user=this._userService.getter();
  }

  processForm(){
      if(this.user.id==undefined){
        this._userService.createUsers(this.user).subscribe((user)=>{
          console.log(user);
          this._router.navigate(['/']);
        },(error)=>{
          console.log(error);
        });
      }else{
        this._userService.updateUsers(this.user).subscribe((user)=>{
          console.log(user);
          this._router.navigate(['/']);
        },(error)=>{
          console.log(error);
        });
      }
    } 


    back(){
        this._location.back();
    }
}
