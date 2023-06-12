import { datasource, config } from '@/boot/datasource'
import { TeamListDTO } from '@/dto/team/TeamListDTO';
import { Team } from '@/models/Team';

export default {
  listAll:(search:string, page:number) => {
    const url = 'teams/?page='+page+'&search='+search;
    return datasource.get<TeamListDTO>(url, config);
  },
  find:(id:string) => {
    return datasource.get('teams/'+id, config);
  },
  create:(team:Team) => {
    return datasource.post('teams/', team, config);
  },
  update:(team:Team) => {
    return datasource.patch('teams/'+team.id, team, config);
  },
  delete:(id:string) => {
    return datasource.delete('teams/'+id, config);
  }
}