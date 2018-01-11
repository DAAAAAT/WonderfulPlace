import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishDestinationComponent } from './publish-destination.component';

describe('PublishDestinationComponent', () => {
  let component: PublishDestinationComponent;
  let fixture: ComponentFixture<PublishDestinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishDestinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
