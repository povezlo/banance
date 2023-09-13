import { ChangeDetectionStrategy, Component, Directive, ElementRef, Renderer2 } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Directive({
	selector: '[appColor]',
})
export class HighlightDirective {
	constructor(
		el: ElementRef,
		private renderer: Renderer2,
	) {
		renderer.addClass(el.nativeElement, 'bI');
	}
}

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
