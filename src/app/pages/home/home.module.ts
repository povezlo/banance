/* eslint-disable prettier/prettier */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@ui/buttons';

@NgModule({
	declarations: [HomeComponent],
	imports: [CommonModule, RouterModule.forChild([{path: '', component: HomeComponent}]), ButtonModule],
	exports: [HomeComponent],
})
export class HomeModule {}
