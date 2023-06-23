import { datasource, getConfigs } from '@/boot/datasource'
import { CompetitionListDTO } from '@/dto/competition/CompetitionListDTO';
import { Competition } from '@/models/Competition';

export default {
  listAll:(search:string, page:number) => {
    const url = 'competitions/?page='+page+'&search='+search;
    return datasource.get<CompetitionListDTO>(url, getConfigs());
  },
  find:(id:string) => {
    return datasource.get('competitions/'+id, getConfigs());
  },
  create:(model:Competition) => {
    return datasource.post('competitions/', model, getConfigs());
  },
  update:(model:Competition) => {
    return datasource.patch('competitions/'+model.id, model, getConfigs());
  },
  delete:(id:string) => {
    return datasource.delete('competitions/'+id, getConfigs());
  }
}