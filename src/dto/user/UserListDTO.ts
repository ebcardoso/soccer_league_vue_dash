import { User } from "@/models/User";

export interface UserListDTO {
  count:number,
  next?:string,
  previous?:string,
  results:Array<User>
}
