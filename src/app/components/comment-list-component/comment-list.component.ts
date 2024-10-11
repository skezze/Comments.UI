import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { FilePreviewComponent } from "../file-preview/file-preview.component";
import { DatePipe, NgFor } from '@angular/common';
import { UserComment } from '../../models/user-comment';

@Component({
  standalone: true,
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  imports: [FilePreviewComponent, DatePipe, NgFor]
})
export class CommentListComponent implements OnInit {
  comments: UserComment[] = [];
  sortedComments: UserComment[] = [];
  currentPage = 1;
  itemsPerPage = 25;

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.commentService.getComments().subscribe(data => {
      this.comments = data;
      this.sortComments('dateAdded');
    });
  }

  sortComments(field: 'userName' | 'email' | 'dateAdded') {
    this.sortedComments = [...this.comments].sort((a, b) =>
      a[field] < b[field] ? 1 : -1
    );
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }
}
