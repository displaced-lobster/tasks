<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <q-btn v-show="show" flat class="q-mx-md" color="primary" label="Undo" @click="popStack" />
  </transition>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'undo-button',
  data() {
    return {
      showTimer: undefined,
      value: false,
    }
  },
  computed: {
    ...mapState('tasks', ['undoStack']),
    show() {
      return this.value && this.undoStack.length
    }
  },
  watch: {
    undoStack() {
      if (this.showTimer) {
        clearTimeout(this.showTimer)
      }

      this.value = true
      this.showTimer = setTimeout(() => { this.value = false }, 3000)
    }
  },
  methods: {
    ...mapMutations('tasks', ['popStack'])
  }
}
</script>
