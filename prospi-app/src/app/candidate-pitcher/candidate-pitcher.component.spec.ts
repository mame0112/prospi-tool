import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatePitcherComponent } from './candidate-pitcher.component';

describe('CandidatePitcherComponent', () => {
  let component: CandidatePitcherComponent;
  let fixture: ComponentFixture<CandidatePitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatePitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatePitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
