import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { TodoListComponent } from './task-list/task-list.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'todos', component: TodoListComponent},
    // {path: 'about', component: AboutComponent },
    {path: '**', redirectTo: ''}
];
