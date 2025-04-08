export default interface Habit {
  id: string;
  name: string;
  tasks: HabitTask[];
}

export interface HabitTask {
  id: string;
  title: string;
  completed: boolean;
}
