<template>
  <q-list padding separator>
    <task-item v-for="task in tasks" :key="task.id" :task="task" />
    <q-item v-if="!tasks.length">
      <q-item-section class="text-center text-h6">
        Add a task to begin
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import { mapState } from 'vuex'
import TaskItem from 'components/task-item'

export default {
  name: 'task-list',
  components: { TaskItem },
  computed: {
    ...mapState('tasks', ['tasks'])
  }
}
</script>
