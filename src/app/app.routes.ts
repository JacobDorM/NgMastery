import { Routes } from '@angular/router';
import { CommentsComponent } from '../components/ngTutorial/comments/comments.component';
import { ImgComponent } from '../components/ngTutorial/comments/imgComponent/img.component';
import { DeferComponent } from '../components/ngTutorial/defer.component'
import { HomeComponent } from '../pages/home.component';
import { FormsComponent } from '../components/ngTutorial/forms.component';

export const routes: Routes = [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'comments',
        component: CommentsComponent,
      },
      {
        path: 'img',
        component: ImgComponent,
      },
      {
        path: 'defer',
        component: DeferComponent,
      },
      {
        path: 'forms',
        component: FormsComponent,
      },
];
