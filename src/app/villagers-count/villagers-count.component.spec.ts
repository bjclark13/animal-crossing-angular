import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagersCountComponent } from './villagers-count.component';

describe('VillagersCountComponent', () => {
  let component: VillagersCountComponent;
  let fixture: ComponentFixture<VillagersCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillagersCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagersCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
