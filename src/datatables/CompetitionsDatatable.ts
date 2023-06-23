import { CompetitionListDTO } from '@/dto/competition/CompetitionListDTO';
import CompetitionsService from '@/services/CompetitionsService';

export default class TeamsDatatable {
  competitionListDTO?:CompetitionListDTO;
  columns:Array<string>;
  tableContent:Array<Array<any>>;
  optionsContent:Array<Object>
  numberOfpages:number;
  canShowOptions:boolean;

  constructor() {
    this.columns = ['Name', 'Type',];
    this.tableContent = [];
    this.optionsContent = [];
    this.numberOfpages = 1;
    this.canShowOptions = true;
  }

  //Set Table Items
  async filterItems(search:string, page:number) {
    await CompetitionsService.listAll(search, page).then(response => {
      this.competitionListDTO = response.data;
      this.numberOfpages = Math.floor((this.competitionListDTO?.count-1) / 10) + 1;
    });
    this.mapDatatable();
  }

  mapDatatable():void {
    this.tableContent = [];
    this.optionsContent = [];
    this.competitionListDTO?.results.forEach(model => {
      this.tableContent.push([
        model.name, 
        this.decodeCompetitionType(model.type)
      ]);
      this.optionsContent.push(this.tableOptions(model.id));
    });
  }

  //Options
  tableOptions(id:any) {
    /*Button Label | Address | Type
      - Type
        0 - Link
        1 - Delete */
    return [
      // ['View', `/competitions/${id}`, 0],
      // ['Edit', `/competitions/${id}/edit`, 0],
      ['Delete', id, 1]
    ]
  }

  deleteItem(id:string) {
    return CompetitionsService.delete(id);
  }

  //Decoding Items
  decodeCompetitionType(type_id:number):string {
    switch (type_id) {
      case 1:
        return "Local";
      case 2:
        return 'Regional';
      case 3:
        return 'National';
      case 4:
        return 'International Clubs';
      case 5:
        return 'National Teams';
      default:
        return '';
    }    
  }
}
