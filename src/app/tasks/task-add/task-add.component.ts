import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { v4 as uuid } from 'uuid';
import { addTask } from '../state/tasks.actions';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css'],
})
export class TaskAddComponent {
  title: string = '';
  description: string = ''; // New field

  constructor(private store: Store) {}

  addTask() {
    if (this.title.trim() && this.description.trim()) {
      this.store.dispatch(
        addTask({
          task: {
            id: uuid(),
            title: this.title,
            description: this.description,
            status: 'pending',
          },
        })
      );
      this.title = '';
      this.description = ''; // Reset fields
    }
  }
}
