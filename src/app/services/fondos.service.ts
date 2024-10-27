import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fondo } from '../models/fondos';

@Injectable({
  providedIn: 'root',
})
export class FondosService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  obtenerFondos(): Observable<Fondo[]> {
    return this.http.get<Fondo[]>(`${this.apiUrl}/fondos`);
  }
}
