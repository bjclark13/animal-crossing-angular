import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagerCardComponent } from './villager-card.component';

describe('VillagerCardComponent', () => {
  let component: VillagerCardComponent;
  let fixture: ComponentFixture<VillagerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillagerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
