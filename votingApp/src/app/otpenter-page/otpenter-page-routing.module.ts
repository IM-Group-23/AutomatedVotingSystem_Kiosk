import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OTPEnterPagePage } from './otpenter-page.page';

const routes: Routes = [
  {
    path: '',
    component: OTPEnterPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OTPEnterPagePageRoutingModule {}
