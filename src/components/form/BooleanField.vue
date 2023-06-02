<template>
  <input class="form-check-input" type="checkbox" id="settings-checkbox-1">
  <label class="form-check-label" for="settings-checkbox-1"> <b>{{label}}</b> </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BooleanField',
  props: {
    label:String,
  }
})
</script>
