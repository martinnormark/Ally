import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityOverviewComponent } from './pages/activity-overview/activity-overview.component';

@NgModule({
	declarations: [ActivityOverviewComponent],
	imports: [
		CommonModule,
		ActivityRoutingModule
	]
})
export class ActivityModule { }
