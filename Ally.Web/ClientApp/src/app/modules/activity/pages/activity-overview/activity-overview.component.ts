import { Component, OnInit } from '@angular/core';
import { ActivityApiService } from '../../../activity/services/activity-api.service';
import { ActivityModel } from '../../../activity/models/activity.model';

@Component({
  selector: 'app-activity-overview',
  templateUrl: './activity-overview.component.html',
  styleUrls: ['./activity-overview.component.scss']
})
export class ActivityOverviewComponent implements OnInit {

	workLog: ActivityModel[]

	constructor(private api: ActivityApiService) { }

	ngOnInit() {
		this.api.getActivityLog()
			.subscribe(
				res => this.workLog = res,
				err => console.error(err)
			);
	}

}
