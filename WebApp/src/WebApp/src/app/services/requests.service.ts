import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  deleteRequest(id: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response',
      body: {
        id
      },
    };
    return this.http.delete(baseUrl + '/api/hospital/deleteRequest/', options as any);
  }

  finishPoints(requestIndex): Observable<any> {
    return this.http.post(baseUrl + '/api/hospital/managePoints', {requestIndex}, {observe: 'response'});
  }

  cancelRequest(creator, requestIndex): Observable<any> {
    const cancelData = {creator, requestIndex}
    return this.http.post(baseUrl + '/api/hospital/cancelRequest', cancelData);
  }
}
