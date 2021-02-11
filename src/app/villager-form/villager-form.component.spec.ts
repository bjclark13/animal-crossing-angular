import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagerFormComponent } from './villager-form.component';

describe('VillagerFormComponent', () => {
  let component: VillagerFormComponent;
  let fixture: ComponentFixture<VillagerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillagerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
