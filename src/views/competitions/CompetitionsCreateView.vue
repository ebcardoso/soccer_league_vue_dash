<template>
  <Form 
    @save-form="saveModel" 
    :viewmodel=viewmodel 
    :modelFields=modelFields />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CompetitionsViewmodel from '@/viewmodels/CompetitionsViewmodel'
import Form from '@/components/form/Form.vue'
import { Competition } from '@/models/Competition'

export default defineComponent({
  name: 'TeamsCreateView',
  components: {
    Form,
  },
  data() {
    return {
      viewmodel: new CompetitionsViewmodel(),
      name: '',
      modelFields: { } as Competition
    }
  },
  methods: {
    async saveModel() {
      await this.viewmodel?.saveModel(this.modelFields).then(() => {
        const destination_route = this.viewmodel?.getRouteIndex();
        this.$router.push({ name: destination_route });
      }).catch(() => {
        this.viewmodel?.alertMessages.push({
          title: 'Failure: ',
          message: 'Error on create competition',
          type: 'danger' //success, warning or danger
        });
      });
    }
  }
})
</script>
