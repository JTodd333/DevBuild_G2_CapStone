import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetrxviewDetailComponent } from './petrxview-detail.component';

describe('PetrxviewDetailComponent', () => {
  let component: PetrxviewDetailComponent;
  let fixture: ComponentFixture<PetrxviewDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetrxviewDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetrxviewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
