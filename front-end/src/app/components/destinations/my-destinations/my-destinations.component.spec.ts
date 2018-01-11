import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDestinationsComponent } from './my-destinations.component';

describe('MyDestinationsComponent', () => {
  let component: MyDestinationsComponent;
  let fixture: ComponentFixture<MyDestinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDestinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
