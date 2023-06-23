import BaseViewmodel from "@/viewmodels/BaseViewmodel";
import CompetitionsDatatable from "@/datatables/CompetitionsDatatable"
import CompetitionsService from "@/services/CompetitionsService";
import { Competition } from "@/models/Competition";

export default class CompetitionsViewmodel extends BaseViewmodel {
  alertMessages:Array<Object>;
  datatable?:CompetitionsDatatable;
  model:Competition | undefined;
  
  constructor() {
    super();
    this.alertMessages = [];
    this.datatable = new CompetitionsDatatable();
  }

  getAlertMessages() {
    return this.alertMessages;
  }

  getDatatable() {
    return this.datatable;
  }

  //Route
  getRouteIndex():string {
    return 'competitionsIndexPath'
  }

  //Page Titles
  getTitleIndex():string {
    return "Competitions";
  }

  getTitleCreate():string {
    return "Create Competitions";
  }

  //Form Fields
  fieldGroups() {
    return [
      {title: "Competition's Information", fields: this.fields1()},
    ]
  }

  fields1() {
    return [
      {name: "name", label: "Name:", type: "text", required: true, canShow: true},
      {name: "type", label: "Type:", type: "select", options: this.competitionTypes(), required: true, canShow: true},
      {name: "final_date", label: "Final Date:", type: "date", required: true, canShow: true},
    ]
  }

  //Form Actions
  saveModel(model:Competition) {
    return CompetitionsService.create(model);
  }

  //Select Values
  competitionTypes():Array<Array<String>> {
    return [
      ['1', 'Local'],
      ['2', 'Regional'],
      ['3', 'National'],
      ['4', 'International Clubs'],
      ['5', 'National Teams']
    ]
  }
}
