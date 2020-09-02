import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { CommonUtils } from '@common/utils';

import { Todo } from 'app/main/apps/todo/todo.model';

@Injectable()
export class TodoService implements Resolve<any> {
  todos: Todo[];
  selectedTodos: Todo[];
  currentTodo: Todo;
  searchText: string;
  filters: any[];
  tags: any[];
  routeParams: any;

  onTodosChanged: BehaviorSubject<any>;
  onSelectedTodosChanged: BehaviorSubject<any>;
  onCurrentTodoChanged: BehaviorSubject<any>;
  onFiltersChanged: BehaviorSubject<any>;
  onTagsChanged: BehaviorSubject<any>;
  onSearchTextChanged: BehaviorSubject<any>;
  onNewTodoClicked: Subject<any>;

  /**
   * Constructor
   *
   * @param _httpClient
   * @param _location
   */
  constructor(
    private _httpClient: HttpClient,
    private _location: Location
  ) {
    // Set the defaults
    this.selectedTodos = [];
    this.searchText = '';
    this.onTodosChanged = new BehaviorSubject([]);
    this.onSelectedTodosChanged = new BehaviorSubject([]);
    this.onCurrentTodoChanged = new BehaviorSubject([]);
    this.onFiltersChanged = new BehaviorSubject([]);
    this.onTagsChanged = new BehaviorSubject([]);
    this.onSearchTextChanged = new BehaviorSubject('');
    this.onNewTodoClicked = new Subject();
  }

  /**
   * Resolver
   *
   * @param  route
   * @param  state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    this.routeParams = route.params;

    return new Promise((resolve, reject) => {
      Promise.all([
        this.getFilters(),
        this.getTags(),
        this.getTodos()
      ]).then(
        () => {
          if (this.routeParams.todoId) {
            this.setCurrentTodo(this.routeParams.todoId);
          } else {
            this.setCurrentTodo(null);
          }

          this.onSearchTextChanged.subscribe(searchText => {
            if (searchText !== '') {
              this.searchText = searchText;
              this.getTodos();
            } else {
              this.searchText = searchText;
              this.getTodos();
            }
          });
          resolve();
        },
        reject
      );
    });
  }

  /**
   * Get all filters
   *
   * @returns {Promise<any>}
   */
  getFilters(): Promise<any> {
    const filters = [
      {
        'id': 0,
        'handle': 'starred',
        'title': 'Starred',
        'icon': 'star'
      },
      {
        'id': 1,
        'handle': 'important',
        'title': 'Priority',
        'icon': 'error'
      },
      {
        'id': 2,
        'handle': 'dueDate',
        'title': 'Sheduled',
        'icon': 'schedule'
      },
      {
        'id': 3,
        'handle': 'today',
        'title': 'Today',
        'icon': 'today'
      },
      {
        'id': 4,
        'handle': 'completed',
        'title': 'Done',
        'icon': 'check'
      },
      {
        'id': 4,
        'handle': 'deleted',
        'title': 'Deleted',
        'icon': 'delete'
      }
    ];

    return new Promise((resolve, reject) => {
      this.filters = filters;
      this.onFiltersChanged.next(this.filters);
      resolve(this.filters);

      // this._httpClient.get('api/todo-filters')
      //   .subscribe((response: any) => {
      //     this.filters = response;
      //     this.onFiltersChanged.next(this.filters);
      //     resolve(this.filters);
      //   }, reject);
    });
  }

  /**
   * Get all tags
   *
   * @returns {Promise<any>}
   */
  getTags(): Promise<any> {
    const tags = [
      {
        'id': 1,
        'handle': 'frontend',
        'title': 'Frontend',
        'color': '#388E3C'
      },
      {
        'id': 2,
        'handle': 'backend',
        'title': 'Backend',
        'color': '#F44336'
      },
      {
        'id': 3,
        'handle': 'api',
        'title': 'API',
        'color': '#FF9800'
      },
      {
        'id': 4,
        'handle': 'issue',
        'title': 'Issue',
        'color': '#0091EA'
      },
      {
        'id': 5,
        'handle': 'mobile',
        'title': 'Mobile',
        'color': '#9C27B0'
      }
    ];

    return new Promise((resolve, reject) => {

      this.tags = tags;
      this.onTagsChanged.next(this.tags);
      resolve(this.tags);

      // this._httpClient.get('api/todo-tags')
      //   .subscribe((response: any) => {
      //     this.tags = response;
      //     this.onTagsChanged.next(this.tags);
      //     resolve(this.tags);
      //   }, reject);
    });
  }

