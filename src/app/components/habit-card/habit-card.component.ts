import {Component, NgModule,OnInit} from '@angular/core';
import { Input } from '@angular/core';
import Habit from '../../../models/Habit';
import { HabitService } from '../../services/habits.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-habit-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habit-card.component.html',
  styleUrl: './habit-card.component.css'
})
export class HabitCardComponent {
  @Input() habit!: Habit;

  constructor(private habitService: HabitService) {}

  toggle(taskId: string) {
    this.habitService.toggleTask(this.habit.id, taskId);
  }

  delete() {
    this.habitService.deleteHabit(this.habit.id);
  }
}
