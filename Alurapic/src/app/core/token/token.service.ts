import { Injectable } from '@angular/core';

const KEY = 'userToken';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    hasToken() {
        return !!this.getToken();
    }

    getToken() {
        return window.localStorage.get(KEY);
    }

    setToken(tokenValue: string) {
        window.localStorage.setItem(KEY, tokenValue);
    }

    removeToken() {
        window.localStorage.removeItem(KEY);
    }
}