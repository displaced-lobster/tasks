import Vue from 'vue'
import { LocalStorage } from 'quasar'

export function addTask(state, task) {
  state.tasks.push({ ...task, complete: 0 })

  LocalStorage.set('tasks', state.tasks)
}

export function deleteTask(state, task) {
  const index = state.tasks.findIndex(t => t.id === task.id)

  state.tasks.splice(index, 1)
  state.undoStack.push({ index, task })

  // LocalStorage.set('tasks', state.tasks)
}

export function popStack(state) {
  const { index, task } = state.undoStack.pop()

  if (task) {
    state.tasks.splice(index, 0, task)

    LocalStorage.set('tasks', state.tasks)
  }
}

export function resetTasks(state) {
  state.tasks.forEach(task => {
    task.complete = 0
  })

  LocalStorage.set('tasks', state.tasks)
}

export function updateTask(state, task) {
  const i = state.tasks.findIndex(t => t.id === task.id)

  Vue.set(state.tasks, i, task)
  LocalStorage.set('tasks', state.tasks)
}
