// services/habit.service.ts
import { Injectable } from '@angular/core';
import Habit, {HabitTask} from '../../models/Habit';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  habits: Habit[] = [];

  constructor() {
    this.loadHabits();
  }

  private loadHabits() {
    const stored = localStorage.getItem('habits');
    this.habits = stored ? JSON.parse(stored) : [];
  }

  private saveHabits() {
    localStorage.setItem('habits', JSON.stringify(this.habits));
  }

  getHabits() {
    return this.habits;
  }

  createHabit(title: string, tasks: string[]) {
    const newHabit: Habit = {
      id: this.createId(),
      name: title,
      tasks: tasks.map(task => ({
        id: this.createId(),
        title: task,
        completed: false
      }))
    };
    this.habits.push(newHabit);
    this.saveHabits();
  }

  toggleTask(habitId: string, taskId: string) {
    const habit = this.habits.find(h => h.id === habitId);
    if (!habit) return;
    const task = habit.tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
      this.saveHabits();
      if (habit.tasks.every(t => t.completed)) {
        alert('¡Felicidades! Completaste todas las tareas del día.');
        new Audio('assets/success.mp3').play(); // Asegúrate de tener este archivo
      }
    }
  }

  deleteHabit(id: string) {
    this.habits = this.habits.filter(h => h.id !== id);
    this.saveHabits();
  }

  resetTasks() {
    this.habits.forEach(habit => {
      habit.tasks.forEach(task => task.completed = false);
    });
    this.saveHabits();
  }

  createId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  }
}
