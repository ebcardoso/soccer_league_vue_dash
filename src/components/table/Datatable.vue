<template>
  <div class="row g-3 mb-4 align-items-center justify-content-between">
    <div class="col-auto">
      <div class="page-utilities">
        <div class="row g-2 justify-content-start justify-content-md-end align-items-center">
          <div class="col-auto">
            <form @submit.prevent="search" class="table-search-form row gx-1 align-items-center">
              <div class="col-auto">
                <input type="text" v-model="searchKey" id="search-orders" name="searchorders" class="form-control search-orders" placeholder="Search">
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
                  <th class="cell" v-for="(column, index) in datatable?.columns" :key="index"><center>{{column}}</center></th>
                  <th class="cell" v-if="datatable?.show_options"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(model, index) in datatable?.tableContent" :key="index">
                  <td class="cell" v-for="(field, index2) in model" :key="index2">{{field}}</td>
                  <td class="cell" v-if="datatable?.show_options"> 
                    <center>
                      <div class="dropdown">
                        <div class="dropdown-toggle no-toggle-arrow" data-bs-toggle="dropdown" aria-expanded="false">
                          <button class="btn-sm app-btn-secondary">Options</button>
                        </div>
                        <!--//dropdown-toggle-->
                        <ul class="dropdown-menu">
                          <li v-for="(option, index3) in datatable?.tableOptions(model.id)" :key="index3">
                            <a class="dropdown-item" href="#">
                              {{option.name}}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <!--//dropdown-->
                    </center>
                  </td>
                </tr>
              </tbody>
            </table>
          </div><!--//table-responsive-->
        </div><!--//app-card-body-->		
      </div><!--//app-card-->

      <nav class="app-pagination">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="[button_previous_active() ? '' : 'disabled']">
            <button class="page-link" @click="previous_page">Previous</button>
          </li>

          <li class="page-item" v-if="(currentPage-2 > 0) && (currentPage-2 <= datatable?.numberOfpages) && !button_next_active()"><a class="page-link" href="#">{{currentPage-2}}</a></li>
          <li class="page-item" v-if="(currentPage-1 > 0)"><a class="page-link" href="#">{{currentPage-1}}</a></li>
          <li class="page-item active" v-if="(datatable?.numberOfpages >= 1)"><a class="page-link" href="#">{{currentPage}}</a></li>
          <li class="page-item" v-if="(currentPage+1 <= datatable?.numberOfpages)"><a class="page-link" href="#">{{currentPage+1}}</a></li>
          <li class="page-item" v-if="(currentPage+2 <= datatable?.numberOfpages) && !button_previous_active()"><a class="page-link" href="#">{{currentPage+2}}</a></li>

          <li class="page-item" :class="[button_next_active() ? '' : 'disabled']">
            <button class="page-link" @click="next_page">Next</button>
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
        searchKey: '',
        currentPage: 1,
      }
    },
    mounted() {
      this.search();
    },
    methods: {
      search():void {
        this.datatable?.filterItems(this.searchKey, 1);
        this.currentPage = 1;
      },
      previous_page():void {
        if (this.currentPage != 1) {
          this.currentPage-=1;
          this.datatable?.filterItems(this.searchKey, this.currentPage);
        }
      },
      next_page():void {
        if (this.currentPage < this.datatable?.numberOfpages) {
          this.currentPage+=1;
          this.datatable?.filterItems(this.searchKey, this.currentPage);
        }
      },
      button_previous_active():boolean {
        if (this.currentPage == 1) {
          return false;
        }
        return true;
      },
      button_next_active():boolean {
        if (this.currentPage == this.datatable?.numberOfpages) {
          return false;
        }
        return true;
      }
    },
  })
</script>
