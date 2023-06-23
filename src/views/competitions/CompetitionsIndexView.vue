<template>
  <IndexPage :viewmodel=viewmodel />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import CompetitionsViewmodel from "@/viewmodels/CompetitionsViewmodel"
import IndexPage from "@/components/index/IndexPage.vue"

export default defineComponent({
  name: 'CompetitionsIndexView',
  components: {
    IndexPage,
  },
  emits: [
    'update:setPageTitle'
  ],
  data() {
    return {
      viewmodel: new CompetitionsViewmodel()
    }
  },
  mounted() {
    const pageTitle = this.viewmodel?.getTitleIndex();
    this.$emit('update:setPageTitle', pageTitle);
  },
})
</script>
