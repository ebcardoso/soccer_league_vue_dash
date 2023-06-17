<template>
  <Form 
    @save-form="editModel" 
    :viewmodel=viewmodel 
    :modelFields=model />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TeamsViewmodel from '@/viewmodels/TeamsViewmodel'
import Form from '@/components/form/Form.vue'
import { Team } from '@/models/Team'

export default defineComponent({
  name: 'UsersEditView',
  components: {
    Form
  },
  data() {
    return {
      viewmodel: new TeamsViewmodel(),
      model_id: '',
      model: {} as Team
    }
  },
  mounted() {
    this.model_id = this.$route?.params?.id as string;
    this.setModel(this.model_id);
  },
  methods: {
    async setModel(id:string) {
      await this.viewmodel?.findModel(id).then(response => {
        this.model = response.data;
        console.log(this.model);
      }).catch(() => {
        const destination_route = this.viewmodel?.getRouteIndex();
        this.$router.push({ name: destination_route });
      });
    },
    async editModel() {
      await this.viewmodel?.editModel(this.model).then(() => {
        const destination_route = this.viewmodel?.getRouteIndex();
        this.$router.push({ name: destination_route });
      }).catch(() => {
        this.viewmodel?.alertMessages.push({
          title: 'Failure: ',
          message: 'Error on edit team',
          type: 'danger' //success, warning or danger
        });
      });
    }
  }
})
</script>
