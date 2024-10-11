import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserComment } from '../models/user-comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private dbUrl = 'http://localhost:3000/comments';

  constructor(private http: HttpClient) {}

  getComments(): Observable<UserComment[]> {
    return this.http.get<UserComment[]>(`${this.dbUrl}`);
  }

  addComment(comment: UserComment): Observable<UserComment> {
    // Здесь нужно имитировать сохранение, так как jsondb не поддерживает POST-запросы напрямую.
    return new Observable(observer => {
      // Простая имитация успешного ответа.
      observer.next(comment);
      observer.complete();
    });
  }
}
