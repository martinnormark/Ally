import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivityOverviewComponent } from './pages/activity-overview/activity-overview.component';

const routes: Routes = [
	{ path: '', component: ActivityOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }
