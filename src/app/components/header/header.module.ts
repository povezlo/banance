import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent, HighlightDirective } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonDirective } from 'src/app/shared/directives/button.directive';

@NgModule({
	declarations: [HeaderComponent, HighlightDirective],
	imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
	exports: [HeaderComponent],
})
export class HeaderModule {}
