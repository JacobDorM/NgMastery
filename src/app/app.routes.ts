import { Routes } from '@angular/router';
import { CommentsComponent } from '../components/ngTutorial/comments/comments.component';
import { ImgComponent } from '../components/ngTutorial/comments/imgComponent/img.component';
import { DeferComponent } from '../components/ngTutorial/defer.component';
import { FormsComponent } from '../components/ngTutorial/forms.component';
import { InjectComponent } from '../components/ngTutorial/inject.component';
import { PipesComponent } from '../components/ngTutorial/pipes.component';
import { NgMasteryComponent } from '../pages/ngMastery.component';

export const routes: Routes = [
  {
    path: 'ngMastery',
    component: NgMasteryComponent,
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
    loadComponent: () =>
      import('../pages/homes.component').then((m) => m.HomesComponent),
  },
  { path: '', redirectTo: 'ngMastery', pathMatch: 'full' },
  { path: '**', redirectTo: 'ngMastery' },
];
