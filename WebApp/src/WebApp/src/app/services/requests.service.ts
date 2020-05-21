import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://blood-donation1.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  constructor(private http: HttpClient) {}

  postRequest(creator: string,
              acceptor: string,
              hosp_name: string,
              first_name: string,
              last_name: string,
              gender: string,
              age: string,
              blood_type: string) {
    const requestData = {creator, acceptor, hosp_name, first_name, last_name, gender, age, blood_type};
    console.log('request ', requestData);
    this.http.post(baseUrl + '/api/hospital/createRequest', requestData)
      .subscribe(res => {
        console.log('postRequest ', res);
      });
  }

  fetchSpecificRequests(creator: string): Observable<any> {
    return this.http.post(baseUrl + '/api/hospital/fetchSpecificRequests', {creator},
    {observe: 'response'});
  }

  fetchAllRequests(): Observable<any> {
    return this.http.get(baseUrl + '/api/user/fetchAllRequests',
    {observe: 'response'});
  }
}
