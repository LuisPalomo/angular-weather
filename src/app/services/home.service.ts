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

<<<<<<< HEAD
  getPredection(lat: any, log: any): Observable<any> {
    /*const headers = new HttpHeaders()
      .set('api_key', this.apiKey)
    //.set('Access-Control-Allow-Origin', 'https://opendata.aemet.es');
    //const url = 'https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/horaria/Monovar';
    //const url = 'https://opendata.aemet.es/opendata/api/observacion/convencional/todas';
    const url = 'http://api.weatherstack.com/';

    return this.http.get(url, { headers });*/
    const accesKey = this.apiKey;
    const apiUrl = `http://api.weatherstack.com/current?access_key=${accesKey}&query=${lat},${log}`;
    //const apiUrl = `http://api.weatherstack.com/autocomplete?access_key=${accesKey}&query=${city}`;
    return this.http.get(apiUrl);

=======
  getPredection(): Observable<any> {
    const headers = new HttpHeaders()
      .set('api_key', this.apiKey)
      .set('Access-Control-Allow-Origin', 'https://opendata.aemet.es');
    //const url = 'https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/horaria/Monovar';
    //const url = 'https://opendata.aemet.es/opendata/api/observacion/convencional/todas';
    const url = 'https://opendata.aemet.es/opendata';

    return this.http.get(url, { headers });
>>>>>>> 01a822598d4d6a61efe274d93dc78f6c97555c7e
  }
}
