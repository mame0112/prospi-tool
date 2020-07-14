import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatterOrderComponent } from './batter-order.component';

describe('BatterOrderComponent', () => {
  let component: BatterOrderComponent;
  let fixture: ComponentFixture<BatterOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatterOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatterOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
