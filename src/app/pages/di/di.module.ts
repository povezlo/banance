import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiComponent } from './di.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { GrandchildComponent } from './components/grandchild/grandchild.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@ui/buttons';

@NgModule({
	declarations: [DiComponent, Child1Component, Child2Component, GrandchildComponent],
	imports: [CommonModule, RouterModule.forChild([{ path: '', component: DiComponent }]), ButtonModule],
	exports: [DiComponent, Child1Component, Child2Component],
})
export class DiModule {}
