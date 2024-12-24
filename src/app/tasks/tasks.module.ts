import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { tasksReducer } from './state/tasks.reducer';
import { FormsModule } from '@angular/forms'
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksRoutingModule } from './tasks-routing.module';
@NgModule({
  declarations: [TaskAddComponent, TaskEditComponent, TaskListComponent],
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule,
  
    StoreModule.forFeature('tasks', tasksReducer), // Register the reducer
  ],
})
export class TasksModule {}
