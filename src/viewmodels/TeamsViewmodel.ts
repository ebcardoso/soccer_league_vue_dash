import BaseViewmodel from "@/viewmodels/BaseViewmodel";
import TeamsDatatable from "@/datatables/TeamsDatatable"
import TeamsService from "@/services/TeamsService";
import { Team } from "@/models/Team";

export default class TeamsViewmodel extends BaseViewmodel {
  datatable?:TeamsDatatable;
  model:Team | undefined;

  constructor() {
    super();
    this.datatable = new TeamsDatatable();
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
    return "Soccer Teams";
  }

  getTitleCreate():string {
    return "Create Team";
  }

  getTitleEdit():string {
    return "Edit Team";
  }

  getTitleShow():string {
    return "Describe Team";
  }

  //Form Fields
  fieldGroups() {
    return [
      {title: "Team's Information", fields: this.fields1()},
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
  saveModel(model:Team) {
    return TeamsService.create(model);
  }

  editModel(model:Team) {
    return TeamsService.update(model);
  }

  findModel(id:string) {
    return TeamsService.find(id);
  }
}
