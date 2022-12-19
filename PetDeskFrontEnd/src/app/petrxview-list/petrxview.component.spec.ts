import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetrxviewComponent } from './petrxview.component';

describe('PetrxviewComponent', () => {
  let component: PetrxviewComponent;
  let fixture: ComponentFixture<PetrxviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetrxviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetrxviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
