import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { commonAnimations } from 'src/common';

import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todo-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: commonAnimations
})
export class TodoMainSidebarComponent implements OnInit, OnDestroy {
  filters: any[];
  tags: any[];
  accounts: object;
  selectedAccount: string;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {TodoService} _todoService
   * @param {Router} _router
   */
  constructor(private _todoService: TodoService, private _router: Router) {
    // Set the defaults
    this.accounts = {
      creapond: 'lorem@com',
      withinpixels: 'derevenkoyurec@gmail.com'
    };
    this.selectedAccount = 'creapond';

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  /**
   * On init
   */
  ngOnInit(): void {
    this._todoService.onFiltersChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((filters) => {
        this.filters = filters;
      });

    this._todoService.onTagsChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((tags) => {
        this.tags = tags;
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  /**
   * New todo
   */
  newTodo(): void {
    this._router.navigate(['/apps/todo/all']).then(() => {
      setTimeout(() => {
        this._todoService.onNewTodoClicked.next('');
      });
    });
  }
}
