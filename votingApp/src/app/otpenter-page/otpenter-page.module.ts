import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OTPEnterPagePageRoutingModule } from './otpenter-page-routing.module';

import { OTPEnterPagePage } from './otpenter-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OTPEnterPagePageRoutingModule
  ],
  declarations: [OTPEnterPagePage]
})
export class OTPEnterPagePageModule {}
