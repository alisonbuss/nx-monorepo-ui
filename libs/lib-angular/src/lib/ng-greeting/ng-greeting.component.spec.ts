
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGreetingComponent } from './ng-greeting.component';

describe('NgGreetingComponent', () => {
  let component: NgGreetingComponent;
  let fixture: ComponentFixture<NgGreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgGreetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});