import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { OTPEnterPagePage } from '../otpenter-page/otpenter-page.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public buttonText = 'Step 1';
  public idNumber = '000000000v';
  public form1 = {userid: ''};

  constructor(public alertController: AlertController, public navCtrl: NavController, public router: Router) { }

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

    // Test
    if(this.form1.userid === '0') {
    this.showErrorAlert();
    return;
    }

    // Test
    if(this.form1.userid === '1') {
      this.showAlreadyVotedAlert();
      return;
    }


    // Test
    // this.navCtrl.navigateForward('/otpenter-page', {userid: this.form1.userid});
    this.router.navigate(['/otpenter-page', { userid: this.form1.userid }]);

    // send this to service  hhtp ofrm1
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

}
