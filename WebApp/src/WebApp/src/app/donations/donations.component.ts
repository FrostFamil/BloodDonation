import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss']
})
export class DonationsComponent implements OnInit {
  creator = '';

  constructor(
              private requests: RequestsService,
              private auth: AuthenticationService) { }

  ngOnInit() {
    // this.onFetchSpecificRequests();
  }

  onFetchSpecificRequests() {
    this.creator = this.auth.userId;
    const userId = localStorage.getItem('userId');
    console.log('creator ', userId);
    this.requests.fetchSpecificRequests(userId)
      .subscribe(response => {
        console.log('response ', response.body.requests);
      });
    // this.requests.fetchAllRequests()
    //   .subscribe(res => {
    //     console.log('all requests ', res);
    //   });
  }

}
