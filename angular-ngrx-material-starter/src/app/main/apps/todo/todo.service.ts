import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve
} from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { Utils } from 'src/common';

import { Todo } from './todo.model';

@Injectable()
export class TodoService implements Resolve<any> {
  todos: Todo[] = [];
  selectedTodos: Todo[] = [];
  currentTodo: Todo;
  searchText = '';
  filters: any[] = [];
  tags: any[] = [];
  routeParams: any = {};

  onTodosChanged: BehaviorSubject<any> = new BehaviorSubject([]);
  onSelectedTodosChanged: BehaviorSubject<any> = new BehaviorSubject([]);
  onCurrentTodoChanged: BehaviorSubject<any> = new BehaviorSubject([]);

  onFiltersChanged: BehaviorSubject<any> = new BehaviorSubject([
    {
      id: 0,
      handle: 'starred',
      title: 'Starred',
      icon: 'star'
    },
    {
      id: 1,
      handle: 'important',
      title: 'Priority',
      icon: 'error'
    },
    {
      id: 2,
      handle: 'dueDate',
      title: 'Sheduled',
      icon: 'schedule'
    },
    {
      id: 3,
      handle: 'today',
      title: 'Today',
      icon: 'today'
    },
    {
      id: 4,
      handle: 'completed',
      title: 'Done',
      icon: 'check'
    },
    {
      id: 4,
      handle: 'deleted',
      title: 'Deleted',
      icon: 'delete'
    }
  ]);
  onTagsChanged: BehaviorSubject<any> = new BehaviorSubject([
    {
      id: 1,
      handle: 'frontend',
      title: 'Frontend',
      color: '#388E3C'
    },
    {
      id: 2,
      handle: 'backend',
      title: 'Backend',
      color: '#F44336'
    },
    {
      id: 3,
      handle: 'api',
      title: 'API',
      color: '#FF9800'
    },
    {
      id: 4,
      handle: 'issue',
      title: 'Issue',
      color: '#0091EA'
    },
    {
      id: 5,
      handle: 'mobile',
      title: 'Mobile',
      color: '#9C27B0'
    }
  ]);

  onSearchTextChanged: BehaviorSubject<any> = new BehaviorSubject('');
  onNewTodoClicked: Subject<any> = new Subject();

  constructor(private _httpClient: HttpClient, private _location: Location) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    this.routeParams = route.params;

