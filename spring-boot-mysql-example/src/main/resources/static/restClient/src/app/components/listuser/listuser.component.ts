import { Users } from './../../users';
import { UsersService } from './../../shared_service/users.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css'],
 
})
export class ListuserComponent implements OnInit {
  public  users:Users[];
  constructor(private _userService:UsersService,private _router:Router) { }

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
    this._router.navigate(['/op']);

  }
  newUser(){
    let user=new Users();
    this._userService.setter(user);
    this._router.navigate(['/op']);
    
  }

}
