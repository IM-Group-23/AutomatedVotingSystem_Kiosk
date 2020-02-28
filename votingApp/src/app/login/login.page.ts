import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { OTPEnterPagePage } from '../otpenter-page/otpenter-page.page';
import { Router } from '@angular/router';
import { HttpServiceService } from '../services/http-service.service';

import { ElectionService } from './../services/election.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public buttonText = 'Step 1';
  public idNumber = '000000000v';
  public form1 = {userid: ''};

 // constructor(public alertController: AlertController, public navCtrl: NavController, public router: Router , public apiService: ElectionService) { }
  // tslint:disable-next-line: max-line-length
  constructor(public alertController: AlertController, public navCtrl: NavController, public router: Router, private httpService: HttpServiceService) { }

  ngOnInit() {
  }

  // Useless
  public handleFirstNameValue(event) {
      console.log(event);
  }

/********************************************************************************************* */
  // Form Submit
  public processForm(event) {
    console.log(this.form1);
    console.log(this.form1.userid);

    sessionStorage.setItem('nic',this.form1.userid);

    this.httpService.sendNIC(this.form1.userid).subscribe((res) => {
      /* Do something with res*/
      // Successfull
      if (res === 'OTP_SENT') {
        this.router.navigate(['/otpenter-page', { userid: this.form1.userid }]);
        return;
      }

      if (res === 'ALREADY_VOTED') {
        this.showAlreadyVotedAlert();
        return;
      }

      if (res === 'INVALID_NIC') {
        this.showErrorAlert();
        return;
      }

      if (res === 'ERROR_LOGGING_IN') {
       this.showErrorlogin()
       return;
      }

    }, err => {/*do some error*/});



    // Test
    if (this.form1.userid === '0') {
    this.showErrorAlert();
    return;
    }

    // Test
    if(this.form1.userid === '1') {
      this.showAlreadyVotedAlert();
      return;
    }

   // test
    // this.router.navigate(['/otpenter-page', { userid: this.form1.userid }]);




  }

  /*********************************************************************************************** */


// Show eRROR POPUP
  async showErrorAlert() {

  const alert = await this.alertController.create({
    header: 'Unauthorized User',
    message: 'Invalid ID Number. Please Check again.<br /><br />වලංගු ඡන්ද දායකයෙකු නොවේ. නැවත අංකය පරීක්ෂා කරන්න.',
    // buttons: ['OK'],
    animated: true,
    backdropDismiss: true,
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

/**************************************************************************************************************************** */

async showAlreadyVotedAlert() {
  const alert = await this.alertController.create({
    header: 'Already Voted',
    message: 'This user has already voted.<br /><br />ඔබ දැනටමත් ඡන්දය ප්‍රකාශ කර ඇත . නැවත ප්‍රකාශ කළ නොහැක .',
    // buttons: ['OK'],
    animated: true,
    backdropDismiss: true,
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

/*********************************************************************************************************************** */


async showErrorlogin() {

  const alert = await this.alertController.create({
    header: 'Login Error',
    message: '<br /> Login is Unsucessful<br />පිවිසීම අසාර්ථකයි.',
    // buttons: ['OK'],
    animated: true,
    backdropDismiss: true,
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

}
