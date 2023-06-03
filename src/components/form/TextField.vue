<template>
  <label for="setting-input-1" class="form-label"> {{field_locals?.label}} </label>
  <input type="text" class="form-control" :id="field_locals?.name" :name="field_locals?.name" :required="field_locals?.required">
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TextField',
  props: {
    field_locals:Object,
  }
})
</script>
