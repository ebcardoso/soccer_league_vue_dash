import { LeagueListDTO } from '@/dto/league/LeagueListDTO';
import LeaguesService from '@/services/LeaguesService';

export default class LeaguesDatatable {
  modelListDTO?:LeagueListDTO;
  columns:Array<string>;
  tableContent:Array<Array<any>>;
  optionsContent:Array<Object>
  numberOfpages:number;
  canShowOptions:boolean;

  constructor() {
    this.columns = ['Name', 'Activated?', 'Created At'];
    this.tableContent = [];
    this.optionsContent = [];
    this.numberOfpages = 1;
    this.canShowOptions = true;
  }

  async filterItems(search:string, page:number) {
    await LeaguesService.listAll(search, page).then(response => {
      this.modelListDTO = response.data;
      this.numberOfpages = Math.floor((this.modelListDTO?.count-1) / 10) + 1;
    });
    this.mapDatatable();
  }

  mapDatatable():void {
    this.tableContent = [];
    this.optionsContent = [];
    this.modelListDTO?.results.forEach(model => {
      this.tableContent.push([model.name, this.mapStatus(model.status), model.created]);
      this.optionsContent.push(this.tableOptions(model.id));
    });
  }

  tableOptions(id:any) {
    /*Button Label | Address | Type
      - Type
        0 - Link
        1 - Delete */
    return [
      // ['View', `/leagues/${id}`, 0],
      // ['Edit', `/leagues/${id}/edit`, 0],
      ['Delete', id, 1]
    ]
  }

  deleteItem(id:string) {
    return LeaguesService.delete(id);
  }

  //Map
  mapStatus(status:boolean):string {
    return status ? 'YES' : 'NO'
  }
}
