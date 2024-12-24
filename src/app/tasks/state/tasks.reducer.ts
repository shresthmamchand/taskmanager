import { createReducer, on } from '@ngrx/store';
import { Task } from '../task.model';
import * as TasksActions from './tasks.actions';

export interface TasksState {
  tasks: Task[];
}

export const initialState: TasksState = {
  tasks: [],
};

export const tasksReducer = createReducer(
  initialState,
  on(TasksActions.addTask, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task],
  })),
  on(TasksActions.removeTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== id),
  })),
  on(TasksActions.updateTask, (state, { task }) => ({
    ...state,
    tasks: state.tasks.map((t) => (t.id === task.id ? task : t)),
  }))
);
