import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}


@Component({
  selector: 'app-todo-list',
  templateUrl: './task-list.component.html',//todo-list не существует в папке с компонентом
  styleUrls: ['./task-list.component.scss'],//todo-list не существует в папке с компонентом
  imports: [NgFor, FormsModule, NgClass],
  standalone: true, // Set standalone to true
})

export class TodoListComponent {
  tasks: Task[] = [];
  taskName: string = '';

  addTask() {
    if (this.taskName.trim()) {
      this.tasks.push({
        id: Date.now(),
        name: this.taskName,
        completed: false
      });
      this.taskName = '';
    }
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
  }

  get isAllTasksIsComplete(): boolean {
    return this.tasks.every(task => !task.completed);
  }

  deleteCompletedTasks() {
    this.tasks = this.tasks.filter(task => !task.completed);
  }
}