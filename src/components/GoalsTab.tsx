import React, { useState } from 'react';
import { Target, ChevronDown, ChevronUp, CheckCircle2, Circle } from 'lucide-react';
import type { Goal } from '../types';

interface GoalsTabProps {
  goals: Goal[];
  setGoals: (goals: Goal[]) => void;
}

export function GoalsTab({ goals, setGoals }: GoalsTabProps) {
  const [expandedGoal, setExpandedGoal] = useState<string | null>(null);

  const toggleGoal = (goalId: string) => {
    setExpandedGoal(expandedGoal === goalId ? null : goalId);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Target className="h-6 w-6 text-indigo-600" />
          Goals & Projects
        </h1>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          New Goal
        </button>
      </div>

      <div className="space-y-4">
        {goals.map(goal => (
          <div key={goal.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div 
              className="p-4 flex items-center justify-between cursor-pointer"
              onClick={() => toggleGoal(goal.id)}
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{goal.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{goal.description}</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-32 h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-2 bg-indigo-600 rounded-full"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600">{goal.progress}%</span>
                </div>
                {expandedGoal === goal.id ? 
                  <ChevronUp className="h-5 w-5 text-gray-400" /> : 
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                }
              </div>
            </div>

            {expandedGoal === goal.id && (
              <div className="border-t border-gray-200 p-4">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-medium mb-2">Specific</h4>
                    <p className="text-sm text-gray-600">{goal.specific}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Measurable</h4>
                    <p className="text-sm text-gray-600">{goal.measurable}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Attainable</h4>
                    <p className="text-sm text-gray-600">{goal.attainable}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Relevant</h4>
                    <p className="text-sm text-gray-600">{goal.relevant}</p>
                  </div>
                </div>

                <h4 className="font-medium mb-3">Tasks</h4>
                <div className="space-y-2">
                  {goal.tasks.map(task => (
                    <div key={task.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                      {task.status === 'task' ? 
                        <Circle className="h-5 w-5 text-gray-400" /> :
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      }
                      <span className="text-sm">{task.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}