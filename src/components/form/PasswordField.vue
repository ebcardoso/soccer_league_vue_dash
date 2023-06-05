<template>
  <label class="form-label"> {{fieldLocals?.label}} </label>
  <input type="password" class="form-control" @input="emitValue" :required="fieldLocals?.required" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PasswordField',
  props: {
    fieldLocals:Object,
    modelValue:String
  },
  emits: ['update:inputPasswordValue'],
  methods: {
    emitValue(e:any) {
      let value = e.target?.value;
      this.$emit('update:inputPasswordValue', value);
    }
  } 
})
</script>
