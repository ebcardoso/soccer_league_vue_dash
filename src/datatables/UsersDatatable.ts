import { UserListDTO } from '@/dto/user/UserListDTO';
import UsersService from '@/services/UsersService';

export default class UsersDatatable {
  userListDTO?:UserListDTO;
  columns:Array<string>;
  tableContent:Array<Array<string>>;
  optionsContent:Array<Object>
  canShowOptions:boolean;
  numberOfpages:number;

  constructor() {
    this.columns = ['Username', 'E-Mail',];
    this.tableContent = [];
    this.optionsContent = [];
    this.canShowOptions = true;
    this.numberOfpages = 1;
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
      this.optionsContent.push(this.tableOptions(model.id));
    });
  }

  tableOptions(id:any) {
    return [
      ['View', `/users/${id}`],
      ['Edit', `/users/${id}/edit`],
      ['Delete', '#']
    ]
  }
}
