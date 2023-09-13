import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { StyleManager } from './shared/services/style-manager.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	@ViewChild('sidenav') sidenav: MatSidenav | undefined;

	reason = '';
	isDark = this.styleManager.isDark;

	constructor(private styleManager: StyleManager) {}

	close(reason: string) {
		this.reason = reason;
		this.sidenav?.close();
	}

	toggleDarkTheme() {
		this.styleManager.toggleDarkTheme();
		this.isDark = !this.isDark;
	}
}
