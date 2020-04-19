import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private authService: AuthenticationService) { }

  public loginForm = this.formBuilder.group({
    email: [ '', Validators.required ],
    password: [ '', Validators.required ],
  });

  ngOnInit() {
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
    }
  }

}
