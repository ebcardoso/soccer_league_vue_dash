import { Team } from "@/models/Team";

export interface TeamListDTO {
  count:number,
  next?:string,
  previous?:string,
  results:Array<Team>
}
