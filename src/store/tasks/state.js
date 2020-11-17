import { LocalStorage } from 'quasar'

const tasks = LocalStorage.has('tasks') ? LocalStorage.getItem('tasks') : []

export default function () {
  return {
    tasks,
    undoStack: [],
  }
}
