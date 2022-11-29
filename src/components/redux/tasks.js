import {createSlice} from '@reduxjs/toolkit';

import {SUBJECTS} from '../../utils/data';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  reducers: {
    setTasks: (state, action) => {
      return action.payload.tasks;
    },
    addTask: (state, action) => {
      const indexBySubject = state.tasks.findIndex(
        item => item.subject === action.payload.subject,
      );
      const currentSubject = SUBJECTS.find(
        item => item.subject === action.payload.subject,
      );
      if (indexBySubject < 0) {
        state.tasks.push({
          subject: action.payload.subject,
          icon: currentSubject.icon,
          iconColor: currentSubject.icon,
          tasks: [
            {
              title: action.payload.title,
              deadline: action.payload.deadline,
              reminders: action.payload.reminders,
            },
          ],
        });
      } else {
        state.tasks[indexBySubject].tasks.push({
          subject: action.payload.subject,
          title: action.payload.title,
          deadline: action.payload.deadline,
          reminders: action.payload.reminders,
        });
      }
    },
    deleteTask: id => {},
    updateTask: (id, {subject, deadline, title, reminders}) => {},
  },
});

export const setTasks = tasksSlice.actions.setTasks;
export const addTask = tasksSlice.actions.addTask;
export const deleteTask = tasksSlice.actions.deleteTask;
export const updateTask = tasksSlice.actions.updateTask;
export default tasksSlice.reducer;
