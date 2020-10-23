import { fakeAsync, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let todoService: TodoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [TodoService],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    todoService = TestBed.inject(TodoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should ', fakeAsync(() => {
    const mockTodos = [];

    todoService.getTodos().then((todos) => {
      expect(todos).toEqual(mockTodos);
    });

    httpTestingController
      .expectOne({
        method: 'GET',
        url: 'api/todo'
      })
      .flush(mockTodos);
  }));
});
