<template>
  <q-page>
    <task-list />
  </q-page>
</template>

<script>
import TaskList from 'components/task-list'

export default {
  name: 'page-index',
  components: { TaskList },
}
</script>
