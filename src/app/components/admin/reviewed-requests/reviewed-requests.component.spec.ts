import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewedRequestsComponent } from './reviewed-requests.component';

describe('ReviewedRequestsComponent', () => {
  let component: ReviewedRequestsComponent;
  let fixture: ComponentFixture<ReviewedRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewedRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewedRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
