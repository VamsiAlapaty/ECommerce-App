import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDataComponent } from './todo-data.component';

describe('TodoDataComponent', () => {
  let component: TodoDataComponent;
  let fixture: ComponentFixture<TodoDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoDataComponent]
    });
    fixture = TestBed.createComponent(TodoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
