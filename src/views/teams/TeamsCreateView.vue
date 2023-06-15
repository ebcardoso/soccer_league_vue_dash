<template>
  <Form 
    @save-form="saveModel" 
    :viewmodel=viewmodel 
    :modelFields=modelFields />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TeamsViewmodel from "@/viewmodels/TeamsViewmodel"
import Form from '@/components/form/Form.vue'
import { Team } from '@/models/Team'

export default defineComponent({
  name: 'TeamsCreateView',
  components: {
    Form,
  },
  data() {
    return {
      viewmodel: new TeamsViewmodel(),
      name: '',
      modelFields: { } as Team
    }
  },
  methods: {
    async saveModel() {
      await this.viewmodel?.saveModel(this.modelFields).then(() => {
        const destination_route = this.viewmodel?.getRouteIndex();
        this.$router.push({ name: destination_route });
      });
    }
  }
})
</script>
