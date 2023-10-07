import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home',
	},
	{
		path: 'home',
		loadChildren: () => import('./pages/home').then((m) => m.HomeModule),
	},
	{
		path: 'di',
		loadChildren: () => import('./pages/di/di.module').then((m) => m.DiModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
