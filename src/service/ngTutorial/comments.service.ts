import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, delay, finalize, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  constructor(private http: HttpClient) {}

  getComments() {
    this.loadingSubject.next(true);
    return this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/comments')
      .pipe(
        delay(2000),
        tap(() => this.loadingSubject.next(false)),
        finalize(() => this.loadingSubject.next(false))
      );
  }
}
