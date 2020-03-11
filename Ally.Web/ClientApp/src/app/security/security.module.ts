import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallbackComponent } from './pages/callback/callback.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SecurityRoutingModule } from './security-routing.module';

@NgModule({
	declarations: [CallbackComponent, ProfileComponent],
	imports: [
		CommonModule,
		SecurityRoutingModule
	]
})
export class SecurityModule { }
