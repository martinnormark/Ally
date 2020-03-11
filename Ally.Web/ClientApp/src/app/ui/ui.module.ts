import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

import { FeatherModule } from 'angular-feather';
import { Shield, Radio, Grid, Activity, AlertOctagon, CheckCircle, List, User, Users, GitPullRequest } from 'angular-feather/icons';
 
// Select some icons (use an object, not an array)
const icons = {
	Shield,
	Radio,
	Grid,
	Activity,
	AlertOctagon,
	CheckCircle,
	List,
	User,
	Users,
	GitPullRequest
};

@NgModule({
	declarations: [SidebarMenuComponent, BreadcrumbComponent],
	imports: [
		CommonModule,
		RouterModule,
		FeatherModule.pick(icons)
	],
	exports: [
		FeatherModule,
		SidebarMenuComponent,
		BreadcrumbComponent
	]
})
export class UiModule { }
