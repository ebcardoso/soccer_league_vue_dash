<template>
  <Form 
    @save-form="saveModel" 
    :viewmodel=viewmodel 
    :modelFields=modelFields />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UsersViewmodel from "@/viewmodels/UsersViewmodel"
import Form from '@/components/form/Form.vue'
import { User } from '@/models/User'

export default defineComponent({
  name: 'UsersCreateView',
  components: {
    Form,
  },
  data() {
    return {
      viewmodel: new UsersViewmodel(),
      name: '',
      modelFields: { } as User
    }
  },
  methods: {
    async saveModel() {
      await this.viewmodel?.saveModel(this.modelFields).then(() => {
        const destination_route = this.viewmodel?.getRouteIndex();
        this.$router.push({ name: destination_route });
      }).catch(response => {
        console.log(response.data);
      });
    }
  }
})
</script>
