import {Component, NgModule,OnInit} from '@angular/core';
import { HabitService } from '../../services/habits.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-create-habit',
  standalone: true,
  imports: [
    FormsModule,CommonModule
  ],
  templateUrl: './create-habit.component.html',
  styleUrl: './create-habit.component.css'
})
export class CreateHabitComponent {
  title = '';
  tasks: string[] = [''];

  constructor(private habitService: HabitService) {}

  addTask() {
    this.tasks.push('');
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  createHabit() {
    if (!this.title.trim() || this.tasks.some(t => !t.trim())) return;
    this.habitService.createHabit(this.title, this.tasks);
    this.title = '';
    this.tasks = [''];
  }

}
