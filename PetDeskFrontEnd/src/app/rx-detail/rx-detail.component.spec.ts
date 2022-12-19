import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxDetailComponent } from './rx-detail.component';

describe('RxDetailComponent', () => {
  let component: RxDetailComponent;
  let fixture: ComponentFixture<RxDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
