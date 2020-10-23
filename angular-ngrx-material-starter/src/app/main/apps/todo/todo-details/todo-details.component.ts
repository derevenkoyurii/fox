import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { Utils, commonAnimations } from 'src/common';

import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: commonAnimations
})
export class TodoDetailsComponent implements OnInit, OnDestroy {
  todo: Todo;
  tags: any[];
  formType: string;
  todoForm: FormGroup;

  @ViewChild('titleInput', { static: true }) titleInputField;

  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   */
  constructor(
    private _todoService: TodoService,
    private _formBuilder: FormBuilder
  ) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to update the current todo
    this._todoService.onCurrentTodoChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(([todo, formType]) => {
        if (todo && formType === 'edit') {
          this.formType = 'edit';
          this.todo = todo;
          this.todoForm = this.createTodoForm();

          this.todoForm.valueChanges
            .pipe(
              takeUntil(this._unsubscribeAll),
              debounceTime(500),
              distinctUntilChanged()
            )
            .subscribe((data) => {
              this._todoService.updateTodo(data);
            });
        }
      });

    // Subscribe to update on tag change
    this._todoService.onTagsChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((labels) => {
        this.tags = labels;
      });

    // Subscribe to update on tag change
    this._todoService.onNewTodoClicked
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        this.todo = new Todo({});
        this.todo.id = Utils.generateGUID();
        this.formType = 'new';
        this.todoForm = this.createTodoForm();

        this._todoService.onCurrentTodoChanged.next([this.todo, 'new']);
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
   * Create todos form
   */
  createTodoForm(): FormGroup {
    return this._formBuilder.group({
      id: [this.todo.id],
      title: [this.todo.title],
      notes: [this.todo.notes],
      startDate: [this.todo.startDate],
      dueDate: [this.todo.dueDate],
      completed: [this.todo.completed],
      starred: [this.todo.starred],
      important: [this.todo.important],
      deleted: [this.todo.deleted],
      tags: [this.todo.tags]
    });
  }

  /**
   * Toggle star
   */
  toggleStar(event): void {
    event.stopPropagation();
    this.todo.toggleStar();
    this._todoService.updateTodo(this.todo);
  }

  /**
   * Toggle important
   */
  toggleImportant(event): void {
    event.stopPropagation();
    this.todo.toggleImportant();
    this._todoService.updateTodo(this.todo);
  }

  /**
   * Toggle Completed
   */
  toggleCompleted(event): void {
    event.stopPropagation();
    this.todo.toggleCompleted();
    this._todoService.updateTodo(this.todo);
  }

  /**
   * Toggle Deleted
   */
  toggleDeleted(event): void {
    event.stopPropagation();
    this.todo.toggleDeleted();
    this._todoService.updateTodo(this.todo);
  }

  /**
   * Toggle tag on todos
   */
  toggleTagOnTodo(tagId): void {
    this._todoService.toggleTagOnTodo(tagId, this.todo);
  }

  /**
   * Has tag?
   */
  hasTag(tagId): any {
    return this._todoService.hasTag(tagId, this.todo);
  }

  /**
   * Add todos
   */
  addTodo(): void {
    this._todoService.updateTodo(this.todoForm.getRawValue());
  }
}
