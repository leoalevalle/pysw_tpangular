import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto1.html',
  styleUrl: './punto1.css',
})
export class Punto1 {
  // Array de eventos (fuente de datos)
  eventos = [
    {
      nombre: 'Taller de Yoga',
      descripcion: 'Aprende técnicas de relajación y meditación. Mejora tu flexibilidad y reduce el estrés.',
      img: 'https://www.sportaktiv.com/sites/default/files/2022-11/bild1-adobestock_305593240.jpg' 
    },
    {
      nombre: 'Conferencia de Tecnología',
      descripcion: 'Las últimas tendencias en IA, Machine Learning y Desarrollo Web.',
      img: 'https://www.power.com/sites/default/files/inline-images/processed-C78CBA16-0C6C-44D8-AF56-C3313F3C78C2.jpeg'
    },
    {
      nombre: 'Taller de Cocina Saludable',
      descripcion: 'Aprende a preparar comidas nutritivas y deliciosas.',
      img: 'https://estaticos-cdn.prensaiberica.es/clip/0e8f214e-1e38-45fe-9ebd-e7c6e2fba6e0_16-9-discover-aspect-ratio_default_0.jpg'
    },
    {
      nombre: 'Curso de Fotografía',
      descripcion: 'Domina tu cámara y aprende técnicas profesionales.',
      img: 'https://images.pexels.com/photos/27868430/pexels-photo-27868430/free-photo-of-a-group-of-people-taking-pictures-with-cameras.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
    }
  ];

  
  indiceActual: number = 0;

  // devuelve el evento actual
  get eventoActual() {
    return this.eventos[this.indiceActual];
  }

  // Método para ir al siguiente evento
  siguiente() {
    if (this.indiceActual < this.eventos.length - 1) {
      this.indiceActual++;
    } else {
      this.indiceActual = 0;  // vuelve al primero 
    }
  }

  // Método para ir al evento anterior
  anterior() {
    if (this.indiceActual > 0) {
      this.indiceActual--;
    } else {
      this.indiceActual = this.eventos.length - 1;  // Va al último
    }
  }
}
