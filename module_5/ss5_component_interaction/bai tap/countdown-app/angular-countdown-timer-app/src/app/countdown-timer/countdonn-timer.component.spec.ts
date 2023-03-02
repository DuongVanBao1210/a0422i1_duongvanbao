import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdonnTimerComponent } from './countdonn-timer.component';

describe('CountdonnTimerComponent', () => {
  let component: CountdonnTimerComponent;
  let fixture: ComponentFixture<CountdonnTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdonnTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdonnTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
