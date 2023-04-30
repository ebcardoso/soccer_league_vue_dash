<template>  
  <Header />

  <div class="app-wrapper">
    <div class="app-content pt-3 p-md-3 p-lg-4">
      <div class="container-xl">
        <router-view/>
      </div> <!--//container-fluid-->
    </div> <!--//app-content--> 

    <Footer />
  </div> <!--//app-wrapper-->

</template>

<script lang="ts">
  import Header from "@/components/layout/Header.vue"
  import Footer from "@/components/layout/Footer.vue"
  import { defineComponent } from "vue"

  export default defineComponent({
    components:{
      Header,
      Footer
    }
  })
</script>