  /**
   * Get todos
   *
   * @returns {Promise<Todo[]>}
   */
  getTodos(): Promise<Todo[]> {
    if (this.routeParams.tagHandle) {
      return this.getTodosByTag(this.routeParams.tagHandle);
    }

    if (this.routeParams.filterHandle) {
      return this.getTodosByFilter(this.routeParams.filterHandle);
    }

    return this.getTodosByParams(this.routeParams);
  }

  /**
   * Get todos by params
   *
   * @param handle
   * @returns {Promise<Todo[]>}
   */
  getTodosByParams(handle): Promise<Todo[]> {
    const todos = [
      {
        'id': '561551bd7fe2ff461101c192',
        'title': 'Proident tempor est nulla irure ad est',
        'notes': 'Id nulla nulla proident deserunt deserunt proident in quis. Cillum reprehenderit labore id anim laborum.',
        'startDate': 'Wednesday, January 29, 2017 3:17 PM',
        'dueDate': null,
        'completed': false,
        'starred': false,
        'important': false,
        'deleted': false,
        'tags': [1]
      },
      {
        'id': '561551bd4ac1e7eb77a3a750',
        'title': 'Magna quis irure quis ea pariatur laborum',
        'notes': '',
        'startDate': 'Sunday, February 1, 2018 1:30 PM',
        'dueDate': 'Friday, December 30, 2019 10:07 AM',
        'completed': false,
        'starred': false,
        'important': true,
        'deleted': false,
        'tags': [1, 4]
      },
      {
        'id': '561551bd917bfec2ddef2d49',
        'title': 'Ullamco duis commodo sint ad aliqua aute',
        'notes': 'Sunt laborum enim nostrud ea fugiat cillum mollit aliqua exercitation ad elit.',
        'startDate': 'Friday, April 11, 2017 3:43 AM',
        'dueDate': 'Wednesday, July 26, 2017 11:14 AM',
        'completed': false,
        'starred': true,
        'important': true,
        'deleted': false,
        'tags': [3]
      },
      {
        'id': '561551bdeeb2fd6877e18c29',
        'title': 'Eiusmod non occaecat pariatur Lorem in ex',
        'notes': 'Nostrud anim mollit incididunt qui qui sit commodo duis. Anim amet irure aliquip duis nostrud sit quis fugiat ullamco non dolor labore. Lorem sunt voluptate laboris culpa proident. Aute eiusmod aliqua exercitation irure exercitation qui laboris mollit occaecat eu occaecat fugiat.',
        'startDate': 'Wednesday, May 7, 2017 4:14 AM',
        'dueDate': 'Friday, December 15, 2017 4:01 AM',
        'completed': true,
        'starred': true,
        'important': false,
        'deleted': false,
        'tags': [2]
      },
      {
        'id': '561551bdf38eae0134ae43d4',
        'title': 'Lorem magna cillum consequat consequat mollit',
        'notes': 'Velit ipsum proident ea incididunt et. Consectetur eiusmod laborum voluptate duis occaecat ullamco sint enim proident.',
        'startDate': 'Sunday, August 23, 2018 11:19 PM',
        'dueDate': 'Friday, July 8, 2019 10:49 AM',
        'completed': false,
        'starred': false,
        'important': false,
        'deleted': false,
        'tags': [5, 4]
      },
      {
        'id': '561551bd32f1588c814a0ccd',
        'title': 'Quis irure cupidatat ad consequat reprehenderit excepteur',
        'notes': 'Esse nisi mollit aliquip mollit aute consequat adipisicing. Do excepteur dolore proident cupidatat pariatur irure consequat incididunt.',
        'startDate': 'Sunday, June 7, 2018 10:49 AM',
        'dueDate': 'Monday, January 9, 2017 8:34 AM',
        'completed': false,
        'starred': true,
        'important': false,
        'deleted': false,
        'tags': [2, 3]
      },
      {
        'id': '561551bd0bb4b08ca77038ef',
        'title': 'Officia voluptate tempor ut mollit ea cillum',
        'notes': 'Deserunt veniam reprehenderit do elit magna ut.',
        'startDate': 'Saturday, October 18, 2017 4:25 AM',
        'dueDate': 'Sunday, August 21, 2019 10:48 PM',
        'completed': true,
        'starred': false,
        'important': false,
        'deleted': false,
        'tags': [2, 4]
      },
      {
        'id': '561551bdf84eec913835ebe5',
        'title': 'Sit exercitation cupidatat minim est ipsum excepteur',
        'notes': '',
        'startDate': 'Friday, August 8, 2017 5:45 AM',
        'dueDate': 'Wednesday, June 15, 2019 1:53 PM',
        'completed': true,
        'starred': false,
        'important': true,
        'deleted': false,
        'tags': [1, 3]
      },
      {
        'id': '561551bd2047cc709af0f670',
        'title': 'Sunt fugiat officia nisi minim sunt duis',
        'notes': 'Eiusmod eiusmod sint aliquip exercitation cillum. Magna nulla officia ex consectetur ea ad excepteur in qui.',
        'startDate': 'Monday, July 13, 2018 1:55 PM',
        'dueDate': 'Thursday, March 3, 2019 2:26 PM',
        'completed': false,
        'starred': false,
        'important': false,
        'deleted': false,
        'tags': [
          {
            'id': 5,
            'name': 'mobile',
            'label': 'Mobile',
            'color': '#9C27B0'
          }
        ]
      },
      {
        'id': '561551bd73d1a627e97005ce',
        'title': 'Non cupidatat enim quis aliquip minim laborum',
        'notes': 'Qui cillum eiusmod nostrud sunt dolore velit nostrud labore voluptate ad dolore. Eu Lorem anim pariatur aliqua. Ullamco ut dolor velit esse occaecat dolore eu cillum commodo qui. Nulla dolor consequat voluptate magna ut commodo magna consectetur non aute proident.',
        'startDate': 'Tuesday, November 11, 2017 6:36 PM',
        'dueDate': 'Tuesday, August 9, 2019 7:18 AM',
        'completed': false,
        'starred': false,
        'important': false,
        'deleted': false,
        'tags': [2]
      },
      {
        'id': '561551bd8f7d793ded0a2353',
        'title': 'Dolor ex occaecat magna labore laboris qui',
        'notes': 'Incididunt qui excepteur eiusmod elit cillum occaecat voluptate cillum nostrud. Dolor ullamco ullamco eiusmod do sunt adipisicing pariatur. In esse esse labore id reprehenderit sint do. Pariatur culpa dolor tempor qui excepteur duis do anim minim ipsum.',
        'startDate': 'Monday, June 9, 2017 3:15 PM',
        'dueDate': 'Wednesday, October 19, 2019 3:38 PM',
        'completed': false,
        'starred': false,
        'important': true,
        'deleted': false,
        'tags': [3]
      },
      {
        'id': '561551bdaa586f72d0be02cc',
        'title': 'Ex nisi amet id dolore nostrud esse',
        'notes': '',
        'startDate': 'Thursday, January 15, 2018 6:11 PM',
        'dueDate': 'Sunday, August 20, 2017 10:02 AM',
        'completed': false,
        'starred': true,
        'important': true,
        'deleted': false,
        'tags': [4]
      },
      {
        'id': '561551bd9f1c2de5b27f537b',
        'title': 'In dolor velit labore dolore ex eiusmod',
        'notes': '',
        'startDate': 'Monday, March 10, 2017 12:50 AM',
        'dueDate': 'Thursday, January 26, 2017 3:10 PM',
        'completed': false,
        'starred': false,
        'important': false,
        'deleted': false,
        'tags': [4]
      },
      {
        'id': '561551bd26e21bb5e85b35cb',
        'title': 'Sunt voluptate aliquip exercitation minim magna sit',
        'notes': '',
        'startDate': 'Tuesday, March 24, 2018 10:54 PM',
        'dueDate': 'Wednesday, August 23, 2017 5:35 PM',
        'completed': false,
        'starred': false,
        'important': false,
        'deleted': false,
        'tags': [4]
      },
      {
        'id': '561551bd719860cf0ad2011a',
        'title': 'Nisi et ullamco minim ea proident tempor',
        'notes': 'Dolor veniam dolor cillum Lorem magna nisi in occaecat nulla dolor ea eiusmod.',
        'startDate': 'Friday, February 14, 2017 10:03 AM',
        'dueDate': 'Saturday, July 8, 2017 11:54 PM',
        'completed': false,
        'starred': true,
        'important': false,
        'deleted': false,
        'tags': [2, 4]
      },
      {
        'id': '561551bd49d800c243264a91',
        'title': 'Sit ipsum mollit cupidatat adipisicing officia aliquip',
        'notes': '',
        'startDate': 'Wednesday, December 10, 2017 9:25 AM',
        'dueDate': 'Friday, March 25, 2019 12:29 AM',
        'completed': true,
        'starred': false,
        'important': false,
        'deleted': false,
        'tags': [1]
      },
      {
        'id': '561551bd061990eaf40fb64f',
        'title': 'Amet sunt et quis amet commodo quis',
        'notes': 'Nulla dolore consequat aliqua sint consequat elit qui occaecat et.',
        'startDate': 'Saturday, March 1, 2017 3:59 PM',
        'dueDate': 'Saturday, November 7, 2018 2:00 PM',
        'completed': false,
        'starred': false,
        'important': true,
        'deleted': false,
        'tags': [1]
      },
      {
        'id': '561551be81d05fa94711e7f3',
        'title': 'Ut eiusmod ex ea eiusmod culpa incididunt',
        'notes': 'Fugiat non incididunt officia ex incididunt occaecat. Voluptate nostrud culpa aliquip mollit incididunt non dolore.',
        'startDate': 'Monday, February 2, 2018 3:07 PM',
        'dueDate': 'Saturday, October 14, 2017 6:57 AM',
        'completed': false,
        'starred': false,
        'important': false,
        'deleted': false,
        'tags': [2]
      },
      {
        'id': '561551be05c093a80e0c8d05',
        'title': 'Proident reprehenderit laboris pariatur ut et nisi',
        'notes': 'Reprehenderit proident ut ad cillum quis velit quis aliqua ut aliquip tempor ullamco.',
        'startDate': 'Sunday, June 14, 2018 4:40 AM',
        'dueDate': 'Wednesday, February 10, 2019 10:47 AM',
        'completed': true,
        'starred': true,
        'important': true,
        'deleted': false,
        'tags': [5]
      },
      {
        'id': '561551be3bb43a5bd431c2fc',
        'title': 'Aliqua aliquip aliquip aliquip et exercitation aute',
        'notes': 'Adipisicing Lorem tempor ex anim. Labore tempor laboris nostrud dolore voluptate ullamco. Fugiat ex deserunt anim minim esse velit laboris aute ea duis incididunt. Elit irure id Lorem incididunt laborum aliquip consectetur est irure sunt. Ut labore anim nisi aliqua tempor laborum nulla cillum. Duis irure consequat cillum magna cillum eiusmod ut. Et exercitation voluptate quis deserunt elit quis dolor deserunt ex ex esse ex.',
        'startDate': 'Saturday, May 3, 2017 1:32 AM',
        'dueDate': 'Monday, September 12, 2019 9:16 PM',
        'completed': true,
        'starred': false,
        'important': true,
        'deleted': true,
        'tags': [3]
      }
    ];

    return new Promise((resolve, reject) => {
      this.todos = todos.map(todo => {
        return new Todo(todo);
      });

      this.todos = CommonUtils.filterArrayByString(this.todos, this.searchText);

      this.onTodosChanged.next(this.todos);

      resolve(this.todos);

      // this._httpClient.get('api/todo-todos')
      //   .subscribe((todos: any) => {
      //     this.todos = todos.map(todo => {
      //       return new Todo(todo);
      //     });
      //
      //     this.todos = CommonUtils.filterArrayByString(this.todos, this.searchText);
      //
      //     this.onTodosChanged.next(this.todos);
      //
      //     resolve(this.todos);
      //   });
    });
  }

