import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentContarctComponent } from './government-contarct.component';

describe('GovernmentContarctComponent', () => {
  let component: GovernmentContarctComponent;
  let fixture: ComponentFixture<GovernmentContarctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovernmentContarctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernmentContarctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
