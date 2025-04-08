import {Component, NgModule,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common'; //
import {HeaderComponent} from '../../components/header/header.component';
import {HabitCardComponent} from '../../components/habit-card/habit-card.component';
import {CreateHabitComponent} from '../../components/create-habit/create-habit.component';
import {HabitService} from '../../services/habits.service';
import Habit from '../../../models/Habit';


@Component({
  selector: 'app-habits',
  standalone: true,
  imports: [
    HeaderComponent,
    HabitCardComponent,
    CreateHabitComponent,
    CommonModule
  ],
  templateUrl: './habits.component.html',
  styleUrl: './habits.component.css'
})
export class HabitsComponent {
  habits: Habit[] = [];

  constructor(private habitService: HabitService) {}

  ngOnInit() {
    this.habits = this.habitService.getHabits();
  }
}
