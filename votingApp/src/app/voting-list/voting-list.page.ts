import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpServiceService } from '../services/http-service.service';
import { NavController } from '@ionic/angular';
import { ContestDTO } from '../DTO/contestDTO';

@Component({
  selector: 'app-voting-list',
  templateUrl: './voting-list.page.html',
  styleUrls: ['./voting-list.page.scss'],
})

export class VotingListPage  {

  // tslint:disable-next-line: max-line-length
  constructor(public alertController: AlertController, public navCtrl: NavController, public router: Router, public httpService: HttpServiceService) {}
  newCadidates: ContestDTO[] = [];

  parties = ['assets/image/podujana.jpg','assets/image/hansayablack.png','assets/image/chair.png','assets/image/unpblack.jpg'];

  // async  ngOnInit() {
    ngOnInit() {
    //  await  this.httpService.getCandidates().subscribe(res => {
    //    console.log('Candidate list');
    //    console.log(res);
    //    this.newCadidates = res;

       
    //  }, err => {
    //    console.log('Error in receiving Candidates list');
    //   });


    //  for(var index in this.newCadidates){
    //    if(this.newCadidates[index].party === 'SLPP'){
    //      this.newCadidates[index].img = this.parties[0];
    //    } else if (this.newCadidates[index].party === 'UPFA'){
    //     this.newCadidates[index].img = this.parties[1];
    //    }else if (this.newCadidates[index].party === 'SLFP'){
    //     this.newCadidates[index].img = this.parties[2];
    //    }else if (this.newCadidates[index].party === 'UNP'){
    //     this.newCadidates[index].img = this.parties[3];
    //    } else {
    //     this.newCadidates[index].img = this.parties[3];
    //    }
    // }

}


  // candidate = [{nameE: 'Gotabhaya Rajapaksha', nameS: 'ගෝඨාභය රාජපක්ෂ',party : 'SLPP', src:'assets/image/podujana.jpg' },
  //           {nameE: 'Sajith Premadasa', nameS: 'සජිත් ප්‍රේමදාස', party: 'UPFA', src:'assets/image/hansayablack.png'},
  //           {nameE: 'Maithripala Sirisena', nameS: 'මෛත්‍රීපාල සිරිසේන', party :'SLFP',src :'assets/image/chair.png'},
  //           {nameE: 'Ranil Wickramasingha', nameS: 'රනිල් වික්‍රමසිංහ', party: 'UNP', src : 'assets/image/unpblack.jpg'}
  //         ];

  candidate = [{nameE: 'Rinil Wijesinghe', party : 'UNP', src:'assets/image/unp.png' },
  {nameE: 'Mehinda Rajawickrama', party: 'UPFA', src:'assets/image/podujana.jpg'}
];


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    });

    await alert.present();
  }

  async presentAlertConfirm(candidate_name: string) {
    const alert = await this.alertController.create({
      header: 'ඔබේ තේරීම තහවුරු කරන්න',
      message: 'Confirm your Choice',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            this.httpService.voteSubmited(sessionStorage.getItem('nic'), candidate_name);
              this.router.navigate(['/home']);
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertRadio() {
    const alert = await this.alertController.create({
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Radio 5',
          value: 'value5'
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertCheckbox() {
    const alert = await this.alertController.create({
      header: 'Checkbox',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Checkbox 1',
          value: 'value1',
          checked: true
        },

        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Checkbox 2',
          value: 'value2'
        },

        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Checkbox 3',
          value: 'value3'
        },

        {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'Checkbox 4',
          value: 'value4'
        },

        {
          name: 'checkbox5',
          type: 'checkbox',
          label: 'Checkbox 5',
          value: 'value5'
        },

        {
          name: 'checkbox6',
          type: 'checkbox',
          label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

}
