<template>
  <IndexPage :viewmodel=viewmodel />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import TeamsViewmodel from "@/viewmodels/TeamsViewmodel"
import IndexPage from "@/components/index/IndexPage.vue"

export default defineComponent({
  name: 'TeamsIndexView',
  components: {
    IndexPage,
  },
  data() {
    return {
      viewmodel: new TeamsViewmodel()
    }
  }
})
</script>
