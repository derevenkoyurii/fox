import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';

const routes: Routes = [
  {
    path: 'all',
    component: TodoComponent,
    resolve: {
      todo: TodoService
    }
  },
  {
    path: 'all/:todoId',
    component: TodoComponent,
    resolve: {
      todo: TodoService
    }
  },
  {
    path: 'tag/:tagHandle',
    component: TodoComponent,
    resolve: {
      todo: TodoService
    }
  },
  {
    path: 'tag/:tagHandle/:todoId',
    component: TodoComponent,
    resolve: {
      todo: TodoService
    }
  },
  {
    path: 'filter/:filterHandle',
    component: TodoComponent,
    resolve: {
      todo: TodoService
    }
  },
  {
    path: 'filter/:filterHandle/:todoId',
    component: TodoComponent,
    resolve: {
      todo: TodoService
    }
  },
  {
    path: '**',
    redirectTo: 'all'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class TodoRouting {}
