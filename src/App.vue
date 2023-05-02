<template>  
  <div v-if="currentRouteName == 'error404View'">
    <router-view/>
  </div>
  <div v-else>    
    <Header />
    <div class="app-wrapper">
      <div class="app-content pt-3 p-md-3 p-lg-4">
        <div class="container-xl">
          <router-view/>
        </div> <!--//container-fluid-->
      </div> <!--//app-content--> 
      <Footer />
    </div> <!--//app-wrapper-->
  </div>
</template>

<script lang="ts">
  import Header from "@/components/layout/Header.vue"
  import Footer from "@/components/layout/Footer.vue"
  import { defineComponent } from "vue"

  export default defineComponent({
    components:{
      Header,
      Footer
    },
    computed: {
      currentRouteName() {
        return this.$route.name;
      }
    }
  })
</script>
