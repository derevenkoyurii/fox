import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgxDnDModule } from '@swimlane/ngx-dnd';

import {
  MaterialModule,
  SidebarModule,
  DirectivesModule,
  PipesModule
} from 'src/common';

import { TodoService } from './todo.service';
import { TodoComponent } from './todo.component';

import { TodoMainSidebarComponent } from './sidebars/main/main-sidebar.component';
import { TodoListItemComponent } from './todo-list/todo-list-item/todo-list-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

import { TodoRouting } from './todo.routing';

@NgModule({
  declarations: [
    TodoComponent,
    TodoMainSidebarComponent,
    TodoListItemComponent,
    TodoListComponent,
    TodoDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    NgxDnDModule,
    FormsModule,
    ReactiveFormsModule,

    MaterialModule,
    SidebarModule,
    DirectivesModule,
    PipesModule,

    TodoRouting
  ],
  providers: [TodoService]
})
export class TodoModule {}
