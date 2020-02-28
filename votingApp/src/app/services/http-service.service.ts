import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

// Send the nic to backend
sendNIC(nic: string): Observable<any> {
  const paramss = new HttpParams().set('nic', nic);

  return this.http.post('http://localhost:8080/avs/api/v1/voter/login', '', { params: paramss } );
}

// OTP send
sendOTP( otp: string): Observable<any> {
  const paramss = new HttpParams().set('otp', otp);

  return this.http.post('http://localhost:8080/avs/api/v1/voter/otp-validate', '', { params: paramss } );
}

// Vote Submit
// tslint:disable-next-line: variable-name
voteSubmited( voter_nic: string, candidate_name: string): Observable<any> {
  const paramss = new HttpParams().set('voter_nic', voter_nic  ).set('candidate', candidate_name  );


  return this.http.post('http://localhost:8080/avs/api/v1/voter/vote', '', { params: paramss } );
}

// Get all candidates
getCandidates(): Observable<any> {
  return this.http.get('http://localhost:8080/avs/api/v1/voter/election-candidates');

}



}
