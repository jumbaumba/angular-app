import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgFor, NgIf, StatusPipe, TaskFormComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})

addTask(task: TaskForm) { 
  const newTodo = { id: Date.now(), ...task };
  this.todos.push(newTodo);
  this.todoService.addTodo(newTodo).subscribe();
  
}

export class TodoComponent {

}
