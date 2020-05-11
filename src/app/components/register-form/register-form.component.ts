import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';

export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  errorState: number = 0
  isLoading: boolean = false
  hide

  usernameFormControl = new FormControl('',[
    Validators.required,
    Validators.minLength(5)
  ])
  emailFormControl = new FormControl('',[
    Validators.required,
    Validators.email,
  ])

  passwordFormControl = new FormControl('',[
    Validators.required
  ])

  matcher = new CustomErrorStateMatcher()

  constructor(
    public db: FirebaseService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  validateCredentials(){
    var email = this.emailFormControl.value
    var username = this.usernameFormControl.value
    var password = this.passwordFormControl.value
    this.isLoading = true
    this.db.getUserByEmail(email).subscribe(res=>{
      if(!res[0]){
        this.db.getUserByUsername(username).subscribe(result=>{
          if(!result[0]){
            this.doRegister(email, username, password)
            this.errorState = 0
          }else{
            this.isLoading = false
            this.errorState = 1
          }
        })
      }else{
        this.isLoading = false
        this.errorState = 2
      }
    })
  }

  doRegister(email: string, username: string, password: string){
    this.db.registerUser(email, username, password).then(()=>{
      alert("Register Success")
      this.isLoading = false
      localStorage.setItem("username", username)
      this.router.navigate(['./'])
    })
  }

}
