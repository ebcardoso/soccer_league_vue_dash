import UsersDatatable from "@/datatables/UsersDatatable"

export default class UsersViewmodel {
  datatable?:UsersDatatable;
  titleIndex:string;

  constructor() {
    this.datatable = new UsersDatatable();
    this.titleIndex = "Users";
  }

  getDatatable() {
    return this.datatable;
  }

  getTitleIndex():string {
    return this.titleIndex;
  }
  
}
