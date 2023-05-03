<template>
  <PasswordForgot />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import PasswordForgot from '@/components/auth/PasswordForgot.vue';

  export default defineComponent({
    name: 'PasswordForgotView',
    components: {
      PasswordForgot
    }
  });
</script>