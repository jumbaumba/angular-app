import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { TodoDetailComponent } from './components/pages/todo-detail/todo-detail.component';
import { TodoComponent } from './components/pages/todo/todo.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'todos', component: TodoComponent},
    {path: 'todos/:id', component: TodoDetailComponent },
    {path: '**', component: NotfoundComponent}
];
