<template>
  <div class="row g-3 mb-4 align-items-center justify-content-between">
    <div class="col-auto">
      <h1 class="app-page-title mb-0">{{titlePage}}</h1>
    </div>
  </div> <!--//row-->

  <form class="settings-form" @submit.prevent="submitForm">
    <div class="row">
      <div v-for="(group, index) in viewmodel?.fieldGroups()" :key="index" :class="['col-12', `col-md-${columnSize}`]">
        <div class="app-card app-card-settings shadow-sm p-4">
          <div class="col-auto">
            <h3 class="app-card-title">{{group.title}}</h3>
          </div>
          <!--//col-->
          <hr/>
          <div v-for="(field, index2) in (group.fields)" :key="index2" :class="['mb-3', field.type==='boolean' ? 'form-check' : '']">
            <BooleanField v-if="field.type === 'boolean'"
              :modelValue="modelFields[field.name]"
              @update:inputBooleanValue="newValue => modelFields[field.name] = newValue"
              :fieldLocals=field />
            <TextField v-else
              :modelValue="modelFields[field.name]"
              @update:inputTextValue="newValue => modelFields[field.name] = newValue"
              :fieldLocals=field />
          </div>
        </div>
        <!--//app-card-->
        <br/>
      </div>     
    </div>
    
    <div class="row" align="right">
      <div class="col-12 col-md-12">
        <div class="app-card app-card-settings shadow-sm p-4" >
          <button type="submit" class="btn app-btn-primary" style="align:right">Save</button>
        </div>
      </div>
    </div>
  </form>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BooleanField from '@/components/form/BooleanField.vue';
import TextField from '@/components/form/TextField.vue';

export default defineComponent({
  name: 'Form',
  components: {
    BooleanField,
    TextField
  },
  props: {
    viewmodel:Object,
    modelFields:Object
  },
  emits: ['saveForm'],
  data() {
    return {
      titlePage: this.viewmodel?.getTitleCreate(),
      columnSize: 12/this.viewmodel?.fieldGroups().length
    }
  },
  methods: {
    submitForm() {
      this.$emit('saveForm');     
    }
  }
})
</script>
