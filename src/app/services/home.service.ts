import { Injectable, inject } from '@angular/core';
import { environment } from '../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly apiKey: string = environment.apiKey;
  private http = inject(HttpClient);

  constructor() { }

  getPredection(): Observable<any> {
    const headers = new HttpHeaders()
      .set('api_key', this.apiKey)
      .set('Access-Control-Allow-Origin', 'https://opendata.aemet.es');
    //const url = 'https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/horaria/Monovar';
    //const url = 'https://opendata.aemet.es/opendata/api/observacion/convencional/todas';
    const url = 'https://opendata.aemet.es/opendata';

    return this.http.get(url, { headers });
  }
}
