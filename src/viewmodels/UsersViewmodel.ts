import UsersDatatable from "@/datatables/UsersDatatable"
import UsersService from "@/services/UsersService";
import { User } from "@/models/User";

export default class UsersViewmodel {
  datatable?:UsersDatatable;
  titleIndex:string;
  titleCreate:string;
  titleShow:string;

  constructor() {
    this.datatable = new UsersDatatable();
    this.titleIndex = "Users";
    this.titleCreate = "Create User";
    this.titleShow = "Describe User";
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

  getTitleShow():string {
    return this.titleShow;
  }

  //Route
  getRouteIndex():string {
    return 'usersIndexPath'
  }

  //Form Fields
  fieldGroups() {
    return [
      {title: "User Credentials", fields: this.fields1()},
    ]
  }

  fields1() {
    return [
      {name: "username", label: "Username:", type: "text", required: true, canShow: true},
      {name: "email", label: "E-Mail:", type: "text", required: true, canShow: true},
      {name: "password", label: "Password:", type: "password", required: true, canShow: false},
    ]
  }

  //Service Actions
  saveModel(model:User) {
    return UsersService.create(model);
  }

  editModel(model:User) {
    return UsersService.update(model);
  }

  findModel(id:string) {
    return UsersService.find(id);
  }
}
