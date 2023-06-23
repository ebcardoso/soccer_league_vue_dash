import BaseViewmodel from "@/viewmodels/BaseViewmodel";
import CompetitionsDatatable from "@/datatables/CompetitionsDatatable"
import CompetitionsService from "@/services/CompetitionsService";
import { Competition } from "@/models/Competition";

export default class CompetitionsViewmodel extends BaseViewmodel {
  datatable?:CompetitionsDatatable;
  model:Competition | undefined;
  
  constructor() {
    super();
    this.datatable = new CompetitionsDatatable();
  }

  getDatatable() {
    return this.datatable;
  }

  //Route
  getRouteIndex():string {
    return 'teamsIndexPath'
  }

  //Page Titles
  getTitleIndex():string {
    return "Competitions";
  }
}
