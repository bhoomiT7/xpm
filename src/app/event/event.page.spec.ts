import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { EventPage } from './event.page';

describe('EventPage', () => {
  let component: EventPage;
  let fixture: ComponentFixture<EventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventPage], // Declare the component being tested
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(EventPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
