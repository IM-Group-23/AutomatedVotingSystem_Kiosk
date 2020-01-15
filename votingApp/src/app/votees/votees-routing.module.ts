import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoteesPage } from './votees.page';

const routes: Routes = [
  {
    path: '',
    component: VoteesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoteesPageRoutingModule {}
