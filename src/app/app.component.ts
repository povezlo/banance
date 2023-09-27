import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	@ViewChild('sidenav') sidenav: MatSidenav | undefined;

	reason = '';

	close(reason: string) {
		this.reason = reason;
		this.sidenav?.close();
	}
}
