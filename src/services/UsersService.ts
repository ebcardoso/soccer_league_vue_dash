import { datasource, config } from '@/boot/datasource'
import { UserListDTO } from '@/dto/user/UserListDTO';
import { User } from '@/models/User';

export default {
  listAll:(search:string, page:number) => {
    const url = 'api/users/?page='+page+'&search='+search;
    return datasource.get<UserListDTO>(url, config);
  },
}
