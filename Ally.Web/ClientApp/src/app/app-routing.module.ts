import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: '',
				children: [
					{ path: '', component: DashboardComponent },
					{ path: 'activity', loadChildren: () => import('./modules/activity/activity.module').then(m => m.ActivityModule) },
					{ path: 'auth', loadChildren: () => import('./security/security.module').then(m => m.SecurityModule) },
					{ path: '404', component: NotFoundComponent },
					{ path: '**', redirectTo: '/404' }
				]
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
