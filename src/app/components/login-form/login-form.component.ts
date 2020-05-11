import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';


export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  emailFormControl = new FormControl('',[
    Validators.required,
    Validators.email,
  ])

  passwordFormControl = new FormControl('',[
    Validators.required
  ])

  isUserAvailable: boolean
  isLoading
  userDoc
  hide

  matcher = new CustomErrorStateMatcher()

  constructor(
    public db: FirebaseService
  ) { }

  ngOnInit(): void {

    this.isUserAvailable = true
    this.isLoading = false
  }

  doLogin(){
    var email = this.emailFormControl.value
    var password = this.passwordFormControl.value
    this.isLoading = true
    this.db.getUserByLogin(email,password).subscribe(async res=>{
      this.isLoading = false
      if(res.length > 0){
        this.userDoc = res[0].payload.doc.data()
        this.isUserAvailable = res[0].payload.doc.exists
        console.log(res[0].payload.doc.id)
      }else{
        this.isUserAvailable = false
        console.log("user not found")
      }
    })
  }

}
