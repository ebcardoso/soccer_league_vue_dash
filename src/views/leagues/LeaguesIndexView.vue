<template>
  <IndexPage :viewmodel=viewmodel :alerts=alerts />
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import LeaguesViewmodel from '@/viewmodels/LeaguesViewmodel'
import IndexPage from '@/components/index/IndexPage.vue'

export default defineComponent({
  name: 'LeaguesIndexView',
  components: {
    IndexPage,
  },
  props: {
    alerts:Array,
  },
  emits: [
    'update:setPageTitle'
  ],
  data() {
    return {
      viewmodel: new LeaguesViewmodel()
    }
  },
  mounted() {
    const pageTitle = this.viewmodel?.getTitleIndex();
    this.$emit('update:setPageTitle', pageTitle);
  },
})
</script>
