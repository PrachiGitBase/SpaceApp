import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacelistComponent } from './spacelist.component';

describe('SpacelistComponent', () => {
  let component: SpacelistComponent;
  let fixture: ComponentFixture<SpacelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
