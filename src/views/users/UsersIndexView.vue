<template>
  <IndexPage :viewmodel=viewmodel />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import UsersViewmodel from "@/viewmodels/UsersViewmodel"
import IndexPage from "@/components/index/IndexPage.vue"

export default defineComponent({
  name: 'UsersIndexView',
  components: {
    IndexPage,
  },
  data() {
    return {
      viewmodel: new UsersViewmodel()
    }
  }
})
</script>
