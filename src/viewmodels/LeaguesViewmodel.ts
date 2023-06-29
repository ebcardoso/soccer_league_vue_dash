import BaseViewmodel from "@/viewmodels/BaseViewmodel";
import LeaguesDatatable from "@/datatables/LeaguesDatatable"
import LeaguesService from "@/services/LeaguesService";
import { League } from "@/models/League";

export default class LeaguesViewmodel extends BaseViewmodel {
  datatable?:LeaguesDatatable;

  constructor() {
    super();
    this.datatable = new LeaguesDatatable();
  }

  getDatatable() {
    return this.datatable;
  }

  //Route
  getRouteIndex():string {
    return 'leaguesIndexPath'
  }

  //Page Titles
  getTitleIndex():string {
    return "Fantasy Leagues";
  }

  getTitleCreate():string {
    return "Create Fantasy League";
  }

  getTitleEdit():string {
    return "Edit Fantasy League";
  }

  getTitleShow():string {
    return "Describe Fantasy League";
  }

  //Form Fields
  fieldGroups() {
    return [
      {title: "Fantasy League's Information", fields: this.fields1()},
    ]
  }

  fields1() {
    return [
      {name: "name", label: "Name:", type: "text", required: true, canShow: true},
      {name: "name_complete", label: "Full Name:", type: "text", required: true, canShow: true},
      {name: "stadium", label: "Stadium:", type: "text", required: true, canShow: true},
      {name: "city", label: "City:", type: "text", required: true, canShow: true},
      {name: "founded_in", label: "Year of Foundation:", type: "text", required: true, canShow: true},
    ]
  }

  //Form Actions
  saveModel(model:League) {
    // return LeaguesService.create(model);
  }

  editModel(model:League) {
    // return LeaguesService.update(model);
  }

  findModel(id:string) {
    // return LeaguesService.find(id);
  }
}
