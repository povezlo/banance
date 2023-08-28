import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EntityDataModule } from '@ngrx/data';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { entityConfig } from './store/entity-metadata';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './pages/home/home.module';

import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment.prod';
import { BASE_URL, API_KEY } from './shared/injectTokens/injectTokens';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';

const MATERIAL_MODULES = [MatButtonModule, MatIconModule, MatGridListModule, MatSidenavModule];
const NGRX_STORE_MODULES = [
	StoreModule.forRoot({}, {}),
	EffectsModule.forRoot([]),
	StoreRouterConnectingModule.forRoot(),
	EntityDataModule.forRoot(entityConfig),
	StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
];
@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		...NGRX_STORE_MODULES,
		...MATERIAL_MODULES,
		HomeModule,
	],
	providers: [
		{
			provide: API_KEY,
			useValue: environment.apiKey,
		},
		{
			provide: BASE_URL,
			useValue: environment.baseURL,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
