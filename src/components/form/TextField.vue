<template>
  <label class="form-label"> {{fieldLocals?.label}} </label>
  <input type="text" class="form-control" :value="modelValue" @input="emitValue" :required="fieldLocals?.required" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TextField',
  props: {
    fieldLocals:Object,
    modelValue:String
  },
  emits: ['update:inputTextValue'],
  methods: {
    emitValue(e:any) {
      let value = e.target?.value;
      this.$emit('update:inputTextValue', value);
    }
  } 
})
</script>
