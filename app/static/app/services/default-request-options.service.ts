import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions } from '@angular/http';

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {

	constructor() {
		super();
		this.headers.set('Authorization', `Bearer: ${localStorage.getItem('auth_token')}`);
	}

}

export const requestOptionsProvider = { provide: RequestOptions, useClass: DefaultRequestOptions };
