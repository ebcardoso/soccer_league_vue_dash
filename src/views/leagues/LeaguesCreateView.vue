<template>
  <Form 
    @save-form="saveModel" 
    :viewmodel=viewmodel 
    :modelFields=modelFields />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LeaguesViewmodel from "@/viewmodels/LeaguesViewmodel"
import Form from '@/components/form/Form.vue'
import { League } from '@/models/League'

export default defineComponent({
  name: 'LeagueCreateView',
  components: {
    Form,
  },
  props: {
    alerts:Array
  },
  emits: [
    'update:setPageTitle'
  ],
  data() {
    return {
      viewmodel: new LeaguesViewmodel(),
      name: '',
      modelFields: { } as League
    }
  },
  mounted() {
    const pageTitle = this.viewmodel?.getTitleCreate();
    this.$emit('update:setPageTitle', pageTitle);
  },
  methods: {
    async saveModel() {
      await this.viewmodel?.saveModel(this.modelFields).then(() => {
        this.viewmodel?.createAlert(
          this.alerts,
          'success',
          'Success: ',
          'League created.'
        );
        
        const destination_route = this.viewmodel?.getRouteIndex();
        this.$router.push({ name: destination_route });
      }).catch(response => {
        console.log(response);
        this.viewmodel?.createAlert(
          this.alerts,
          'danger',
          'Failure: ',
          'Error to create league'
        );
      });
    }
  }
})
</script>
