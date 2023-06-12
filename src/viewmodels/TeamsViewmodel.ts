import TeamsDatatable from "@/datatables/TeamsDatatable"
import TeamsService from "@/services/TeamsService";
import { Team } from "@/models/Team";

export default class TeamsViewmodel {
  datatable?:TeamsDatatable;
  titleIndex:string;
  titleCreate:string;
  titleEdit:string;
  titleShow:string;
  model:Team | undefined;

  constructor() {
    this.datatable = new TeamsDatatable();
    this.titleIndex = "Soccer Teams";
    this.titleCreate = "Create Team";
    this.titleEdit = "Edit Time";
    this.titleShow = "Describe Team";
  }

  getDatatable() {
    return this.datatable;
  }

  getTitleIndex():string {
    return this.titleIndex;
  }

  getTitleCreate():string {
    return this.titleCreate;
  }

  getTitleEdit():string {
    return this.titleEdit;
  }

  getTitleShow():string {
    return this.titleShow;
  }

  //Route
  getRouteIndex():string {
    return 'teamsIndexPath'
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
