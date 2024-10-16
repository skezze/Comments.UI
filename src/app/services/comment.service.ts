import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserComment } from '../models/user-comment';
import { Observable, of } from 'rxjs';
import { API_URLS } from '../configuration/urls';

@Injectable({
    providedIn: 'root',
})
export class CommentService {
    
    constructor(private http: HttpClient) {}

    getComments(): Observable<UserComment[]> {
        return this.http.get<UserComment[]>(API_URLS.comments);
    }

    addComment(comment: UserComment): Observable<UserComment> {
        return this.http.post<UserComment>(API_URLS.comments, comment);
    }
}

