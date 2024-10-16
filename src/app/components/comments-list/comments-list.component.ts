// src/app/comments-list/comments-list.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserComment } from   '../../models/user-comment';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { API_URLS } from '../../configuration/urls';
import { CommentFormComponent } from "../comment-form/comment-form.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css'],
  standalone: true,
  imports: [DatePipe, NgIf, NgFor, CommentFormComponent, HttpClientModule]
})
export class CommentsListComponent implements OnInit, OnDestroy {
  comments: UserComment[] = [];
  private websocket: WebSocket|null=null;

  constructor() {}

  ngOnInit() {
    this.connectWebSocket();
  }

  connectWebSocket() {
    this.websocket = new WebSocket(API_URLS.commentsws);

    this.websocket.onopen = () => {
      console.log('Connected to the WebSocket server');
    };

    this.websocket.onmessage = (event: MessageEvent) => {
      const comment1:any = JSON.parse(event.data);
      const comment:UserComment = {
        id: comment1.Id,
        text: comment1.Text,
        dateAdded: comment1.DateAdded,
        userid: comment1.Userid,
        user: {
          id: comment1.User.Id, 
          userName: comment1.User.UserName,
          email: comment1.User.Email
        }
                
      }
      console.log(comment);
    
      // Проверка, чтобы убедиться, что объект comment и его свойства определены
      if (comment && comment.user && comment.user.userName) {
        this.comments.push(comment);
      } else {
        console.warn('Получен некорректный комментарий:', comment);
      }
    };
    

    this.websocket.onclose = () => {
      console.log('Disconnected from the WebSocket server');
    };

    this.websocket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }

  ngOnDestroy() {
    if (this.websocket) {
      this.websocket.close(); // Закрываем соединение при уничтожении компонента
    }
  }
}
