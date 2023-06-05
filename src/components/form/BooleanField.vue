<template>
  <input class="form-check-input" type="checkbox" @input="emitValue" />
  <label class="form-check-label"> <b>{{fieldLocals?.label}}</b> </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BooleanField',
  props: {
    fieldLocals:Object,
    modelValue:Boolean
  },
  emits: ['update:inputBooleanValue'],
  methods: {
    emitValue(e:any) {
      let value = e.target?.checked || false;
      this.$emit('update:inputBooleanValue', value);
    }
  }
})
</script>
