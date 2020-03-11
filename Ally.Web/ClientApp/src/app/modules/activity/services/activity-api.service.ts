import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

import { ActivityModel } from '../models/activity.model';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ActivityApiService {

	BASE_URI = environment.apiHost;

	constructor(private http: HttpClient) { }

	getActivityLog(): Observable<ActivityModel[]> {
		return this.http.get<ActivityModel[]>(this.BASE_URI + '/activities', {
			responseType: "json"
		});
	}
}
