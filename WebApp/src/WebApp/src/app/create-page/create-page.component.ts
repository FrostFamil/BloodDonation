import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestsService } from '../services/requests.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  constructor(
              private formBuilder: FormBuilder,
              private router: Router,
              private requestsService: RequestsService,
              private authService: AuthenticationService) { }

  public additionForm = this.formBuilder.group({
    hospitalName: ['', Validators.required],
    firstName: [ '', Validators.required ],
    lastName: [ '', Validators.required ],
    gender: [ '', Validators.required ],
    age: [ '', Validators.required ],
    bloodType: [ '', Validators.required ]
  });

  ngOnInit() {
  }

  onAddition() {
    if (this.additionForm.valid) {
      this.requestsService.postRequest(
        // this.authService.getUserId(),
        // this.authService.getUserId(),
        localStorage.getItem('userId'),
        localStorage.getItem('userId'),
        this.additionForm.value.hospitalName,
        this.additionForm.value.firstName,
        this.additionForm.value.lastName,
        this.additionForm.value.gender,
        this.additionForm.value.age,
        this.additionForm.value.bloodType
      );
      // this.router.navigate(['/donations']);
    }
    this.additionForm.reset();
  }

}
