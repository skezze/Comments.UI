import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommentListComponent } from "../../components/comment-list-component/comment-list.component";
import { FilePreviewComponent } from "../../components/file-preview/file-preview.component";
import { CommentFormComponent } from "../../components/comment-form/comment-form.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule, CommentListComponent, FilePreviewComponent, CommentFormComponent],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

}
