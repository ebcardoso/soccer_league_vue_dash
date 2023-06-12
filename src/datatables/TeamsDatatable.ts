import { TeamListDTO } from '@/dto/team/TeamListDTO';
import TeamsService from '@/services/TeamsService';

export default class TeamsDatatable {
  teamListDTO?:TeamListDTO;
  columns:Array<string>;
  tableContent:Array<Array<string>>;
  optionsContent:Array<Object>
  numberOfpages:number;
  canShowOptions:boolean;

  constructor() {
    this.columns = ['Name', 'Stadium',];
    this.tableContent = [];
    this.optionsContent = [];
    this.numberOfpages = 1;
    this.canShowOptions = true;
  }

  async filterItems(search:string, page:number) {
    await TeamsService.listAll(search, page).then(response => {
      this.teamListDTO = response.data;
      this.numberOfpages = Math.floor((this.teamListDTO?.count-1) / 10) + 1;
    });
    this.mapDatatable();
  }

  mapDatatable():void {
    this.tableContent = [];
    this.optionsContent = [];
    this.teamListDTO?.results.forEach(model => {
      this.tableContent.push([model.name, model.stadium]);
      this.optionsContent.push(this.tableOptions(model.id));
    });
  }

  tableOptions(id:any) {
    /*Button Label | Address | Type
      - Type
        0 - Link
        1 - Delete */
    return [
      ['View', `/teams/${id}`, 0],
      ['Edit', `/teams/${id}/edit`, 0],
      ['Delete', id, 1]
    ]
  }

  deleteItem(id:string) {
    return TeamsService.delete(id);
  }
}
