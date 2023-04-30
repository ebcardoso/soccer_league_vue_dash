<template>
  <header class="app-header fixed-top">
    <HeaderInner />
      
    <HeaderSidepanel />
  </header><!--//app-header-->
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import HeaderInner from "@/components/layout/HeaderInner.vue"
  import HeaderSidepanel from "@/components/layout/HeaderSidepanel.vue"

  export default defineComponent({
    name: "Header",
    components: {
      HeaderInner,
      HeaderSidepanel
    }
  })
</script>
