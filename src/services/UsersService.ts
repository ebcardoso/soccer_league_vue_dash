import { datasource, config } from '@/boot/datasource'
import { UserListDTO } from '@/dto/user/UserListDTO';
import { User } from '@/models/User';

export default {
  listAll:(search:string, page:number) => {
    const url = 'api/users/?page='+page+'&search='+search;
    return datasource.get<UserListDTO>(url, config);
  },
  find:(id:string) => {
    return datasource.get('api/users/'+id, config);
  },
  create:(user:User) => {
    return datasource.post('api/users/', user, config);
  },
}
