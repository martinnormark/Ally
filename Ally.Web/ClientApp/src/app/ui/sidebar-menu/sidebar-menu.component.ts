import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/security/auth.service';

@Component({
	selector: 'app-sidebar-menu',
	templateUrl: './sidebar-menu.component.html',
	styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

	constructor(public auth: AuthService) { }

	ngOnInit() {
		this.auth.localAuthSetup();
	}

	protected menuItems = [
		{
			groupName: "Master data",
			items: [
				{ title: "Entities", icon: "grid", route: "/entities" },
				{ title: "Workflows", icon: "git-pull-request", route: "/docs/installation" }
			]
		},
		{
			groupName: "Governance",
			items: [
				{ title: "Approvals", icon: "check-circle", route: "/models/images" },
				{ title: "Ownership", icon: "list", route: "/models/text" }
			]
		},
		{
			groupName: "Monitoring",
			items: [
				{ title: "Audit", icon: "activity", route: "/data/structered" },
				{ title: "Anomaly detection", icon: "alert-octagon", route: "/models/text" }
			]
		},
		{
			groupName: "Permissions",
			items: [
				{ title: "People", icon: "user", route: "/data/images" },
				{ title: "Roles", icon: "users", route: "/data/text" }
			]
		}
	];

}
