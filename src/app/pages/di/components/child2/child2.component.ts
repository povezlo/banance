import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, share } from 'rxjs';
import { ApiService, IPlaceholderResponse } from 'src/app/shared/services/api.services';
import { DiServiceTest } from 'src/app/shared/services/di.service';

@Component({
	selector: 'app-child2',
	templateUrl: './child2.component.html',
	styleUrls: ['./child2.component.scss'],
	providers: [
		{
			provide: DiServiceTest,
			useValue: { animal: '🦍' },
		},
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child2Component {
	data$: Observable<IPlaceholderResponse> | null = null;
	constructor(
		public animal: DiServiceTest,
		private api: ApiService,
	) {
		// api.getData().subscribe((res) => {
		// 	console.log(res);
		// });
		this.data$ = this.api.getData();
	}

	fetch(id: number) {
		this.api.fetchData(id);
	}
}
