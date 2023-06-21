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
  emits: [
    'update:setPageTitle'
  ],
  data() {
    return {
      viewmodel: new TeamsViewmodel()
    }
  },
  mounted() {
    const pageTitle = this.viewmodel?.getTitleIndex();
    this.$emit('update:setPageTitle', pageTitle);
  },
})
</script>
