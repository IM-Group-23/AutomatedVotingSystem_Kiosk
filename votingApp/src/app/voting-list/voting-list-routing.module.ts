import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VotingListPage } from './voting-list.page';

const routes: Routes = [
  {
    path: '',
    component: VotingListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VotingListPageRoutingModule {}