    return new Promise((resolve, reject) => {
      Promise.all([this.getTodos()]).then(() => {
        if (this.routeParams.todoId) {
          this.setCurrentTodo(this.routeParams.todoId);
        } else {
          this.setCurrentTodo(null);
        }

        this.onSearchTextChanged.subscribe((searchText) => {
          if (searchText !== '') {
            this.searchText = searchText;
            this.getTodos();
          } else {
            this.searchText = searchText;
            this.getTodos();
          }
        });

        resolve();
      }, reject);
    });
  }

  getTodos(): Promise<Todo[]> {
    if (this.routeParams.tagHandle) {
      return this.getTodosByTag(this.routeParams.tagHandle);
    }

    if (this.routeParams.filterHandle) {
      return this.getTodosByFilter(this.routeParams.filterHandle);
    }

    return this.getTodosByParams(this.routeParams);
  }

  getTodosByParams(handle): Promise<Todo[]> {
    return new Promise((resolve, reject) => {
      this._httpClient.get('api/todo').subscribe((todos: any) => {
        this.todos = todos.map((todo) => {
          return new Todo(todo);
        });

        this.todos = Utils.filterArrayByString(this.todos, this.searchText);
        this.onTodosChanged.next(this.todos);

        resolve(this.todos);
      });
    });
  }

  getTodosByFilter(handle): Promise<Todo[]> {
    let param = handle + '=true';

    if (handle === 'dueDate') {
      param = handle + '=^$|\\s+';
    }

    return new Promise((resolve, reject) => {
      this._httpClient.get('api/todo?' + param).subscribe((todos: any) => {
        this.todos = todos.map((todo) => {
          return new Todo(todo);
        });

        this.todos = Utils.filterArrayByString(this.todos, this.searchText);

        this.onTodosChanged.next(this.todos);

        resolve(this.todos);
      }, reject);
    });
  }

  getTodosByTag(handle): Promise<Todo[]> {
    return new Promise((resolve, reject) => {
      this._httpClient
        .get('api/todo-tags?handle=' + handle)
        .subscribe((tags: any) => {
          const tagId = tags[0].id;

          this._httpClient
            .get('api/todo?tags=' + tagId)
            .subscribe((todos: any) => {
              this.todos = todos.map((todo) => {
                return new Todo(todo);
              });

              this.todos = Utils.filterArrayByString(
                this.todos,
                this.searchText
              );

              this.onTodosChanged.next(this.todos);

              resolve(this.todos);
            }, reject);
        });
    });
  }

  toggleSelectedTodo(id): void {
    // First, check if we already have that todo as selected...
    if (this.selectedTodos.length > 0) {
      for (const todo of this.selectedTodos) {
        // ...delete the selected todo
        if (todo.id === id) {
          const index = this.selectedTodos.indexOf(todo);

          if (index !== -1) {
            this.selectedTodos.splice(index, 1);

            // Trigger the next event
            this.onSelectedTodosChanged.next(this.selectedTodos);

            // Return
            return;
          }
        }
      }
    }

    // If we don't have it, push as selected
    this.selectedTodos.push(
      this.todos.find((todo) => {
        return todo.id === id;
      })
    );

    // Trigger the next event
    this.onSelectedTodosChanged.next(this.selectedTodos);
  }

  toggleSelectAll(): void {
    if (this.selectedTodos.length > 0) {
      this.deselectTodos();
    } else {
      this.selectTodos();
    }
  }

  selectTodos(filterParameter?, filterValue?): void {
    this.selectedTodos = [];

    // If there is no filter, select all todos
    if (filterParameter === undefined || filterValue === undefined) {
      this.selectedTodos = this.todos;
    } else {
      this.selectedTodos.push(
        ...this.todos.filter((todo) => {
          return todo[filterParameter] === filterValue;
        })
      );
    }

    // Trigger the next event
    this.onSelectedTodosChanged.next(this.selectedTodos);
  }

  deselectTodos(): void {
    this.selectedTodos = [];

    // Trigger the next event
    this.onSelectedTodosChanged.next(this.selectedTodos);
  }

  setCurrentTodo(id): void {
    this.currentTodo = this.todos.find((todo: Todo) => todo.id === id);

    this.onCurrentTodoChanged.next([this.currentTodo, 'edit']);

    const tagHandle = this.routeParams.tagHandle;
    const filterHandle = this.routeParams.filterHandle;

    if (tagHandle) {
      this._location.go('apps/todo/tag/' + tagHandle + '/' + id);
    } else if (filterHandle) {
      this._location.go('apps/todo/filter/' + filterHandle + '/' + id);
    } else {
      this._location.go('apps/todo/all/' + id);
    }
  }

  toggleTagOnSelectedTodos(tagId): void {
    this.selectedTodos.map((todo) => {
      this.toggleTagOnTodo(tagId, todo);
    });
  }

  toggleTagOnTodo(tagId, todo): void {
    const index = todo.tags.indexOf(tagId);

    if (index !== -1) {
      todo.tags.splice(index, 1);
    } else {
      todo.tags.push(tagId);
    }

    this.updateTodo(todo);
  }

  hasTag(tagId, todo): any {
    if (!todo.tags) {
      return false;
    }

    return todo.tags.indexOf(tagId) !== -1;
  }

  updateTodo(todo): any {
    return new Promise((resolve, reject) => {
      this._httpClient
        .post('api/todo/' + todo.id, { ...todo })
        .subscribe((response) => {
          this.getTodos().then((todos) => {
            resolve(todos);
          }, reject);
        });
    });
  }
}
