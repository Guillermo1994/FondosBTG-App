import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fondo } from '../models/fondos';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FondosService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  obtenerFondos(): Observable<Fondo[]> {
    return this.http.get<Fondo[]>(`${this.apiUrl}/fondos`);
  }
}
