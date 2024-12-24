import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }, // Redirect to tasks by default
  {
    path: 'tasks',
    loadChildren: () =>
      import('./tasks/tasks.module').then((m) => m.TasksModule),
  },
  { path: '**', redirectTo: '/tasks' }, // Wildcard route to redirect invalid paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
