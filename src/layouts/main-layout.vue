<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer v-model="drawer">
      <q-btn no-caps class="full-width" color="primary" label="Reset All" @click="resetTasks" />
    </q-drawer>
    <q-page-container>
      <router-view />
      <q-page-sticky position="bottom-right">
        <add-task-button />
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapMutations } from 'vuex'
import AddTaskButton from 'components/add-task-button'

export default {
  name: 'main-layout',
  components: { AddTaskButton },
  methods: {
    ...mapMutations('tasks', ['resetTasks'])
  }
}
</script>
