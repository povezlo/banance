import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DiServiceTest } from 'src/app/shared/services/di.service';

@Component({
	selector: 'app-grandchild',
	templateUrl: './grandchild.component.html',
	styleUrls: ['./grandchild.component.scss'],
	providers: [
		{
			provide: DiServiceTest,
			useValue: { animal: '🐷' },
		},
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrandchildComponent {
	constructor(public animal: DiServiceTest) {}
}
