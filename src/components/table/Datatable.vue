<template>
  <div class="row g-3 mb-4 align-items-center justify-content-between">
    <div class="col-auto">
      <div class="page-utilities">
        <div class="row g-2 justify-content-start justify-content-md-end align-items-center">
          <div class="col-auto">
            <form @submit.prevent="search" class="table-search-form row gx-1 align-items-center">
              <div class="col-auto">
                <input type="text" v-model="search_key" id="search-orders" name="searchorders" class="form-control search-orders" placeholder="Search">
              </div>
              <div class="col-auto">
                <button type="submit" class="btn app-btn-secondary">Search</button>
              </div>
            </form> 
          </div><!--//col-->
        </div><!--//row-->
      </div><!--//table-utilities-->
    </div><!--//col-auto-->
  </div> <!--//row-->
  
  <div class="tab-content" id="orders-table-tab-content">
    <div class="tab-pane fade show active" id="orders-all" role="tabpanel" aria-labelledby="orders-all-tab">
      <div class="app-card app-card-orders-table shadow-sm mb-5">
        <div class="app-card-body">
          <div class="table-responsive">
            <table class="table app-table-hover mb-0 text-left">
              <thead>
                <tr>
                  <th class="cell" v-for="(column, index) in datatable?.columns" :key="index">{{column}}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(model, index) in datatable?.items" :key="index">
                  <td class="cell" v-for="(field, index2) in model" :key="index2">{{field}}</td>
                </tr>
              </tbody>
            </table>
          </div><!--//table-responsive-->
        </div><!--//app-card-body-->		
      </div><!--//app-card-->

      <nav class="app-pagination">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
          </li>
          <!-- TO DO: Render pagination dinamically -->
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav><!--//app-pagination-->
    </div><!--//tab-pane-->
  </div><!--//tab-content-->
</template>

<script lang="ts">
  import { defineComponent } from 'vue'; 

  export default defineComponent({
    name: "Datatable",
    props: {
      datatable: Object
    },
    data() {
      return {
        search_key: ''
      }
    },
    methods: {
      search():void {
        this.datatable?.filter_items(this.search_key);
      }
    },
  })
</script>