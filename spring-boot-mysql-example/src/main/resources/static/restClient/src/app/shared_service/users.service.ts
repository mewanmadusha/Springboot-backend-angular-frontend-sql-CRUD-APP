import { Users } from './../users';

import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import{HttpClient} from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseurl:string='http://localhost:8080/rest/users';
  private headers=new Headers({'Content-Type':'application/json'});
  private options =new RequestOptions({headers:this.headers});
  private users:Users;
  constructor(private _http:Http) { }

  getUsers(){
    return this._http.get(this.baseurl+'/all',this.options).pipe(map((response:Response)=>response.json()));
  }
  getUser(id:Number){
    return this._http.get(this.baseurl+'/user/'+id,this.options).pipe(map((response:Response)=>response.json()));
    
  }
  deleteUsers(id:Number){
    return this._http.delete(this.baseurl+'/user/'+id,this.options).pipe(map((response:Response)=>response.json()));
   
  }

  createUsers(users:Users){
    return this._http.post(this.baseurl+'/load',JSON.stringify(users),this.options).pipe(map((response:Response)=>response.json()));
    
  }

  updateUsers(users:Users){
    return this._http.put(this.baseurl+'/userup ',JSON.stringify(users),this.options).pipe(map((response:Response)=>response.json()));
    
  }
  errorHandler(error:Response){
    return (error||"SERVER ERROR");
  }

    setter(users:Users){
      this.users=users;
    }

    getter(){
      return this.users;
    }

}
