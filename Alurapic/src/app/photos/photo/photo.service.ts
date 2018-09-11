import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from 'src/app/photos/photo/photo';
import { HttpParams } from '@angular/common/http/src/params';

const API = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {

    constructor(private http: HttpClient) { }

    listFromUser(userName: string) {

        return this.http.get<Photo[]>(API + '/' + userName + '/photos');
    }

    listFromUserPaginated(userName: string, page: number) {

        const params = new HttpParams().append('page', page.toString());

        return this.http.get<Photo[]>(API + '/' + userName + '/photos', { params });
    }
}