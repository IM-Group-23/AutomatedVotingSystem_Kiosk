import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VotingListPageRoutingModule } from './voting-list-routing.module';

import { VotingListPage } from './voting-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VotingListPageRoutingModule
  ],
  declarations: [VotingListPage]
})
export class VotingListPageModule {}
