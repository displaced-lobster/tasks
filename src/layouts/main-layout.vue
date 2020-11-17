<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>
          Physio
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="drawer">
      <q-list>
        <q-item v-ripple clickable @click="resetTasks">
          <q-item-section avatar>
            <q-icon name="fas fa-th-list" />
          </q-item-section>
          <q-item-section>
            Reset All
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
      <q-page-sticky position="bottom-left">
        <undo-button />
      </q-page-sticky>
      <q-page-sticky position="bottom-right">
        <add-task-button />
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapMutations } from 'vuex'
import AddTaskButton from 'components/add-task-button'
import UndoButton from 'components/undo-button'

export default {
  name: 'main-layout',
  components: { AddTaskButton, UndoButton },
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    ...mapMutations('tasks', ['resetTasks'])
  }
}
</script>