  /**
   * Get todos by filter
   *
   * @param handle
   * @returns {Promise<Todo[]>}
   */
  getTodosByFilter(handle): Promise<Todo[]> {
    let param = handle + '=true';

    if (handle === 'dueDate') {
      param = handle + '=^$|\\s+';
    }

    return new Promise((resolve, reject) => {

      this._httpClient.get('api/todo-todos?' + param)
        .subscribe((todos: any) => {

          this.todos = todos.map(todo => {
            return new Todo(todo);
          });

          this.todos = CommonUtils.filterArrayByString(this.todos, this.searchText);

          this.onTodosChanged.next(this.todos);

          resolve(this.todos);

        }, reject);
    });
  }

  /**
   * Get todos by tag
   *
   * @param handle
   * @returns {Promise<Todo[]>}
   */
  getTodosByTag(handle): Promise<Todo[]> {

    return new Promise((resolve, reject) => {
      this._httpClient.get('api/todo-tags?handle=' + handle)
        .subscribe((tags: any) => {

          const tagId = tags[0].id;

          this._httpClient.get('api/todo-todos?tags=' + tagId)
            .subscribe((todos: any) => {

              this.todos = todos.map(todo => {
                return new Todo(todo);
              });

              this.todos = CommonUtils.filterArrayByString(this.todos, this.searchText);

              this.onTodosChanged.next(this.todos);

              resolve(this.todos);

            }, reject);
        });
    });
  }

