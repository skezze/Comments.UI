import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService implements OnDestroy {
  private socket: WebSocket | undefined;
  private messageSubject: Subject<string> = new Subject<string>();
  public messages$ = this.messageSubject.asObservable();

  constructor() {
    this.connect();
  }

  private connect() {
    this.socket = new WebSocket('ws://localhost:5000/ws');

    this.socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    this.socket.onmessage = (event) => {
      this.messageSubject.next(event.data);
    };

    this.socket.onclose = () => {
      console.log('WebSocket connection closed');
      setTimeout(() => this.connect(), 1000);
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error', error);
    };
  }

  ngOnDestroy() {
    if (this.socket) {
      this.socket.close();
    }
  }
}
