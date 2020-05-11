import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  currUser = {
    'username':"",
    'email':"",
    "password":""
  }
  
  constructor() { }
}
