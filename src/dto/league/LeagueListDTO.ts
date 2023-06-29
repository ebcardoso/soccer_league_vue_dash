import { League } from "@/models/League";

export interface LeagueListDTO {
  count:number,
  next?:string,
  previous?:string,
  results:Array<League>
}
