import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pasajero } from './pasajero';
import { PASAJEROS } from './pasajeros.json';

@Injectable({
  providedIn: 'root',
})
export class PasajeroService {
  private url: string = 'http://localhost:8090/api/pasajeros';
  constructor(private http: HttpClient) {}

  getPasajeros(): Observable<Pasajero[]> {
    //return of(PASAJEROS);

    return this.http.get<Pasajero[]>(this.url);
  }
}
