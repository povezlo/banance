import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService, IPlaceholderResponse } from 'src/app/shared/services/api.services';

@Component({
	selector: 'app-di',
	templateUrl: './di.component.html',
	styleUrls: ['./di.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiComponent {
	data$: Observable<IPlaceholderResponse> | null = null;
	constructor(private api: ApiService) {
		// api.getData().subscribe((res) => {
		// 	console.log(res);
		// });
		this.data$ = this.api.getData();
	}

	fetch(id: number) {
		this.api.fetchData(id);
	}
}
