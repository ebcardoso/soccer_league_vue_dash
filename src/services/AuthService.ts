import { datasource } from '@/boot/datasource'

export default {
  signin(username:string, password:string) {
    const body = {
      username: username,
      password: password
    }
    return datasource.post('api/auth/jwt/create/', body);
  }
}
