import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  obtenerClientePorId(idCliente = '1'): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrl}/clientes/${idCliente}`);
  }
}
