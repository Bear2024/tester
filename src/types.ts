export interface Task {
  id: string;
  title: string;
  type: 'actionable' | 'reference';
  status: 'inbox' | 'task' | 'goal';
  created: Date;
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  specific: string;
  measurable: string;
  attainable: string;
  relevant: string;
  timeBound: Date;
  tasks: Task[];
  progress: number;
}

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  taskId?: string;
}

export interface CircleMember {
  id: string;
  name: string;
  avatar: string;
  completedTasks: number;
  activeGoals: number;
}