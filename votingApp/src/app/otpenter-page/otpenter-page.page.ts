import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ElectionService } from '../services/election.service';
import { OTPForm } from '../DTO/otpSendFormDTO';
import { AlertController } from '@ionic/angular';
// import { SmsRetriever } from '@ionic-native/sms-retriever/ngx';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-otpenter-page',
  templateUrl: './otpenter-page.page.html',
  styleUrls: ['./otpenter-page.page.scss'],
})
export class OTPEnterPagePage implements OnInit {

  form1 = {a: '', b: '', c: '', d: '', e: '', f: '' };
  otpNumber: number;
  public userid: string;
  public otpid: number;
  public ff: OTPForm;
  

  constructor(private activatedRoute: ActivatedRoute , private router: Router, public apiService: ElectionService, public alertController: AlertController, public httpService: HttpServiceService) { }

  ngOnInit() {
  this.activatedRoute.paramMap.subscribe(params => {console.log(params.get('userid'));
                                                   this.userid = params.get('userid');
                                                   // tslint:disable-next-line: radix
                                                   this.otpid = parseInt(params.get('otpid')); });



  

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
        this.showSuccessMessage();
        // this.router.navigate(['/votees']);
        return;
      } else {
        // show error msg

      }

    }, err => {
      this.showInvalidOTPMessage();
      return;
    } );



    // test
    if(this.userid === '10') {
      this.router.navigate(['/votees']);
      return;
    }

    this.ff = new OTPForm(this.otpid, this.otpNumber.toString());
    console.log('This is the form details: ' + this.ff._otpid + 'otp: ' + this.ff._otpNumber);

    // set timeout
    setTimeout( function func1() { this.apiService.otpChecker(this.ff).subscribe(res => {
         console.log(res);
      if (res === false) {
         this.showInvalidOTPMessage();
         return;
      } else {
         this.showSuccessMessage();
         return;
      }
}, error => {
console.warn('error occured in otpenter page');
console.warn(error);
}); } , 2000);

    // this.apiService.otpChecker(this.ff).subscribe(res => {
    //                                                  console.log(res);
    //                                                  if (res === false) {
    //                                                     this.showInvalidOTPMessage();
    //                                                     return;
    //                                                  } else {
    //                                                     this.showSuccessMessage();
    //                                                     return;
    //                                                  }
    // }, error => {
    //   console.warn('error occured in otpenter page');
    //   console.warn(error);
    // });   // complete
    
  }

  /**************************************************** */
  // Show Invalid OTP message

  async showInvalidOTPMessage() {
    const alert = await this.alertController.create({
      header: 'Wrong OTP',
      message: 'Entered OTP is Wrong.<br /><br />ඇතුළත් කළ OTP අංකය වැරදි ය .',
      // buttons: ['OK'],
      animated: true,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
            // write codes needs to be run when clicked cancel
          }
        }
    ]
  
  });
  
    await alert.present();
  }

  /****************************************************** */

  // Show Invalid OTP message

  async showSuccessMessage() {
    const alert = await this.alertController.create({
      header: 'You can Vote now',
      message: 'Click "Next" and Select a contestant from the list.<br /><br />තරඟකරුවෙකු තෙරීම සඳහා "Next" බොත්තම ඔබන්න. .',
      // buttons: ['OK'],
      animated: true,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Next',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Show Contestants');
            this.router.navigate(['/voting-list', { otpid: this.otpid }]);
            // write codes needs to be run when clicked cancel
          }
        }
    ]
  
  });
  
    await alert.present();
  }

  /****************************************************** */

  public httpCall() {
    this.apiService.otpChecker(this.ff).subscribe(res => {
      console.log(res);
      if (res === false) {
         this.showInvalidOTPMessage();
         return;
      } else {
         this.showSuccessMessage();
         return;
      }
}, error => {
console.warn('error occured in otpenter page');
console.warn(error);
});   // complete
  }



  /***********************************************
   */

  }
