import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommentService } from '../../services/comment.service';
import { UserComment } from '../../models/user-comment';

@Component({
  standalone:true,
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  imports: [ReactiveFormsModule]
})
export class CommentFormComponent {
  commentForm = this.fb.group({
    userName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
    email: ['', [Validators.required, Validators.email]],
    homePage: ['', Validators.pattern('^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$')],
    captcha: ['', Validators.required],
    text: ['', [Validators.required, this.htmlTagsValidator]]
  });

  constructor(private fb: FormBuilder, private commentService: CommentService) {}

  onSubmit() {
    if (this.commentForm.valid) {
      const newComment  = this.commentForm.value;
      this.commentService.addComment(newComment as UserComment).subscribe(() => {
        console.log('Комментарий добавлен:', newComment);
      });
    }
  }

  htmlTagsValidator(control: FormControl): { [key: string]: boolean } | null {
    const allowedTags = /<a href=".*" title=".*">|<\/a>|<code>|<\/code>|<i>|<\/i>|<strong>|<\/strong>/g;
    const value = control.value as string;
    const isValid = value.match(allowedTags);
    return isValid ? null : { invalidHtml: true };
  }
}
