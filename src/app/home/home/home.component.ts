import { Component, Renderer2 } from '@angular/core';
import { Fondo } from '../../models/fondos';
import { FondosService } from '../../services/fondos.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransaccionesService } from '../../services/transacciones.service';
import Swal from 'sweetalert2';
import { Cliente } from '../../models/cliente';
import { ClientesService } from '../../services/clientes.service';
import { AperturaPeticion } from '../../models/aperturaPeticion';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  fondos: Fondo[] = [];
  cliente!: Cliente;
  selectedFondo: Fondo | null = null;
  monto: number | null = null;
  canalNotificacion: string = '';

  constructor(
    private clienteService: ClientesService,
    private fondoService: FondosService,
    private transaccionService: TransaccionesService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.cargarFondos();
    this.cargarCliente();
  }

  cargarCliente(): void {
    this.clienteService.obtenerClientePorId().subscribe({
      next: (data) => {
        this.cliente = data;
      },
      error: (err) => {
        console.error('Error al cargar cliente:', err.message);
      },
    });
  }

  cargarFondos(): void {
    this.fondoService.obtenerFondos().subscribe((data) => {
      this.fondos = data;
    });
  }

  openModal(fondo: Fondo): void {
    if (this.cliente.saldoInicial < fondo.montoMinimo) {
      Swal.fire({
        icon: 'warning',
        title: 'Saldo Insuficiente',
        text: `Tu saldo actual es insuficiente para abrir este fondo. El monto mínimo requerido es de ${fondo.montoMinimo}.`,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#007bff',
      });
      return;
    }
    this.selectedFondo = fondo;
    this.monto = null;
    const modalElement = document.getElementById('aperturaModal');
    if (modalElement) {
      this.renderer.addClass(modalElement, 'show');
      this.renderer.setStyle(modalElement, 'display', 'block');
      this.renderer.setStyle(
        modalElement,
        'backgroundColor',
        'rgba(0, 0, 0, 0.5)'
      );
    }
  }

  closeModal(): void {
    const modalElement = document.getElementById('aperturaModal');
    if (modalElement) {
      this.renderer.removeClass(modalElement, 'show');
      this.renderer.setStyle(modalElement, 'display', 'none');
    }
  }

  submitApertura(): void {
    if (
      this.monto &&
      this.selectedFondo &&
      this.monto >= this.selectedFondo.montoMinimo &&
      this.canalNotificacion
    ) {
      const clienteId = this.cliente.id;
      const aperturaPeticion: AperturaPeticion = {
        monto: this.monto,
        canalNotificacion: this.canalNotificacion,
      };

      this.transaccionService
        .abrirFondo(clienteId, this.selectedFondo.id, aperturaPeticion)
        .subscribe({
          next: (response: any) => {
            Swal.fire({
              icon: 'success',
              title: 'Apertura Exitosa',
              text: response,
              confirmButtonText: 'Aceptar',
              confirmButtonColor: '#007bff',
            });
            this.closeModal();
            this.cargarCliente();
          },
          error: (error: any) => {
            Swal.fire({
              icon: 'error',
              title: 'Error en la Apertura',
              text: `No se pudo completar la apertura de cuenta: ${
                error.message || 'Error desconocido'
              }.`,
              confirmButtonText: 'Cerrar',
            });
          },
        });
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Información Incompleta',
        text: `El monto debe ser igual o superior a ${this.selectedFondo?.montoMinimo} y debe seleccionar un canal de notificación.`,
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#007bff',
      });
    }
  }
}
