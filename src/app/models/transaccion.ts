export interface Transaccion {
  id: string;
  clienteId: string;
  fondoId: string;
  fondoNombre: string;
  monto: number;
  tipo: string; // 'apertura' o 'cancelacion'
  fecha: Date;
}
