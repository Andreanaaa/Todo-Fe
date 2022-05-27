import { StatusEnum } from 'src/app/shared/model/enum/status-enum';

export interface Todo{
    id:number,
    descrizione:string,
    status:StatusEnum,
    data_creazione:string,
    data_scadenza:string
}