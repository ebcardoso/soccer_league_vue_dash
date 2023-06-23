<template>
  <Form
    @save-form="editModel"
    :viewmodel=viewmodel
    :modelFields=model />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CompetitionsViewmodel from '@/viewmodels/CompetitionsViewmodel'
import Form from '@/components/form/Form.vue'
import { Competition } from '@/models/Competition'

export default defineComponent({
  name: 'UsersEditView',
  components: {
    Form
  },
  emits: [
    'update:setPageTitle'
  ],
  data() {
    return {
      viewmodel: new CompetitionsViewmodel(),
      model_id: '',
      model: {} as Competition
    }
  },
  mounted() {
    const pageTitle = this.viewmodel?.getTitleEdit();
    this.$emit('update:setPageTitle', pageTitle);

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
