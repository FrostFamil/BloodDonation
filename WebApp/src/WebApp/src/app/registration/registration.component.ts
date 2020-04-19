import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ConfirmPasswordValidator } from './confirm-password.validator';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthenticationService) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: [ '', Validators.required ],
      password: [ '', Validators.required ],
      confirmPassword: [ '', Validators.required]
    }, { validator: ConfirmPasswordValidator.MatchPassword });
  }

  onRegister() {
    if (this.registrationForm.valid) {
      this.submitted = true;
      this.authService.register(this.registrationForm.value.name, this.registrationForm.value.email, this.registrationForm.value.password);
      this.router.navigate([ '/login' ]);
    }
  }

}
