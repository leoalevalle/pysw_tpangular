import { Injectable } from '@angular/core';
import { Inscripcionmodel } from '../models/inscripcionmodel';

@Injectable({
  providedIn: 'root',
})
export class Inscripcion {
  private inscripciones: Inscripcionmodel[] = [];
  
  constructor() {}

  // Crear
  registrarInscripcion(inscripcion: Inscripcionmodel) {
    this.inscripciones.push(inscripcion);
  }

  // Leer
  getInscripciones(): Inscripcionmodel[] {
    return this.inscripciones;
  }
  // Actualizar
  actualizarInscripcion(index: number, inscripcion: Inscripcionmodel) {
    if (index >= 0 && index < this.inscripciones.length) {
      this.inscripciones[index] = inscripcion;
    }
  }

  // Eliminar
  deleteInscripcion(index: number) {
    if (index >= 0 && index < this.inscripciones.length) {
      this.inscripciones.splice(index, 1);
    }
  }

  // Resumen por categoría
  getResumen() {
    return {
      estudiantes: this.inscripciones.filter(i => i.categoriaAlumno === '1').length,
      egresados: this.inscripciones.filter(i => i.categoriaAlumno === '2').length,
      particulares: this.inscripciones.filter(i => i.categoriaAlumno === '3').length,
      total: this.inscripciones.length
    };
  }
}
