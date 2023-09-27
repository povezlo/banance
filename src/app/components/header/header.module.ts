import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { ButtonsModule } from '@ui/buttons';
import { HeaderComponent } from './header.component';

@NgModule({
	declarations: [HeaderComponent],
	imports: [CommonModule, MatToolbarModule, ButtonsModule, MatIconModule],
	exports: [HeaderComponent],
})
export class HeaderModule {}
