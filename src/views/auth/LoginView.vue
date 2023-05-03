<template>
  <LoginPage />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import LoginPage from '@/components/auth/LoginPage.vue';

  export default defineComponent({
    name: 'LoginView',
    components: {
      LoginPage
    }
  });
</script>
