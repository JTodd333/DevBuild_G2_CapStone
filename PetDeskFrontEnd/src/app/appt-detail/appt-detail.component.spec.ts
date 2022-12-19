import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptDetailComponent } from './appt-detail.component';

describe('ApptDetailComponent', () => {
  let component: ApptDetailComponent;
  let fixture: ComponentFixture<ApptDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApptDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApptDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
