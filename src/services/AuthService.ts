import { datasource } from '@/boot/datasource'

export default {
  signin(username:string, password:string) {
    const body = {
      username: username,
      password: password
    }
    return datasource.post('api/auth/jwt/create/', body);
  },
  verifyToken(token:string) {
    const body = {
      token: token
    }
    return datasource.post('api/auth/jwt/verify/', body);
  },
  resetPassword(email:string) {
    const body = {
      email: email
    }
    return datasource.post('api/users/reset_password/', body);
  },
}
