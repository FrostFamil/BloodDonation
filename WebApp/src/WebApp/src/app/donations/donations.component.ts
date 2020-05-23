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
  donations = [];

  constructor(
              private requests: RequestsService,
              private auth: AuthenticationService) { }

  ngOnInit() {
    this.onFetchSpecificRequests();
  }

  onFetchSpecificRequests() {
    this.creator = this.auth.userId;
    const userId = localStorage.getItem('userId');
    // console.log('creator ', userId);
    this.requests.fetchSpecificRequests(userId)
      .subscribe(response => {
        if (response.status === 200) {
          this.donations = response.body.requests;
          // console.log('response ', response.body.requests);
        }
      });
  }

  onDelete(id) {
    if (this.donations.length > 0) {
      this.requests.deleteRequest(id).subscribe(res => {
        if (res.status === 200) {
          this.onFetchSpecificRequests();
          // console.log('donations ', this.donations);
        }
      });
    }
  }

  onFinish(id) {
    console.log(id);
    this.requests.finishPoints(id).subscribe(
      res => {
        if (res.status === 200) {
          // console.log('finished', res);
          this.onDelete(id);
        }
      }
    );
  }

  onCancel(id) {
    const creator = localStorage.getItem('userId');
    console.log('creator ', creator);
    this.requests.cancelRequest(creator, id).subscribe(res => {
      if (res.message) {
        this.onFetchSpecificRequests();
        // console.log('oncancel ', res);
      }
    });
  }

}
