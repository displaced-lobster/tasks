<template>
  <q-slide-item @right="deleteTask">
    <template v-slot:right>
      <q-icon name="far fa-trash-alt" />
    </template>
    <q-item>
      <q-item-section>
        <q-item-label>
          {{ task.name }}
        </q-item-label>
        <q-item-label caption lines="3">
          {{ task.description }}
        </q-item-label>
        <q-item-label>
          <q-chip
            v-for="i in task.complete"
            clickable
            color="transparent"
            :key="i"
            @click="decrementReps"
          >
            <q-icon color="primary" name="fas fa-circle" />
          </q-chip>
          <q-chip
            v-for="i in remainder"
            clickable
            color="transparent"
            :key="task.complete + i"
            @click="incrementReps"
          >
            <q-icon color="primary" name="far fa-circle" />
          </q-chip>
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-slide-item>
</template>

<script>
export default {
  name: 'task-item',
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  computed: {
    remainder() {
      return this.task.reps - this.task.complete
    }
  },
  methods: {
    deleteTask() {
      this.$store.commit('tasks/deleteTask', this.task)
    },

    decrementReps() {
      const task = { ...this.task }

      task.complete -= 1
      this.$store.commit('tasks/updateTask', task)
    },

    incrementReps() {
      console.log('Clicked')
      const task = { ...this.task }

      task.complete += 1
      this.$store.commit('tasks/updateTask', task)
    },
  }
}
</script>
