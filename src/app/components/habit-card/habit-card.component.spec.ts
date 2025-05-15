import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitCardComponent } from './habit-card.component';
import {HabitTask} from '../../../models/Habit';

describe('HabitCardComponent', () => {
  let component: HabitCardComponent;
  let fixture: ComponentFixture<HabitCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HabitCardComponent);
    component = fixture.componentInstance;

    // Mock para evitar undefined y crash en template
    component.habit = {
      id: "1",
      name: "name",
      tasks: [] as HabitTask[]
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
