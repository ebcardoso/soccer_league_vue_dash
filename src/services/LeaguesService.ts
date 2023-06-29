import { datasource, getConfigs } from '@/boot/datasource'
import { LeagueListDTO } from '@/dto/league/LeagueListDTO';
import { League } from '@/models/League';

export default {
  listAll:(search:string, page:number) => {
    const url = 'leagues/?page='+page+'&search='+search;
    return datasource.get<LeagueListDTO>(url, getConfigs());
  },
}