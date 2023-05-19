<template>
  <ResetPasswordConfirm :uid=uid :token=token />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ResetPasswordConfirm from '@/components/auth/ResetPasswordConfirm.vue';

export default defineComponent({
  name: 'ResetPasswordConfirmView',
  components: {
    ResetPasswordConfirm
  },
  data() {
    return {
      uid: '',
      token: ''
    }
  },
  mounted() {
    this.uid   = this.$route?.params?.uid   as string;
    this.token = this.$route?.params?.token as string;
  }
})
</script>
