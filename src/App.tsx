import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { InboxTab } from './components/InboxTab';
import { CalendarTab } from './components/CalendarTab';
import { GoalsTab } from './components/GoalsTab';
import { CircleTab } from './components/CircleTab';
import type { Task, Goal } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState('inbox');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: '1',
      title: 'Launch MVP Product',
      description: 'Complete and launch the minimum viable product for our new service',
      specific: 'Develop and release core features of the product',
      measurable: 'Complete all critical features and pass QA testing',
      attainable: 'Team has necessary resources and skills',
      relevant: 'Aligns with company growth strategy',
      timeBound: new Date('2024-04-30'),
      tasks: [
        { id: 't1', title: 'Design System Implementation', type: 'actionable', status: 'task', created: new Date() },
        { id: 't2', title: 'Core Features Development', type: 'actionable', status: 'task', created: new Date() },
        { id: 't3', title: 'User Testing', type: 'actionable', status: 'task', created: new Date() }
      ],
      progress: 65
    },
    {
      id: '2',
      title: 'Improve Fitness',
      description: 'Get in better shape through consistent exercise',
      specific: 'Establish regular workout routine',
      measurable: 'Track workout sessions and progress',
      attainable: 'Start with manageable workout plan',
      relevant: 'Improves health and energy levels',
      timeBound: new Date('2024-06-30'),
      tasks: [
        { id: 't4', title: 'Morning Workouts', type: 'actionable', status: 'task', created: new Date() },
        { id: 't5', title: 'Meal Planning', type: 'actionable', status: 'task', created: new Date() }
      ],
      progress: 30
    }
  ]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title: text,
      type: 'actionable',
      status: 'task',
      created: new Date()
    };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const renderTab = () => {
    switch (activeTab) {
      case 'inbox':
        return <InboxTab onAddTask={addTask} />;
      case 'calendar':
        return (
          <CalendarTab 
            tasks={tasks} 
            goals={goals}
            onRemoveTask={removeTask}
          />
        );
      case 'goals':
        return <GoalsTab goals={goals} setGoals={setGoals} />;
      case 'circle':
        return <CircleTab />;
      default:
        return <div>Tab content coming soon</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="container mx-auto py-6">
        {renderTab()}
      </main>
    </div>
  );
}