import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

import { Inscripcion } from '../../services/inscripcion';
import { Inscripcionmodel } from '../../models/inscripcionmodel';

@Component({
  selector: 'app-punto4',
  imports: [CommonModule, FormsModule],
  templateUrl: './punto4.html',
  styleUrl: './punto4.css',
})

export class Punto4 {
  nuevaInscripcion: Inscripcionmodel = this.resetInscripcion();
  indiceEditando: number | null = null; // Para edicion, null significa creación

  constructor(public inscripcionService: Inscripcion) {}

  resetInscripcion(): Inscripcionmodel {
    return { dni: '', precio: 0, categoriaAlumno: '', fechaInscripcion: '', email: '', curso: '', precioFinal: 0 };
  }

  calcularPrecio() {
    if (this.nuevaInscripcion.precio > 0 && this.nuevaInscripcion.categoriaAlumno) {
      let descuento = 0;
      if (this.nuevaInscripcion.categoriaAlumno === '1') descuento = 0.35;
      if (this.nuevaInscripcion.categoriaAlumno === '2') descuento = 0.50;
      this.nuevaInscripcion.precioFinal = this.nuevaInscripcion.precio * (1 - descuento);
    }
  }

  registrar(form: NgForm  ) {
    if (this.indiceEditando === null) {
      // MODO CREAR
      this.inscripcionService.registrarInscripcion({ ...this.nuevaInscripcion });
    } else {
      // MODO EDITAR
      this.inscripcionService.actualizarInscripcion(this.indiceEditando, { ...this.nuevaInscripcion });
      this.indiceEditando = null;
    }
    form.resetForm();
    this.nuevaInscripcion = this.resetInscripcion();
  }

  prepararEditar(item: Inscripcionmodel, index: number) {
    this.nuevaInscripcion = { ...item };
    this.indiceEditando = index;
  }

  eliminar(index: number) {
    if(confirm('¿Está seguro de eliminar esta inscripción?')) {
      this.inscripcionService.deleteInscripcion(index);
    }
  }

  cancelarEdicion(form: NgForm) {
    form.resetForm();
    this.nuevaInscripcion = this.resetInscripcion();
    this.indiceEditando = null;
  }
}