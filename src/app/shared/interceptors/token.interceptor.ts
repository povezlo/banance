import { Injectable, Inject } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { API_KEY } from '../injectTokens/injectTokens';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
	constructor(@Inject(API_KEY) private readonly apiKey: string) {}

	intercept(request: HttpRequest<HttpHeaders>, next: HttpHandler) {
		request = request.clone({
			setParams: {
				apiKey: this.apiKey,
			},
		});

		return next.handle(request);
	}
}
