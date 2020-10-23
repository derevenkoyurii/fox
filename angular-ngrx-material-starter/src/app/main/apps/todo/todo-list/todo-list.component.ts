import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { commonAnimations } from 'src/common';

import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: commonAnimations
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: Todo[];
  currentTodo: Todo;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _todoService: TodoService,
    private _location: Location
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._todoService.onTodosChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((todos) => {
        this.todos = todos;
      });

    this._todoService.onCurrentTodoChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((currentTodo) => {
        if (!currentTodo) {
          // Set the current todo id to null to deselect the current todo
          this.currentTodo = null;

          // Handle the location changes
          const tagHandle = this._activatedRoute.snapshot.params.tagHandle;
          const filterHandle = this._activatedRoute.snapshot.params
            .filterHandle;

          if (tagHandle) {
            this._location.go('apps/todo/tag/' + tagHandle);
          } else if (filterHandle) {
            this._location.go('apps/todo/filter/' + filterHandle);
          } else {
            this._location.go('apps/todo/all');
          }
        } else {
          this.currentTodo = currentTodo;
        }
      });
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  readTodo(todoId): void {
    // Set current todo
    this._todoService.setCurrentTodo(todoId);
  }

  onDrop(ev): void {}
}
