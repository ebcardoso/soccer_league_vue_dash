<template>
  <div class="row g-3 mb-4 align-items-center justify-content-between">
    <div class="col-auto">
      <h1 class="app-page-title mb-0">{{titlePage}}</h1>
    </div>
  </div> <!--//row-->

  <div class="row">
    <div v-for="(group, index) in viewmodel?.fieldGroups()" :key="index" :class="['col-12', `col-md-${columnSize}`]">
      <div class="app-card app-card-settings shadow-sm p-4">

        <div class="col-auto">
          <h3 class="app-card-title">{{group.title}}</h3>
        </div>
        <!--//col-->
        
        <hr/>
        
      </div>
      <!--//app-card-->
      <br/>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Form',
  components: {

  },
  props: {
    viewmodel:Object,
  },
  data() {
    return {
      titlePage: this.viewmodel?.getTitleCreate(),
      columnSize: 12/this.viewmodel?.fieldGroups().length
    }
  },
})
</script>
