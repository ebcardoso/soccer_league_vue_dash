import { Competition } from "@/models/Competition";

export interface CompetitionListDTO {
  count:number,
  next?:string,
  previous?:string,
  results:Array<Competition>
}
