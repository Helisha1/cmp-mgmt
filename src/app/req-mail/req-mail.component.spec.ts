import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqMailComponent } from './req-mail.component';

describe('ReqMailComponent', () => {
  let component: ReqMailComponent;
  let fixture: ComponentFixture<ReqMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
