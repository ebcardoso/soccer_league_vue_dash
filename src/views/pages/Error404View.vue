<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-12 col-md-11 col-lg-7 col-xl-6 mx-auto">
        <div class="app-branding text-center mb-5">
          <router-link to="/" class="app-logo">
            <img class="logo-icon me-2" src="/images/app-logo.svg" alt="logo">
            <span class="logo-text">PORTAL</span>
          </router-link>
        </div><!--//app-branding-->  
        <div class="app-card p-5 text-center shadow-sm">
          <h1 class="page-title mb-4">404<br><span class="font-weight-light">Page Not Found</span></h1>
          <div class="mb-4">
            Sorry, we can't find the page you're looking for. 
          </div>
          <router-link to="/" class="btn app-btn-primary">
            Go to home page
          </router-link>
        </div>
      </div><!--//col-->
    </div><!--//row-->
  </div><!--//container-->
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: "Error404View",
    mounted() {
      document.body.classList.add('app-404-page');
    },
  })
</script>
