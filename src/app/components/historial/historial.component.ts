import { Component } from '@angular/core';
import { TransaccionesService } from '../../services/transacciones.service';
import { Transaccion } from '../../models/transaccion';
import Swal from 'sweetalert2';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css',
})
export class HistorialComponent {
  transacciones: Transaccion[] = [];
  clienteId = '1'; // Reemplaza con el ID real del cliente si es dinámico

  constructor(private transaccionService: TransaccionesService) {}

  ngOnInit(): void {
    this.cargarHistorial();
  }

  cargarHistorial(): void {
    this.transaccionService.verHistorial(this.clienteId).subscribe({
      next: (data) => {
        this.transacciones = data;
      },
      error: (error) => {
        console.error('Error al cargar el historial:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error al cargar historial',
          text: `No se pudo obtener el historial del cliente: ${
            error.message || 'Error desconocido'
          }`,
        });
      },
    });
  }

  cancelarFondo(transaccion: Transaccion): void {
    if (transaccion.tipo === 'Apertura') {
      Swal.fire({
        icon: 'info',
        title: 'Cancelar Fondo',
        text: `¿Seguro que deseas cancelar la apertura del fondo ${transaccion.fondoNombre}?`,
        showCancelButton: true,
        confirmButtonText: 'Sí, cancelar',
        cancelButtonText: 'Salir',
        confirmButtonColor: '#007bff',
        cancelButtonColor: '#dc3545',
      }).then((result) => {
        if (result.isConfirmed) {
          // Llama al servicio para cancelar el fondo
          this.transaccionService
            .cancelarFondo(
              transaccion.clienteId,
              transaccion.fondoId,
              transaccion.id
            )
            .subscribe({
              next: () => {
                Swal.fire({
                  icon: 'success',
                  title: 'Saldo Insuficiente',
                  text: `La apertura del fondo ${transaccion.fondoNombre} ha sido cancelada.`,
                  confirmButtonText: 'Aceptar',
                  confirmButtonColor: '#007bff',
                });
                // Recargar el historial después de la cancelación
                this.cargarHistorial(); // Vuelve a cargar las transacciones
              },
              error: (error) => {
                Swal.fire(
                  'Error',
                  'Ocurrió un problema al cancelar el fondo. Intenta nuevamente.',
                  'error'
                );
                console.error('Error al cancelar el fondo:', error);
              },
            });
        }
      });
    }
  }
}
