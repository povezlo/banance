import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, Subject, of, share, shareReplay, switchMap, tap } from 'rxjs';
import { BASE_URL } from '../injectTokens/injectTokens';

export interface IHttpParams {
	[key: string]: string | number | boolean;
}

export interface IPlaceholderResponse {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
	private placeholderSubject$ = new BehaviorSubject<number>(1);
	private readonly _cacheContent = new Map<string, Observable<IPlaceholderResponse>>();

	constructor(
		@Inject(BASE_URL) private readonly baseUrl: string,
		private http: HttpClient,
	) {}

	get<T>(path: string, params?: IHttpParams): Observable<T> {
		const url = `${this.baseUrl}/${path}`;
		let httpParams: HttpParams;

		if (params) {
			httpParams = new HttpParams();
			Object.keys(params).forEach(function (key) {
				httpParams.append(key, params[key]);
			});
		}

		return this.http.get<T>(url, { params });
	}

	fetchData(param: number): void {
		this.placeholderSubject$.next(param);
	}

	getData(): Observable<IPlaceholderResponse> {
		return this.placeholderSubject$.asObservable().pipe(switchMap((id) => this.getContent(String(id))));
	}

	getContent(id: string): Observable<IPlaceholderResponse> {
		if (!this._cacheContent.get(id)) {
			this._cacheContent.set(
				id,
				this.http
					.get<IPlaceholderResponse>(`https://jsonplaceholder.typicode.com/todos/${decodeURIComponent(id)}`)
					.pipe(shareReplay(1)),
			);
		}
		return this._cacheContent.get(id) ?? EMPTY;
	}
}
