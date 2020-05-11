import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn
  currUser
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = false
    this.currUser = localStorage.getItem("username")
    console.log(this.currUser)
    if(this.currUser === "" || this.currUser === null){
      this.isLoggedIn = false
    }else{
      this.isLoggedIn = true
    }
  }

  logout(){
    this.isLoggedIn = false
    this.router.navigate(["./"])
    localStorage.setItem("username", "")
  }

}
