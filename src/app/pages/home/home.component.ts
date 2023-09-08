import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.services';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
	constructor(private api: ApiService) {}

	ngOnInit(): void {
		this.api.get('recipes/random', {
			limitLicense: true,
			tags: 'salad',
			number: 10,
		});
		//.subscribe(data => console.log(data));
	}
}
