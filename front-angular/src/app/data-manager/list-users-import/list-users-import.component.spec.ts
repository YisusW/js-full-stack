import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsersImportComponent } from './list-users-import.component';

describe('ListUsersImportComponent', () => {
  let component: ListUsersImportComponent;
  let fixture: ComponentFixture<ListUsersImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUsersImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsersImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
