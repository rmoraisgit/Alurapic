import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Subject } from 'rxjs';

import * as jwt_decode from 'jwt-decode';
import { User } from './user';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    userSubject = new Subject<User>();

    constructor(private tokenService: TokenService) { }

    setToken(tokenValue: string) {
        this.tokenService.setToken(tokenValue);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    decodeAndNotify() {
        const tokenValue = this.tokenService.getToken();
        const user = jwt_decode.decode(tokenValue);
        this.userSubject.next(user);
    }
}