<template>
  <div flat class="elevation-2">
    <v-toolbar text-xs-right flat dense class="grey darken-3" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <slot name="action" />
    </v-toolbar>
    <div class="pl-4 pr-4 pt-4 pb-2">
      <slot>
        No slot content defined.
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>

</style>
