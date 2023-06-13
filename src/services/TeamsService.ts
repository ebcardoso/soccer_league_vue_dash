import { datasource, getConfigs } from '@/boot/datasource'
import { TeamListDTO } from '@/dto/team/TeamListDTO';
import { Team } from '@/models/Team';

export default {
  listAll:(search:string, page:number) => {
    const url = 'teams/?page='+page+'&search='+search;
    return datasource.get<TeamListDTO>(url, getConfigs());
  },
  find:(id:string) => {
    return datasource.get('teams/'+id, getConfigs());
  },
  create:(team:Team) => {
    return datasource.post('teams/', team, getConfigs());
  },
  update:(team:Team) => {
    return datasource.patch('teams/'+team.id, team, getConfigs());
  },
  delete:(id:string) => {
    return datasource.delete('teams/'+id, getConfigs());
  }
}