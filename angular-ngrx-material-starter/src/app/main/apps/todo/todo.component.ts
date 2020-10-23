import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { commonAnimations, CommonSidebarService } from 'src/common';

import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: commonAnimations
})
export class TodoComponent implements OnInit, OnDestroy {
  hasSelectedTodos: boolean;
  isIndeterminate: boolean;
  filters: any[];
  tags: any[];
  searchInput: FormControl = new FormControl('');
  currentTodo: Todo;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _sidebarService: CommonSidebarService,
    private _todoService: TodoService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._todoService.onSelectedTodosChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((selectedTodos) => {
        setTimeout(() => {
          this.hasSelectedTodos = selectedTodos.length > 0;
          this.isIndeterminate =
            selectedTodos.length !== this._todoService.todos.length &&
            selectedTodos.length > 0;
        }, 0);
      });

    this._todoService.onFiltersChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((folders) => {
        this.filters = this._todoService.filters;
      });

    this._todoService.onTagsChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((tags) => {
        this.tags = this._todoService.tags;
      });

    this.searchInput.valueChanges
      .pipe(
        takeUntil(this._unsubscribeAll),
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((searchText) => {
        this._todoService.onSearchTextChanged.next(searchText);
      });

    this._todoService.onCurrentTodoChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(([currentTodo, formType]) => {
        if (!currentTodo) {
          this.currentTodo = null;
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

  deselectCurrentTodo(): void {
    this._todoService.onCurrentTodoChanged.next([null, null]);
  }

  toggleSelectAll(): void {
    this._todoService.toggleSelectAll();
  }

  selectTodos(filterParameter?, filterValue?): void {
    this._todoService.selectTodos(filterParameter, filterValue);
  }

  deselectTodos(): void {
    this._todoService.deselectTodos();
  }

  toggleTagOnSelectedTodos(tagId): void {
    this._todoService.toggleTagOnSelectedTodos(tagId);
  }

  toggleSidebar(name): void {
    this._sidebarService.getSidebar(name).toggleOpen();
  }
}
