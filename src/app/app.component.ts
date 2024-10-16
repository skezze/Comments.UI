import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommentsListComponent } from "./components/comments-list/comments-list.component";
import { CommentFormComponent } from "./components/comment-form/comment-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommentsListComponent, CommentFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Comments.UI';
}
