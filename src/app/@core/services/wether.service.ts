import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ApiUrls } from '@core/data/api';
import { WetherData, Wether } from "@core/data/wether";




@Injectable()
export class WeatherService extends WetherData {

    constructor(private http: HttpClient) {
        super();
    }

    getWeather(): Observable<Wether> {
        return this.http.get<Wether>('');
    }
}
