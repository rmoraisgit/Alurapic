import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { TokenService } from '../token/token.service';

const URL_API = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
        private tokenService: TokenService
    ) { }

    authenticate(userName: string, password: string) {

        return this.http.post(URL_API + '/user/login', { userName, password }, { observe: 'response' })
            .pipe(tap(response => {
                this.tokenService.setToken(response.headers.get('x-access-token'));
            }));
    }
}