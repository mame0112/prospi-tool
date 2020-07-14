import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateBatterComponent } from './candidate-batter.component';

describe('CandidateBatterComponent', () => {
  let component: CandidateBatterComponent;
  let fixture: ComponentFixture<CandidateBatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateBatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateBatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
