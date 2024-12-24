import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../task.model';
import { removeTask, updateTask } from '../state/tasks.actions';
import { selectAllTasks } from '../state/tasks.selectors';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  tasks$: Observable<Task[]>;
  editingTaskId: string | null = null;
  updatedTitle: string = '';
  updatedDescription: string = '';

  constructor(private store: Store) {
    this.tasks$ = this.store.select(selectAllTasks);
  }

  markAsCompleted(task: Task) {
    this.store.dispatch(
      updateTask({ task: { ...task, status: 'completed' } })
    );
  }

  removeTask(id: string) {
    this.store.dispatch(removeTask({ id }));
  }

  startEditing(task: Task) {
    this.editingTaskId = task.id;
    this.updatedTitle = task.title;
    this.updatedDescription = task.description;
  }

  saveEdit(task: Task) {
    if (this.updatedTitle.trim() && this.updatedDescription.trim()) {
      this.store.dispatch(
        updateTask({
          task: {
            ...task,
            title: this.updatedTitle,
            description: this.updatedDescription,
          },
        })
      );
      this.cancelEdit();
    }
  }

  cancelEdit() {
    this.editingTaskId = null;
    this.updatedTitle = '';
    this.updatedDescription = '';
  }
}
