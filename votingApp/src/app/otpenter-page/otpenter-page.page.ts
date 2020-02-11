import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SmsRetriever } from '@ionic-native/sms-retriever/ngx';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-otpenter-page',
  templateUrl: './otpenter-page.page.html',
  styleUrls: ['./otpenter-page.page.scss'],
})
export class OTPEnterPagePage implements OnInit {

  form1 = {a: '', b: '', c: '', d: '', e: '', f: '' };
  otpNumber: number;
  public userid = '';

  constructor(private activatedRoute: ActivatedRoute , private router: Router , private httpService: HttpServiceService ) { }

  ngOnInit() {
 this.activatedRoute.paramMap.subscribe(params => {console.log(params.get('userid'));
                                                   this.userid = params.get('userid'); });

  

  }

  moveFocus(event, nextElement, previousElement) {
    if (event.keyCode === 8 && previousElement) {
      previousElement.setFocus();
    } else if (event.keyCode >= 48 && event.keyCode <= 57) {
      if (nextElement) {
        nextElement.setFocus();
      }
    } else {
      event.path[0].value = '';
    }

  }

  onSubmit() {
    console.log(this.form1);

    const inserted = this.form1.a + this.form1.b + this.form1.c + this.form1.d + this.form1.e + this.form1.f;
    // tslint:disable-next-line:radix
    console.log(parseInt(inserted));
    // tslint:disable-next-line:radix
    this.otpNumber = parseInt(inserted);




    // Pass this.otpNumber and this.userid to the http service
    this.httpService.sendOTP(inserted).subscribe((res) => {

      if (res === true) {
        this.router.navigate(['/votees']);
        return;
      } else {
        // show error msg
      }
      
    }, err => {} );



    // test
    if(this.userid === '10') {
      this.router.navigate(['/votees']);
      return;
    }
    
    
  }

  
}
