import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  obtenerClientePorId(idCliente = '1'): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrl}/clientes/${idCliente}`);
  }
}
