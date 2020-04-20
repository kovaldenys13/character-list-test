import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceshipListComponent } from './spaceship-list.component';

describe('SpaceshipListComponent', () => {
  let component: SpaceshipListComponent;
  let fixture: ComponentFixture<SpaceshipListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceshipListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceshipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
