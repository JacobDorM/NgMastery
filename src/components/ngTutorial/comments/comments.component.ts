import { Component, inject } from '@angular/core';
import { CommentsService } from '../../../service/ngTutorial/comments.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { Observable } from 'rxjs';

interface Comment {
  name: string;
  email: string;
  body: string;
}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  standalone: true,
  imports: [AsyncPipe, NgFor],
})
export class CommentsComponent {
  private commentsService = inject(CommentsService);
  comments$: Observable<Comment[]> = this.commentsService.getComments();
  loading$ = this.commentsService.loading$;
}
