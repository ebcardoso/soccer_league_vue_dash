import { UserListDTO } from '@/dto/user/UserListDTO';
import UsersService from '@/services/UsersService';

export default class UsersDatatable {
  userListDTO?:UserListDTO;
  columns:Array<string>;
  tableContent:Array<Array<string>>;
  numberOfpages:number;
  show_options:boolean;

  constructor() {
    this.columns = ['Username', 'E-Mail',];
    this.tableContent = [];
    this.numberOfpages = 1;
    this.show_options = true;
  }

  async filterItems(search:string, page:number) {
    await UsersService.listAll(search, page).then(response => {
      this.userListDTO = response.data;
      this.numberOfpages = Math.floor((this.userListDTO?.count-1) / 10) + 1;
    });
    this.mapDatatable();
  }

  mapDatatable():void {
    this.tableContent = [];
    this.userListDTO?.results.forEach(model => {
      this.tableContent.push([model.username, model.email]);
    });
  }

  tableOptions(id:number) {
    return [
      {
        name: 'View',
      },
      {
        name: 'Edit',
      },
      {
        name: 'Delete',
      }
    ]
  }
}
