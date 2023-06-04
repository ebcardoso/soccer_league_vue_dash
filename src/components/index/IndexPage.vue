<template>
  <div class="row g-3 mb-4 align-items-center justify-content-between">
    <div class="col-auto">
      <h1 class="app-page-title mb-0">{{titlePage}}</h1>
    </div>
  </div> <!--//row-->

  <Datatable :datatable=datasource />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Datatable from "@/components/table/Datatable.vue"

export default defineComponent({
  name: 'IndexPage',
  components: {
    Datatable,  
  },
  props: {
    viewmodel:Object,
  },
  data() {
    return {
      titlePage: this.viewmodel?.getTitleIndex(),
      datasource: this.viewmodel?.getDatatable(),
    }
  }
})
</script>
