import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StyleManager } from 'src/app/shared/services/style-manager.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	isDark = this.styleManager.isDark;

	constructor(private styleManager: StyleManager) {}

	toggleDarkTheme() {
		this.styleManager.toggleDarkTheme();
		this.isDark = !this.isDark;
	}
}
