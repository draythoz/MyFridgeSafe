import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgeSafeReadComponent } from './fridge-safe-read.component';

describe('FridgeSafeReadComponent', () => {
  let component: FridgeSafeReadComponent;
  let fixture: ComponentFixture<FridgeSafeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FridgeSafeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FridgeSafeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
