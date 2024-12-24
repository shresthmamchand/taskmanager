import { createAction, props } from '@ngrx/store';
import { Task } from '../task.model';

export const addTask = createAction(
  '[Tasks] Add Task',
  props<{ task: Task }>()
);

export const removeTask = createAction(
  '[Tasks] Remove Task',
  props<{ id: string }>()
);

export const updateTask = createAction(
  '[Tasks] Update Task',
  props<{ task: Task }>()
);
