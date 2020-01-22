import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './constants';
import { VoteeValidityDTO } from '../DTO/voteeValidityDTO';
import { OTPForm } from '../DTO/otpSendFormDTO';

@Injectable({
  providedIn: 'root'
})
export class ElectionService {



  constructor( private http: HttpClient) { }

// Check for entered user Id is valid or not
public checkUserValidity(form): Observable<VoteeValidityDTO> {              //  {userid: ''}

  return this.http.post(environment.VOTEE_VALIDITY_URL, form) as Observable<VoteeValidityDTO>;

}

public otpChecker(ob: OTPForm): Observable<boolean> {
  console.log('request sent: ' + ob._otpNumber + "  "+ ob._otpid);

  return this.http.post(environment.OTP_CHECKER, ob) as Observable<boolean>;

}



}
