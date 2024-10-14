import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../../services/websocket.service';
import { NgFor } from '@angular/common';
import { DatePipe } from '@angular/common';
import { UserComment } from '../../models/user-comment';

@Component({
  standalone: true,
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  imports:[NgFor, DatePipe]
})
export class CommentListComponent implements OnInit {
  comments: UserComment[] = [];

  constructor(private webSocketService: WebSocketService) { }

  ngOnInit() {
    // Подписка на сообщения WebSocket
    this.webSocketService.messages$.subscribe((message: string) => {
      const comment: UserComment = JSON.parse(message); // Парсинг сообщения в объект Comment
      this.comments.unshift(comment); // Добавляем новый комментарий в начало списка
    });

    // Загружаем существующие комментарии (по вашему API)
    this.loadComments();
  }

  private loadComments() {
    // Здесь можно добавить ваш метод для загрузки существующих комментариев
  }
}
