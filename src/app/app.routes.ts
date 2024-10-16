import { Routes } from '@angular/router';
import { CommentsListComponent } from './components/comments-list/comments-list.component';

export const routes: Routes = [
    { path:"", redirectTo:"comments" , pathMatch:"full" },
    { path:"comments", component:CommentsListComponent }

];
