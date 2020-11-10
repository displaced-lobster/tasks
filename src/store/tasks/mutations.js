import Vue from 'vue'
import { LocalStorage } from 'quasar'

export function addTask(state, task) {
  state.tasks.push({ ...task, complete: 0 })

  LocalStorage.set('tasks', state.tasks)
}

export function deleteTask(state, task) {
  state.tasks = state.tasks.filter(t => t.id !== task.id)

  LocalStorage.set('tasks', state.tasks)
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
