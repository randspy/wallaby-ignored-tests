import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotExecutedComponent } from './not-executed.component';

describe('NotExecutedComponent', () => {
  let component: NotExecutedComponent;
  let fixture: ComponentFixture<NotExecutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotExecutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotExecutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
