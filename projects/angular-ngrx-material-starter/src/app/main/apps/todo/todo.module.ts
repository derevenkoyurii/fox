import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { NgxDnDModule } from '@swimlane/ngx-dnd';

import { SharedOtherModule, SharedMaterialModule, SidebarModule } from '@common';

import { TodoService } from 'app/main/apps/todo/todo.service';
import { TodoComponent } from 'app/main/apps/todo/todo.component';
import { TodoMainSidebarComponent } from 'app/main/apps/todo/sidebars/main/main-sidebar.component';
import { TodoListItemComponent } from 'app/main/apps/todo/todo-list/todo-list-item/todo-list-item.component';
import { TodoListComponent } from 'app/main/apps/todo/todo-list/todo-list.component';
import { TodoDetailsComponent } from 'app/main/apps/todo/todo-details/todo-details.component';

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
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatRippleModule,
    MatSelectModule,

    NgxDnDModule,

    SharedOtherModule,
    SharedMaterialModule,
    SidebarModule,

    TodoRouting
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule {
}
