import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoteesPageRoutingModule } from './votees-routing.module';

import { VoteesPage } from './votees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoteesPageRoutingModule
  ],
  declarations: [VoteesPage]
})
export class VoteesPageModule {}