  /**
   * Toggle selected todo by id
   *
   * @param id
   */
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
      this.todos.find(todo => {
        return todo.id === id;
      })
    );

    // Trigger the next event
    this.onSelectedTodosChanged.next(this.selectedTodos);
  }

  /**
   * Toggle select all
   */
  toggleSelectAll(): void {
    if (this.selectedTodos.length > 0) {
      this.deselectTodos();
    } else {
      this.selectTodos();
    }

  }

  /**
   * Select todos
   *
   * @param filterParameter
   * @param filterValue
   */
  selectTodos(filterParameter?, filterValue?): void {
    this.selectedTodos = [];

    // If there is no filter, select all todos
    if (filterParameter === undefined || filterValue === undefined) {
      this.selectedTodos = this.todos;
    } else {
      this.selectedTodos.push(...
        this.todos.filter(todo => {
          return todo[filterParameter] === filterValue;
        })
      );
    }

    // Trigger the next event
    this.onSelectedTodosChanged.next(this.selectedTodos);
  }

  /**
   * Deselect todos
   */
  deselectTodos(): void {
    this.selectedTodos = [];

    // Trigger the next event
    this.onSelectedTodosChanged.next(this.selectedTodos);
  }

  /**
   * Set current todo by id
   *
   * @param id
   */
  setCurrentTodo(id): void {
    this.currentTodo = this.todos.find(todo => {
      return todo.id === id;
    });

    this.onCurrentTodoChanged.next([this.currentTodo, 'edit']);

    const tagHandle = this.routeParams.tagHandle,
      filterHandle = this.routeParams.filterHandle;

    if (tagHandle) {
      this._location.go('apps/todo/tag/' + tagHandle + '/' + id);
    } else if (filterHandle) {
      this._location.go('apps/todo/filter/' + filterHandle + '/' + id);
    } else {
      this._location.go('apps/todo/all/' + id);
    }
  }

  /**
   * Toggle tag on selected todos
   *
   * @param tagId
   */
  toggleTagOnSelectedTodos(tagId): void {
    this.selectedTodos.map(todo => {
      this.toggleTagOnTodo(tagId, todo);
    });
  }

  /**
   * Toggle tag on todo
   *
   * @param tagId
   * @param todo
   */
  toggleTagOnTodo(tagId, todo): void {
    const index = todo.tags.indexOf(tagId);

    if (index !== -1) {
      todo.tags.splice(index, 1);
    } else {
      todo.tags.push(tagId);
    }

    this.updateTodo(todo);
  }

  /**
   * Has tag?
   *
   * @param tagId
   * @param todo
   * @returns {boolean}
   */
  hasTag(tagId, todo): any {
    if (!todo.tags) {
      return false;
    }

    return todo.tags.indexOf(tagId) !== -1;
  }

  /**
   * Update the todo
   *
   * @param todo
   * @returns {Promise<any>}
   */
  updateTodo(todo): any {
    return new Promise((resolve, reject) => {

      this._httpClient.post('api/todo-todos/' + todo.id, { ...todo })
        .subscribe(response => {

          this.getTodos().then(todos => {

            resolve(todos);

          }, reject);
        });
    });
  }
}
