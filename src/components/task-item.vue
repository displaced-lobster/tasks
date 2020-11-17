<template>
  <q-slide-item right-color="negative" @right="deleteTask">
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
          <q-btn
            v-for="i in task.complete"
            flat
            round
            color="primary"
            icon="fas fa-circle"
            :key="i"
            @click="decrementReps"
          />
          <q-btn
            v-for="i in remainder"
            flat
            round
            color="primary"
            icon="far fa-circle"
            :key="task.complete + i"
            @click="incrementReps"
          />
        </q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-circular-progress color="primary" size="50px" :show-value="complete" :value="progress">
          <transition
            appear
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
          >
            <q-icon v-show="complete" color="primary" name="fas fa-check-circle" size="lg" />
          </transition>
        </q-circular-progress>
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
    complete() {
      return this.remainder === 0
    },
    progress() {
      return (this.task.complete / (this.remainder + this.task.complete)) * 100
    },
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
      const task = { ...this.task }

      task.complete += 1
      this.$store.commit('tasks/updateTask', task)
    },
  }
}
</script>
