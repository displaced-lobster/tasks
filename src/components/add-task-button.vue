<template>
  <q-btn flat class="q-ma-md" color="primary" icon="far fa-plus-square" size="lg" @click="show = true">
    <q-dialog v-model="show" full-width>
      <q-card>
        <q-card-section>
          <q-input v-model="name" outlined placeholder="Name" />
        </q-card-section>
        <q-card-section>
          <q-input v-model="description" outlined placeholder="Description" type="textarea" />
        </q-card-section>
        <q-card-section>
          <q-badge color="primary">
            Reps: {{ reps }}
          </q-badge>
          <q-slider v-model="reps" :min="1" :max="20" />
        </q-card-section>
        <q-card-actions>
          <q-btn
            no-caps
            class="full-width"
            color="primary"
            label="Add Task"
            @click="addTask"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-btn>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'add-task-button',
  data() {
    return {
      description: '',
      name: '',
      reps: 1,
      show: false,
    }
  },
  methods: {
    addTask() {
      const task = {
        id: uuidv4(),
        name: this.name,
        description: this.description,
        reps: this.reps,
      }

      this.$store.commit('tasks/addTask', task)

      this.description = ''
      this.name = ''
      this.reps = 1

      this.show = false
    }
  }
}
</script>
