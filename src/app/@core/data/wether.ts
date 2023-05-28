import { Observable } from "rxjs";

export interface Wether {
    id: number
}

export abstract class WetherData {
    abstract getWether(): Observable<Wether>;
}