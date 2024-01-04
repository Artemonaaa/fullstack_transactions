import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  userData: FormGroup
  
  constructor() {
    this.userData = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit() {
    if(this.userData.valid) {
      console.log(this.userData.value)
    } else {
      console.log("Bruh")
    }
  }
}
