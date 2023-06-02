<template>
  <label for="setting-input-1" class="form-label"> {{label}} </label>
  <input type="text" class="form-control" id="setting-input-1" :required="required">
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TextField',
  props: {
    label:String,
    required:Boolean
  }
})
</script>
