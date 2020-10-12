import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedChannelsListComponent } from './saved-channels-list.component';

describe('SavedChannelsListComponent', () => {
  let component: SavedChannelsListComponent;
  let fixture: ComponentFixture<SavedChannelsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedChannelsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedChannelsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
