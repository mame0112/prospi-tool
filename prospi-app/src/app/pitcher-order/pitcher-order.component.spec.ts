import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitcherOrderComponent } from './pitcher-order.component';

describe('PitcherOrderComponent', () => {
  let component: PitcherOrderComponent;
  let fixture: ComponentFixture<PitcherOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitcherOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitcherOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
