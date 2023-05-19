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
  resetPasswordConfirm(uid:string, token:string, new_password:string, re_new_password:string) {
    const body = {
      uid: uid,
      token: token,
      new_password: new_password,
      re_new_password: re_new_password
    }
    return datasource.post('api/users/reset_password_confirm/', body);
  },
}
