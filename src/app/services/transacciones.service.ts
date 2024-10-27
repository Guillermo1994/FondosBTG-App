import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';
import { AperturaPeticion } from '../models/aperturaPeticion';

@Injectable({
  providedIn: 'root',
})
export class TransaccionesService {
  private apiUrl = 'http://localhost:8080/transacciones';

  constructor(private http: HttpClient) {}

  verHistorial(clienteId: string): Observable<Transaccion[]> {
    return this.http.get<Transaccion[]>(
      `${this.apiUrl}/historial/${clienteId}`
    );
  }

  cancelarFondo(
    clienteId: string,
    fondoId: string,
    idTransaccion: string
  ): Observable<string> {
    return this.http.post(
      `${this.apiUrl}/cancelacion/${clienteId}/${fondoId}/${idTransaccion}`,
      {},
      { responseType: 'text' }
    );
  }

  abrirFondo(
    clienteId: string,
    fondoId: string,
    aperturaPeticion: AperturaPeticion
  ): Observable<string> {
    return this.http.post(
      `${this.apiUrl}/apertura/${clienteId}/${fondoId}`,
      aperturaPeticion,
      { responseType: 'text' }
    );
  }
}
