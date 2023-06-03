<template>
  <input class="form-check-input" type="checkbox" :name="field_locals?.name">
  <label class="form-check-label" for="settings-checkbox-1"> <b>{{field_locals?.label}}</b> </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BooleanField',
  props: {
    field_locals:Object,
  }
})
</script>
