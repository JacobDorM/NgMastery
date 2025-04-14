import { Routes } from '@angular/router';
import { CommentsComponent } from '../components/ngTutorial/comments/comments.component';
import { ImgComponent } from '../components/ngTutorial/comments/imgComponent/img.component';
import { DeferComponent } from '../components/ngTutorial/defer.component';
import { FormsComponent } from '../components/ngTutorial/forms.component';
import { InjectComponent } from '../components/ngTutorial/inject.component';
import { PipesComponent } from '../components/ngTutorial/pipes.component';
import { NgTutorialComponent } from '../pages/ngTutorial/ngTutorial.component';
import { HomesComponent } from '../pages/homes/homes.component';
import { DetailsComponent } from '../components/homes/details/details.component';
import { HomesContentComponent } from '../components/homes/homes-content/homes-content.component';

export const routes: Routes = [
  {
    path: 'ngTutorial',
    title: 'ngTutorial page',
    component: NgTutorialComponent,
    children: [
      { path: '', redirectTo: 'img', pathMatch: 'full' },
      { path: 'comments', component: CommentsComponent },
      { path: 'img', component: ImgComponent },
      { path: 'defer', component: DeferComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'inject', component: InjectComponent },
      { path: 'pipes', component: PipesComponent },
    ],
  },
  {
    path: 'homes',
    component: HomesComponent,
    title: 'Homes page',
    children: [
      {
        path: '',
        component: HomesContentComponent,
        title: 'Home Content',
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details',
      },
    ],
    // loadComponent: () =>
    //   import('../pages/homes/homes.component').then((m) => m.HomesComponent),
  },
  { path: '', redirectTo: 'ngTutorial', pathMatch: 'full' },
  { path: '**', redirectTo: 'ngTutorial' },
];
